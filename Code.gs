function moveAllSheetsToFolder() {
  const targetFolderName = "MY_Goggle_Sheets";
  const folders = DriveApp.getFoldersByName(targetFolderName);
  if (!folders.hasNext()) {
    Logger.log("Folder not found: " + targetFolderName);
    return;
  }
  const targetFolder = folders.next();
  const files = DriveApp.getRootFolder().getFiles();
  let movedCount = 0;
  while (files.hasNext()) {
    const file = files.next();
    if (file.getMimeType() === MimeType.GOOGLE_SHEETS) {
      targetFolder.addFile(file);
      DriveApp.getRootFolder().removeFile(file);
      movedCount++;
    }
  }
  Logger.log(movedCount + " Google Sheets moved to folder: " + targetFolderName);
}
