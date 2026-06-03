const lyricFiles = import.meta.glob('./lyrics/*.txt', { query: '?raw', import: 'default', eager: true });
const chordFiles = import.meta.glob('./chords/*.txt', { query: '?raw', import: 'default', eager: true });

const songsMap = {};

for (const path in lyricFiles) {
  const filename = path.split('/').pop(); // Ex: "01. A GENTE PRIMEIRO (RINALDO GIATTI).txt"
  const nameWithoutExt = filename.replace(/\.txt$/, '');
  const nameWithoutNumber = nameWithoutExt.replace(/^\d+[\s.]+\s*/, '');

  let title = nameWithoutNumber;
  let author = '';

  const authorMatch = nameWithoutNumber.match(/\(([^)]+)\)$/);
  if (authorMatch) {
    author = authorMatch[1].trim().replace(/\s*-\s*/g, ' | ');
    title = nameWithoutNumber.substring(0, authorMatch.index).trim();
  }

  const lyricsContent = lyricFiles[path];
  const chordsPath = `./chords/${filename}`;
  const chordsContent = chordFiles[chordsPath] || lyricsContent;

  songsMap[title] = {
    title: title,
    lyrics: lyricsContent.trim(),
    chords: chordsContent.trim(),
    content: chordsContent.trim(), // fallback
    author: author
  };
}

const songs = Object.values(songsMap);
export default songs;
