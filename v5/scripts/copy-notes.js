const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const typoraDirectory =
  "/Users/my/Library/Mobile Documents/com~apple~CloudDocs/typora";

const fileNames = fs.readdirSync(typoraDirectory);
const fileNamesExcludingPng = fileNames.filter(
  (fileName) => !fileName.endsWith(".png")
);
const fileNamesExcludingWork = fileNamesExcludingPng.filter((fileName) => {
  try {
    const fullPath = path.join(typoraDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const {
      data: { tags },
    } = matter(fileContents);

    if (tags) {
      if (!tags.includes("work") && !tags.includes("private")) {
        return true;
      }
      return false;
    } else {
      console.log(`[allNotesData] Note has no tags -- ${fileName}`);
      return true;
    }
  } catch (error) {
    console.error(`[allNotesData]: error occurred`);
    console.error(error);
    return false;
  }
});
console.log(fileNamesExcludingWork);

fileNamesExcludingWork.map((fileName) => {
  const fileToCopy = `${typoraDirectory}/${fileName}`;
  const destination = `./public/notes/${fileName}`;
  fs.copyFile(fileToCopy, destination, (error) => {
    if (error) {
      throw error;
    }
    console.log(`[SUCCESS] ${fileToCopy} => ${destination}`);
  });
});
