-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FileCode" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "code" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "isShared" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_FileCode" ("code", "createdAt", "id", "slug", "updatedAt") SELECT "code", "createdAt", "id", "slug", "updatedAt" FROM "FileCode";
DROP TABLE "FileCode";
ALTER TABLE "new_FileCode" RENAME TO "FileCode";
CREATE UNIQUE INDEX "FileCode_slug_key" ON "FileCode"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
