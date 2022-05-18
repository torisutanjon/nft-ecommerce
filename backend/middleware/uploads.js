//note: when the file was passed when the route was called in the <form action>
// the file is automatically stored in the mongodb-bucket

//dependencies
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";
import crypto from "crypto";
import path from "path";

dotenv.config();
//create the gridfs-storage
const nft_images_storage = (bucketname) =>
  new GridFsStorage({
    url: process.env.MONGO_DB_CONN_STRING,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }

          const match = ["image/png", "image/jpeg"];

          if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return filename;
          }

          const filename =
            buf.toString("hex") + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: bucketname,
          };
          resolve(fileInfo);
        });
      });
    },
  });

//configure the multer storage
const nftuploads = (bucketname) =>
  multer({
    storage: nft_images_storage(bucketname),
    // dest: "uploads",
    limits: {
      fieldSize: 16000000,
    },
  });

export default nftuploads;
