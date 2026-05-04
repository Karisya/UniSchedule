# -*- coding: utf-8 -*-
"""Parse extracted_load_utf8.txt into workload_rows.json (+ catalog rows)."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LOAD = ROOT / "tools/extracted_load_utf8.txt"
OUT = ROOT / "tools/workload_parsed.json"

# Строки, похожие на сумму семестра/года в конце блока показателя
TOTAL_RE = re.compile(r"^(\d+,\d+|\d+\.\d+|\d+)\s*$")

def join_norm(lines):
    return " ".join(x.strip() for x in lines if x.strip()).replace("  ", " ")

def split_blocks(text: str):
    """Разбить по страницам."""
    pages = re.split(r"--- page \d+ ---", text)
    return [p.strip() for p in pages if p.strip()]

def extract_catalog_numbers(raw):
    """Первая страница: после названия дисциплин идёт код и числа."""
    catalog = []
    lines = raw.splitlines()
    buf = []
    for ln in lines:
        s = ln.strip()
        if not s:
            continue
        if TOTAL_RE.match(s.replace(",", ".")):
            hrs = float(s.replace(",", "."))
            txt = join_norm(buf[-15:]) if len(buf) >= 15 else join_norm(buf)
            if txt and hrs > 0:
                catalog.append({"raw_tail": txt[-200:], "hours_at_line": hrs, "merged": join_norm(buf)})
            buf = []
        else:
            buf.append(s)
    return catalog[:50]

def main():
    raw = LOAD.read_text(encoding="utf-8")
    catalog = []

    pages = split_blocks(raw)
    # Каталог: первая крупная часть после заголовков
    if pages:
        first = pages[0][:8000]
        # Упрощённо собираем пары «длинный текст блока … число вида NN,NN в конце абзацев»
        lines = []
        for para in raw.split("\n\n"):
            p = para.strip()
            if not p:
                continue
            nums = re.findall(r"(\d+,\d+|\d+\.\d+)$", p, re.M)
            if nums and ("Радиофизика" in p or "Прикладная" in p or "Кибербез" in p or "Теория" in p):
                ln = nums[-1].replace(",", ".")
                try:
                    h = float(ln)
                    if h > 1:
                        lines.append({"merged_discipline_fragment": join_norm([p]), "hours": h})
                except ValueError:
                    pass
        catalog = lines[:30]

    out = {"source": str(LOAD), "catalog_rows_first_pages": catalog}
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    print("Written", OUT, "catalog sample", len(catalog))


if __name__ == "__main__":
    main()
