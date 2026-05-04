# -*- coding: utf-8 -*-
import fitz
import sys
out = sys.argv[1]
pdfs = sys.argv[2:]
with open(out, 'w', encoding='utf-8') as f:
    for path in pdfs:
        doc = fitz.open(path)
        f.write(f"=== FILE: {path} pages: {len(doc)} ===\n\n")
        for i in range(len(doc)):
            f.write(f"--- page {i+1} ---\n\n")
            f.write(doc[i].get_text())
            f.write("\n\n")
        doc.close()
