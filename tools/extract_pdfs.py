"""One-off: extract text from PDF paths passed as argv. UTF-8 stdout."""
from pypdf import PdfReader
import sys

def main():
    for path in sys.argv[1:]:
        r = PdfReader(path)
        print("=== FILE:", path, "pages:", len(r.pages), "===")
        for i, page in enumerate(r.pages):
            t = page.extract_text() or ""
            print(f"\n--- page {i+1} ---\n")
            print(t)

if __name__ == "__main__":
    main()
