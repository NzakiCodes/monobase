import * as fs from "fs";
import * as path from "path";
import * as _mkcert from "mkcert";
import getPath from "platform-folders";

export const mkcert = async (hosts: string[]) => {
  const appData = getPath("appData");

  // These are the default paths for mkcert
  // https://github.com/FiloSottile/mkcert
  const rootPath = path.join(appData, "mkcert", "rootCA.pem");
  const rootKeyPath = path.join(appData, "mkcert", "rootCA-key.pem");

  // If no mkcert local certificate is available
  if (!fs.existsSync(rootPath) || !fs.existsSync(rootKeyPath)) {
    return null;
  }

  return await _mkcert.createCert({
    domains: hosts,
    validityDays: 365,
    caKey: fs.readFileSync(rootKeyPath),
    caCert: fs.readFileSync(rootPath)
  });
};
