import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

function copySongsPlugin() {
  return {
    name: 'copy-songs-folder',
    closeBundle() {
      const srcDir = path.resolve(process.cwd(), 'songs');
      const destDir = path.resolve(process.cwd(), 'dist', 'songs');
      if (fs.existsSync(srcDir)) {
        fs.mkdirSync(destDir, { recursive: true });
        fs.cpSync(srcDir, destDir, { recursive: true });
        console.log('Pasta songs copiada com sucesso para dist/songs');
      }
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [copySongsPlugin()],
  server: {
    host: true, // Libera o acesso para outros dispositivos na rede local
    port: 3000,
    open: true  // Abre o navegador automaticamente
  }
});
