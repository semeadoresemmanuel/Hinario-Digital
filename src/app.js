import songs from './data/songs.js';

// Native SVG Icons for Player & List Controls
const PLAY_ICON_SVG = `<svg viewBox="0 0 132.29166 132.29168" class="song-play-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m 66.145827,0 c -36.473166,0 -66.145827,29.6727 -66.145827,66.14587 0,36.47317 29.672661,66.14581 66.145827,66.14581 36.47318,0 66.14584,-29.67264 66.14584,-66.14581 0,-36.47317 -29.67266,-66.14587 -66.14584,-66.14587 z m 27.41203,72.00656 -37.941307,23.97112 c -2.037268,1.29426 -4.732576,1.47338 -7.051296,0.21165 -2.209321,-1.2171 -3.585172,-3.54552 -3.585172,-6.07221 v -47.9304 c 0,-2.52682 1.375851,-4.85517 3.585172,-6.07221 2.209321,-1.2171 4.908018,-1.13767 7.051296,0.21185 l 37.941307,23.95755 c 2.02407,1.28328 3.22788,3.46616 3.22788,5.86056 0,2.39439 -1.20388,4.59052 -3.22788,5.86049 z"/></svg>`;

const PAUSE_ICON_SVG = `<svg viewBox="0 0 132.29166 132.29168" class="song-play-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M 66.145831 0 C 29.672665 0 0 29.672661 0 66.145831 C 0 102.619 29.672665 132.29166 66.145831 132.29166 C 102.61901 132.29166 132.29166 102.619 132.29166 66.145831 C 132.29166 29.672661 102.61901 0 66.145831 0 z M 40.662116 35.250043 L 56.708164 35.250043 C 58.930624 35.250043 60.719806 37.039232 60.719806 39.261685 L 60.719806 93.030494 C 60.719806 95.252947 58.930624 97.042135 56.708164 97.042135 L 40.662116 97.042135 C 38.439656 97.042135 36.650475 95.252947 36.650475 93.030494 L 36.650475 39.261685 C 36.650475 37.039232 38.439656 35.250043 40.662116 35.250043 z M 75.583497 35.250043 L 91.629546 35.250043 C 93.852006 35.250043 95.641704 37.039232 95.641704 39.261685 L 95.641704 93.030494 C 95.641704 95.252947 93.852006 97.042135 91.629546 97.042135 L 75.583497 97.042135 C 73.361047 97.042135 71.571856 95.252947 71.571856 93.030494 L 71.571856 39.261685 C 71.571856 37.039232 73.361047 35.250043 75.583497 35.250043 z"/></svg>`;

const PLAYLIST_ICON_SVG = `<svg viewBox="0 0 132.29168 132.29167" class="song-play-icon play-all-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-143.34054,-126.53636)"><path d="m 115.62293,122.03326 c -0.29237,0 -0.5292,0.2368 -0.5292,0.52917 v 5.29167 c 0,0.29237 0.23683,0.52916 0.5292,0.52916 h 5.29164 c 0.29237,0 0.52917,-0.23679 0.52917,-0.52916 v -5.29167 c 0,-0.29237 -0.2368,-0.52917 -0.52917,-0.52917 z m 6.34997,1.05833 v 5.49464 a 0.32621691,0.32621691 0 0 1 -0.32619,0.3262 h -5.49464 a 0.52958334,0.52958334 0 0 0 0.53002,0.52917 h 5.28999 a 0.53000646,0.53000646 0 0 0 0.52999,-0.53 v -5.28998 a 0.52958334,0.52958334 0 0 0 -0.52917,-0.53003 z m -2.84037,0.43263 h 7e-5 c 0.12725,4e-5 0.23836,0.10329 0.23836,0.23637 v 2.16433 c 0,0.006 -5.5e-4,0.0108 -10e-4,0.0155 a 0.55346974,0.55346974 0 0 1 -0.55245,0.53803 0.55346974,0.55346974 0 0 1 -0.55351,-0.55351 0.55346974,0.55346974 0 0 1 0.55351,-0.55348 0.55346974,0.55346974 0 0 1 0.29183,0.0832 v -0.94437 c 0,-0.0565 -0.0531,-0.0989 -0.1097,-0.0848 l -1.26266,0.30778 c -0.0388,0.0105 -0.0671,0.0459 -0.0671,0.0848 v 1.52073 c 0,0.0134 -9.8e-4,0.0255 -0.002,0.0369 a 0.55346974,0.55346974 0 0 1 -0.55106,0.51653 0.55346974,0.55346974 0 0 1 -0.55348,-0.55347 0.55346974,0.55346974 0 0 1 0.55348,-0.55348 0.55346974,0.55346974 0 0 1 0.29183,0.0832 v -1.7224 c 0,-0.12378 0.0848,-0.22988 0.20155,-0.2582 l 1.46768,-0.35726 c 0.0186,-0.004 0.037,-0.006 0.0552,-0.006 z m 3.89871,0.62571 v 5.49463 a 0.32621691,0.32621691 0 0 1 -0.3262,0.32624 h -5.49464 a 0.52958334,0.52958334 0 0 0 0.53003,0.52913 h 5.28998 a 0.53000646,0.53000646 0 0 0 0.52999,-0.52999 v -5.28999 a 0.52958334,0.52958334 0 0 0 -0.52916,-0.53002 z" transform="matrix(15.624994,0,0,15.624994,-1654.9983,-1780.2326)" /></g></svg>`;

// Native SVG Icons for Bug Resolution & Trash
const CHECK_ICON_SVG = `<svg viewBox="0 0 79.375 67.46875" class="check-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m 0,35.05928 c 1.635916,-3.26132 4.907744,-7.33799 10.633444,-5.70731 4.907744,1.63067 8.179575,6.52266 10.633447,13.04529 C 40.897864,20.3833 57.25701,4.892 76.887986,0 79.341857,0 80.159814,0 78.523901,1.63068 57.25701,16.30666 36.808079,38.32063 20.448932,66.85723 c -0.817956,0.81536 -1.635913,0.81536 -2.453872,0 C 14.723232,58.70392 12.26936,50.55061 8.179572,42.39726 6.54366,38.32063 4.089788,35.05928 0,35.05928 Z"/></svg>`;

const TRASH_ICON_SVG = `<svg viewBox="0 0 68.791663 79.374999" class="trash-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M 29.659947,0 C 23.345645,0 18.111098,5.17516 18.111098,11.60197 v 2.75339 H 6.812147 C 3.073417,14.35536 0,17.44452 0,21.20046 v 1.00092 c 0,1.25196 0.996345,2.25455 2.242589,2.25455 h 64.30649 c 1.24624,0 2.24259,-1.00259 2.24259,-2.25455 v -0.91776 c 0,-3.83939 -2.99034,-6.92826 -6.81214,-6.92826 H 50.680569 V 11.60197 C 50.680569,5.2586 45.529109,0 39.131722,0 Z m 0,7.34558 h 9.471775 c 2.326322,0 4.236897,1.91934 4.236897,4.25639 v 2.75339 H 25.423043 v -2.75339 c 0,-2.33705 1.910581,-4.25639 4.236904,-4.25639 z M 6.64663,29.63012 10.052707,70.77906 c 0.415416,4.84097 4.485827,8.59594 9.304634,8.59594 h 29.994228 c 4.90189,0 8.88923,-3.75497 9.30464,-8.59594 l 3.40607,-41.14894 z m 42.289519,8.6807 c 1.82782,0.0836 3.23927,1.66865 3.15618,3.50487 l -1.41176,25.62478 c -0.0831,1.75278 -1.57857,3.1707 -3.32331,3.1707 h -0.16716 c -1.82782,-0.0836 -3.23925,-1.66868 -3.15618,-3.5049 l 1.41177,-25.62474 c 0.0831,-1.83623 1.66263,-3.25415 3.49045,-3.17071 z m -29.07901,0.083 c 1.827825,-0.0836 3.40575,1.33613 3.488832,3.17235 l 1.41176,25.62314 c 0.08309,1.83622 -1.328352,3.4214 -3.156178,3.50487 h -0.16715 c -1.74474,0 -3.240229,-1.33445 -3.323314,-3.17068 L 16.699328,41.89873 c -0.08309,-1.83622 1.329979,-3.42143 3.157801,-3.50491 z m 14.539507,0 c 1.827823,0 3.323315,1.50238 3.323315,3.33863 v 25.53998 c 0,1.83622 -1.495492,3.33863 -3.323315,3.33863 -1.827826,0 -3.323315,-1.50241 -3.323315,-3.33863 V 41.73245 c 0,-1.83625 1.495489,-3.33863 3.323315,-3.33863 z"/></svg>`;

// Pre-compiled chord detection patterns for optimal performance
const CHORD_UNIT_SOURCE = '[(]?[A-G][b#]?(?:m|M|maj|min|dim|aug|sus|add|alt|[2-9]|11|13|\\+|M|F)*(?:\\([#b0-9a-zA-Z\\+\\-]*\\))?(?:\\/(?:[A-G][b#]?|[0-9]+)(?:m|M|maj|min|dim|aug|sus|add|alt|[2-9]|11|13|\\+|M|F)*(?:\\([#b0-9a-zA-Z\\+\\-]*\\))?)?[)]?';
const CHORD_PATTERN = new RegExp('^(' + CHORD_UNIT_SOURCE + ')+$');
const SPECIAL_TOKENS = new Set([
    '||:', ':||', '|', '...', '2X', '3X', '(2X)', '(3X)', 
    '[2X]', '[3X]', '[REFRÃO]', 'REFRÃO', '[INTRO]', 'INTRO',
    '[SOLO]', 'SOLO', '[FIM]', 'FIM', '[PONTE]', 'PONTE', '1ª', '2ª', 'VEZ', 'VEZES', 'VOLTA'
]);

// Pre-compiled regex patterns for punctuation and lyric markers
const PUNCTUATION_PATTERN = /^[.,\/#!$%\^&\*;:{}=\-_`~()]+|[.,\/#!$%\^&\*;:{}=\-_`~()]+$/g;
const MARKER_PATTERN = /\([23]x\)|\[refrão\]|\[[23]x\]/gi;

document.addEventListener('DOMContentLoaded', () => {
    // Menu elements
    const viewMenu = document.getElementById('view-menu');
    const viewList = document.getElementById('view-list');
    const viewSong = document.getElementById('view-song');
    
    // UI Elements
    const themeBtn = document.getElementById('theme-btn');
    const listSongsBtn = document.getElementById('list-songs-btn');
    const searchSongsBtn = document.getElementById('search-songs-btn');

    // List & Song Views
    const backToMenuBtn = document.getElementById('back-to-menu-btn');
    const songBackBtn = document.getElementById('song-back-btn');
    const searchInput = document.getElementById('search-input');
    const songHeaderBar = document.querySelector('.song-header-bar');
    const listHeaderBar = document.querySelector('.list-header');
    const songsList = document.getElementById('songs-list');
    const songTitleEl = document.getElementById('song-title');
    const songAuthorEl = document.getElementById('song-author');
    const songContentEl = document.getElementById('song-content');
    const searchInputContainer = document.getElementById('search-input-container');
    const fabBackBtn = document.getElementById('fab-back-btn');
    const fabBackListBtn = document.getElementById('fab-back-list-btn');
    const listContentEl = document.querySelector('.list-content');

    // Global Audio & Header Mini Player Elements
    const globalAudio = document.getElementById('global-audio');
    const headerPlayer = document.getElementById('header-player');
    const playerMarqueeTrack = document.getElementById('player-marquee-track');
    const playerMarqueeContent = document.getElementById('player-marquee-content');
    const playerMarqueeContainer = document.getElementById('player-marquee-container');
    const playerPrevBtn = document.getElementById('player-prev-btn');
    const playerPlayBtn = document.getElementById('player-play-btn');
    const playerNextBtn = document.getElementById('player-next-btn');
    const playerIconPlay = document.getElementById('player-icon-play');
    const playerIconPause = document.getElementById('player-icon-pause');

    let currentPlayingIndex = -1;
    let isPlaylistMode = false;
    let isAudioPlaying = false;
    let isHeaderPlayerVisible = false;
    const fontDecreaseSvg = document.getElementById('font-decrease-svg');
    const fontIncreaseSvg = document.getElementById('font-increase-svg');
    const toggleChordsSvgWrapper = document.getElementById('toggle-chords-svg-wrapper');
    
    // Initial Font Size (Always starts at 12px/0.75rem)
    let currentFontSize = 0.75;
    let currentSong = null;
    let chordsVisible = false;

    // Initialize Theme
    let currentTheme = localStorage.getItem('theme') || 'light';
    setThemeElements(currentTheme);

    function setThemeElements(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === 'dark' ? '#121212' : '#f7f7f7');
        }

        const themeLabel = document.getElementById('theme-label');
        if (themeLabel) {
            themeLabel.innerText = theme === 'dark' ? 'TEMA ESCURO' : 'TEMA CLARO';
        }
    }

    // Apply persistent font size on startup
    songContentEl.style.fontSize = currentFontSize + 'rem';

    themeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
        setThemeElements(currentTheme);
    });

    // Process valid songs from songs.js
    const validSongs = songs.filter(s => s.title && (s.lyrics || s.chords) && s.title.trim().length > 1);
    validSongs.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));

    // Helper to remove accents for searching
    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    // Catalog of audio files present in songs folder
    // All 44 songs are cataloged
    const MUSIC_MAP = {
        "01": "01. A Gente Primeiro.mp3",
        "02": "02. Alegria de Viver.mp3",
        "03": "03. Alma Gêmea.mp3",
        "04": "04. Amigos de Jesus.mp3",
        "05": "05. Anjos.mp3",
        "06": "06. Aos Pés do Monte.mp3",
        "07": "07. Armadura.mp3",
        "08": "08. Brilhem Mais.mp3",
        "09": "09. Canção da Alegria Cristã.mp3",
        "10": "10. Cante e Ame.mp3",
        "11": "11. Cativar.mp3",
        "12": "12. Coisas Que Eu Digo Sem Querer.mp3",
        "13": "13. Consciência.mp3",
        "14": "14. Convite ao Voo.mp3",
        "15": "15. Depende de Você.mp3",
        "16": "16. Ei Você.mp3",
        "17": "17. Evolução.mp3",
        "18": "18. Flutuar.mp3",
        "19": "19. Força do Bem.mp3",
        "20": "20. Gosto de Você.mp3",
        "21": "21. Já é Tempo.mp3",
        "22": "22. Jiacris.mp3",
        "23": "23. Luz Interior.mp3",
        "24": "24. Médiuns.mp3",
        "25": "25. Mocidade com Jesus.mp3",
        "26": "26. Morada.mp3",
        "27": "27. O Chamado.mp3",
        "28": "28. O Dom de Amar.mp3",
        "29": "29. Os Miosótis Voltam a Florir.mp3",
        "30": "30. Paciência.mp3",
        "31": "31. Para Sempre em Meu Coração.mp3",
        "32": "32. Pedro.mp3",
        "33": "33. Quanta Luz.mp3",
        "34": "34. Que eu Seja Amor.mp3",
        "35": "35. Quebrando os Laços.mp3",
        "36": "36. Raízes.mp3",
        "37": "37. Seja Diferente.mp3",
        "38": "38. Sublime Oração.mp3",
        "39": "39. Suplica a Jesus.mp3",
        "40": "40. Te Encontrei.mp3",
        "41": "41. Te Ofereço Paz.mp3",
        "42": "42. Tributo a Emmanuel e Chico Xavier.mp3",
        "43": "43. Um Toque de Amigo.mp3",
        "44": "44. Viajante do Universo.mp3"
    };

    // Pre-map songs list once to avoid repeated allocations on every search keystroke
    const preparedSongsList = validSongs.map((song, idx) => {
        const numStr = String(idx + 1).padStart(2, '0');
        const cleanTitle = song.title.toUpperCase();
        const audioFile = MUSIC_MAP[numStr] || null;
        const hasAudio = Boolean(audioFile);
        return { 
            numStr: numStr,
            audioFile: audioFile,
            hasAudio: hasAudio,
            originalText: `<span class="song-number">${numStr}.</span> <span class="song-title-name">${cleanTitle}</span>`, 
            hybridSongObj: { 
                title: cleanTitle, 
                author: song.author, 
                lyrics: song.lyrics, 
                chords: song.chords,
                numStr: numStr,
                audioFile: audioFile,
                hasAudio: hasAudio,
                originalIndex: idx
            },
            originalIndex: idx,
            normalizedTitle: removeAccents(cleanTitle.toLowerCase()),
            normalizedAuthor: removeAccents((song.author || '').toLowerCase())
        };
    });

    // Audio & Playlist Controls
    function playSongByIndex(index, autoPlay = true) {
        if (index < 0 || index >= preparedSongsList.length) return;
        const item = preparedSongsList[index];
        if (!item.hasAudio) {
            console.warn(`Música ${item.numStr} não possui áudio catalogado.`);
            return;
        }

        currentPlayingIndex = index;
        isHeaderPlayerVisible = true;
        const targetSrc = `./songs/${encodeURIComponent(item.audioFile)}`;
        const resolvedSrc = new URL(targetSrc, window.location.href).href;

        if (globalAudio.src !== resolvedSrc) {
            globalAudio.src = targetSrc;
        }

        if (autoPlay) {
            isAudioPlaying = true;
            updatePlayerUI();
            const playPromise = globalAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(err => {
                    console.warn('Reprodução automática bloqueada pelo navegador:', err);
                    isAudioPlaying = false;
                    updatePlayerUI();
                });
            }
        } else {
            isAudioPlaying = false;
            updatePlayerUI();
        }
    }

    function togglePlayPause() {
        if (currentPlayingIndex === -1) {
            startPlayAll();
            return;
        }

        if (globalAudio.paused || !isAudioPlaying) {
            isAudioPlaying = true;
            isHeaderPlayerVisible = true;
            updatePlayerUI();
            const playPromise = globalAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(err => {
                    console.warn(err);
                    isAudioPlaying = false;
                    updatePlayerUI();
                });
            }
        } else {
            isAudioPlaying = false;
            globalAudio.pause();
            updatePlayerUI();
        }
    }

    function playNextSong(fromEnded = false) {
        if (preparedSongsList.length === 0) return;
        
        let startIdx = currentPlayingIndex === -1 ? 0 : currentPlayingIndex + 1;
        let nextIndex = -1;

        // Search forwards for next song with audio
        for (let i = startIdx; i < preparedSongsList.length; i++) {
            if (preparedSongsList[i].hasAudio) {
                nextIndex = i;
                break;
            }
        }

        // Loop to start if not found
        if (nextIndex === -1) {
            for (let i = 0; i < preparedSongsList.length; i++) {
                if (preparedSongsList[i].hasAudio) {
                    nextIndex = i;
                    break;
                }
            }
        }

        if (nextIndex !== -1) {
            playSongByIndex(nextIndex, true);
        }
    }

    function playPrevSong() {
        if (preparedSongsList.length === 0) return;

        // If played more than 3 seconds, restart current track
        if (globalAudio.currentTime > 3) {
            globalAudio.currentTime = 0;
            globalAudio.play().catch(err => console.warn(err));
            return;
        }

        let startIdx = currentPlayingIndex <= 0 ? preparedSongsList.length - 1 : currentPlayingIndex - 1;
        let prevIndex = -1;

        // Search backwards for previous song with audio
        for (let i = startIdx; i >= 0; i--) {
            if (preparedSongsList[i].hasAudio) {
                prevIndex = i;
                break;
            }
        }

        // If not found, wrap to end
        if (prevIndex === -1) {
            for (let i = preparedSongsList.length - 1; i >= 0; i--) {
                if (preparedSongsList[i].hasAudio) {
                    prevIndex = i;
                    break;
                }
            }
        }

        if (prevIndex !== -1) {
            playSongByIndex(prevIndex, true);
        }
    }

    function startPlayAll() {
        isPlaylistMode = true;
        const firstPlayable = preparedSongsList.findIndex(s => s.hasAudio);
        if (firstPlayable !== -1) {
            playSongByIndex(firstPlayable, true);
        }
    }

    function handleSongPlayClick(index) {
        if (currentPlayingIndex === index) {
            if (isAudioPlaying) {
                // Ao parar de tocar na lista de músicas: a música volta ao normal imediatamente e o player fecha
                isAudioPlaying = false;
                isHeaderPlayerVisible = false;
                globalAudio.pause();
                currentPlayingIndex = -1;
                updatePlayerUI();
            } else {
                // Estava pausado, retoma a reprodução desta música
                isPlaylistMode = true;
                isHeaderPlayerVisible = true;
                playSongByIndex(index, true);
            }
        } else {
            isPlaylistMode = true;
            isHeaderPlayerVisible = true;
            playSongByIndex(index, true);
        }
    }

    // Web Audio API Visualizer for real-time sound waves
    let audioCtx = null;
    let analyser = null;
    let sourceNode = null;
    let dataArray = null;
    let waveAnimFrameId = null;
    let activeListWaveBars = null;
    const soundWaveBg = document.getElementById('sound-wave-bg');
    const waveBars = soundWaveBg ? soundWaveBg.querySelectorAll('.wave-bar') : [];

    const LIST_WAVE_BARS_HTML = `
        <div class="sound-wave-bg list-wave-bg" aria-hidden="true">
            <span class="wave-bar b1"></span>
            <span class="wave-bar b2"></span>
            <span class="wave-bar b3"></span>
            <span class="wave-bar b4"></span>
            <span class="wave-bar b5"></span>
            <span class="wave-bar b6"></span>
            <span class="wave-bar b7"></span>
            <span class="wave-bar b8"></span>
            <span class="wave-bar b9"></span>
            <span class="wave-bar b10"></span>
            <span class="wave-bar b11"></span>
            <span class="wave-bar b12"></span>
            <span class="wave-bar b13"></span>
            <span class="wave-bar b14"></span>
            <span class="wave-bar b15"></span>
            <span class="wave-bar b16"></span>
            <span class="wave-bar b17"></span>
            <span class="wave-bar b18"></span>
            <span class="wave-bar b19"></span>
            <span class="wave-bar b20"></span>
        </div>
    `;

    // Logarithmic distribution across dynamic frequency range (bins 1 to 26 of 64)
    const BIN_MAPPING = [
        1, 2, 2, 3, 3, 4, 5, 6, 7, 8,
        9, 10, 12, 14, 16, 18, 20, 22, 24, 26
    ];

    function initAudioContext() {
        if (audioCtx) {
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            return;
        }
        try {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (!AudioContextClass) return;
            audioCtx = new AudioContextClass();
            analyser = audioCtx.createAnalyser();
            analyser.fftSize = 128; // 64 frequency bins
            analyser.smoothingTimeConstant = 0.78; // Fluid responsiveness

            sourceNode = audioCtx.createMediaElementSource(globalAudio);
            sourceNode.connect(analyser);
            analyser.connect(audioCtx.destination);

            dataArray = new Uint8Array(analyser.frequencyBinCount);
        } catch (err) {
            console.warn('Web Audio API não pôde ser inicializado:', err);
        }
    }

    function renderWaveFrame() {
        if (!isAudioPlaying) {
            stopWaveVisualizer();
            return;
        }

        if (analyser && dataArray) {
            analyser.getByteFrequencyData(dataArray);

            if (waveBars.length > 0) {
                const totalBars = waveBars.length;
                for (let i = 0; i < totalBars; i++) {
                    const binIdx = BIN_MAPPING[i] || i;
                    const raw = dataArray[binIdx] || 0;
                    const freqBoost = 1.0 + (i / totalBars) * 0.85;
                    let normalized = (raw / 255) * freqBoost;
                    if (normalized > 1) normalized = 1;
                    const scaleY = 0.6 + normalized * 3.4;
                    waveBars[i].style.transform = `scaleY(${scaleY.toFixed(2)})`;
                }
            }

            if (activeListWaveBars && activeListWaveBars.length > 0) {
                const totalListBars = activeListWaveBars.length;
                for (let i = 0; i < totalListBars; i++) {
                    const binIdx = BIN_MAPPING[i] || i;
                    const raw = dataArray[binIdx] || 0;
                    const freqBoost = 1.0 + (i / totalListBars) * 0.85;
                    let normalized = (raw / 255) * freqBoost;
                    if (normalized > 1) normalized = 1;
                    const scaleY = 0.6 + normalized * 3.4;
                    activeListWaveBars[i].style.transform = `scaleY(${scaleY.toFixed(2)})`;
                }
            }
        }

        waveAnimFrameId = requestAnimationFrame(renderWaveFrame);
    }

    function startWaveVisualizer() {
        initAudioContext();
        if (audioCtx && audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        if (soundWaveBg) {
            soundWaveBg.classList.add('audio-reactive');
        }

        if (!waveAnimFrameId) {
            waveAnimFrameId = requestAnimationFrame(renderWaveFrame);
        }
    }

    function stopWaveVisualizer() {
        if (waveAnimFrameId) {
            cancelAnimationFrame(waveAnimFrameId);
            waveAnimFrameId = null;
        }
        if (soundWaveBg) {
            soundWaveBg.classList.remove('audio-reactive');
        }
        if (waveBars) {
            for (let i = 0; i < waveBars.length; i++) {
                waveBars[i].style.transform = '';
            }
        }
        if (activeListWaveBars) {
            for (let i = 0; i < activeListWaveBars.length; i++) {
                activeListWaveBars[i].style.transform = '';
            }
            activeListWaveBars = null;
        }
        if (songsList) {
            songsList.querySelectorAll('.list-wave-bg.audio-reactive').forEach(el => {
                el.classList.remove('audio-reactive');
            });
        }
    }

    function updatePlayerUI() {
        if (!globalAudio) return;
        const isPaused = !isAudioPlaying;
        const isPlaying = isAudioPlaying;
        if (headerPlayer) {
            const shouldShowPlayer = isHeaderPlayerVisible && currentPlayingIndex >= 0 && currentPlayingIndex < preparedSongsList.length;
            if (shouldShowPlayer) {
                headerPlayer.classList.remove('hidden');
            } else {
                headerPlayer.classList.add('hidden');
            }

            if (isPlaying) {
                headerPlayer.classList.add('is-playing');
                startWaveVisualizer();
            } else {
                headerPlayer.classList.remove('is-playing');
                stopWaveVisualizer();
            }
        }

        if (playerIconPlay && playerIconPause) {
            if (isPaused) {
                playerIconPlay.classList.remove('hidden');
                playerIconPause.classList.add('hidden');
                if (playerPlayBtn) playerPlayBtn.setAttribute('aria-label', 'Reproduzir');
            } else {
                playerIconPlay.classList.add('hidden');
                playerIconPause.classList.remove('hidden');
                if (playerPlayBtn) playerPlayBtn.setAttribute('aria-label', 'Pausar');
            }
        }

        if (currentPlayingIndex >= 0 && currentPlayingIndex < preparedSongsList.length) {
            const currentItem = preparedSongsList[currentPlayingIndex];
            const title = currentItem.hybridSongObj.title;
            const author = currentItem.hybridSongObj.author || 'DESCONHECIDO';
            
            if (playerMarqueeContent) {
                playerMarqueeContent.innerHTML = `<span class="player-song-number">${currentItem.numStr}.</span> <span class="player-song-title">${title}</span> <span class="player-bullet">•</span> <span class="player-artist-name">${author}</span>`;
            }

            if (playerMarqueeTrack) {
                // If song changed, restart marquee scroll from the right
                if (playerMarqueeTrack.dataset.currentSong !== currentItem.numStr) {
                    playerMarqueeTrack.dataset.currentSong = currentItem.numStr;
                    playerMarqueeTrack.classList.remove('scrolling');
                    void playerMarqueeTrack.offsetWidth;
                    playerMarqueeTrack.classList.add('scrolling');
                }
                playerMarqueeTrack.style.animationPlayState = isPaused ? 'paused' : 'running';
            }

            if ('mediaSession' in navigator) {
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: `${currentItem.numStr}. ${title}`,
                    artist: author,
                    album: 'Hinário Digital'
                });
            }
        } else {
            if (playerMarqueeContent) {
                playerMarqueeContent.innerHTML = `HINÁRIO DIGITAL • SELECIONE UMA MÚSICA`;
            }
            if (playerMarqueeTrack) {
                playerMarqueeTrack.classList.remove('scrolling');
            }
        }

        // Highlight active playing song, update play/pause buttons, sound wave and marquee in songs list
        if (songsList) {
            let currentListBars = null;

            songsList.querySelectorAll('.song-item').forEach(li => {
                const idx = parseInt(li.dataset.index, 10);
                if (isNaN(idx)) return;
                const isCurrent = (idx === currentPlayingIndex);
                const isCurrentPlaying = isCurrent && isPlaying;
                const listBg = li.querySelector('.list-wave-bg');
                const titleTrack = li.querySelector('.song-title-track');
                const titleText = li.querySelector('.song-title-text');
                const item = preparedSongsList[idx];

                if (isCurrentPlaying) {
                    li.classList.add('now-playing');
                    li.classList.add('is-playing');
                    if (listBg) {
                        listBg.classList.add('audio-reactive');
                        currentListBars = listBg.querySelectorAll('.wave-bar');
                    }
                    if (titleText && item) {
                        const author = item.hybridSongObj.author || 'DESCONHECIDO';
                        if (titleText.dataset.mode !== 'playing') {
                            titleText.dataset.mode = 'playing';
                            titleText.innerHTML = `<span class="song-number">${item.numStr}.</span> <span class="song-title-name">${item.hybridSongObj.title}</span> <span class="song-bullet">•</span> <span class="song-artist-name">${author}</span>`;
                        }
                    }
                    if (titleTrack) {
                        if (!titleTrack.classList.contains('scrolling')) {
                            titleTrack.classList.remove('scrolling');
                            void titleTrack.offsetWidth;
                            titleTrack.classList.add('scrolling');
                        }
                        titleTrack.style.animationPlayState = 'running';
                    }
                } else {
                    li.classList.remove('now-playing');
                    li.classList.remove('is-playing');
                    if (listBg) listBg.classList.remove('audio-reactive');
                    if (titleTrack) {
                        titleTrack.classList.remove('scrolling');
                        titleTrack.style.animationPlayState = '';
                    }
                    if (titleText) {
                        titleText.dataset.mode = 'normal';
                        titleText.innerHTML = item ? item.originalText : '';
                    }
                }

                const playBtn = li.querySelector('.song-play-btn');

                if (playBtn && !playBtn.classList.contains('inoperative')) {
                    const isPlayingBtn = playBtn.dataset.playing === 'true';
                    if (isPlayingBtn !== isCurrentPlaying) {
                        playBtn.dataset.playing = isCurrentPlaying ? 'true' : 'false';
                        playBtn.innerHTML = isCurrentPlaying ? PAUSE_ICON_SVG : PLAY_ICON_SVG;
                    }
                    const titleTextStr = isCurrentPlaying ? 'Pausar música' : 'Tocar música';
                    playBtn.title = titleTextStr;
                    playBtn.setAttribute('aria-label', titleTextStr);
                }
            });

            activeListWaveBars = currentListBars;
        }
    }

    // Audio Event Listeners
    if (globalAudio) {
        globalAudio.addEventListener('play', () => {
            isAudioPlaying = true;
            updatePlayerUI();
        });
        globalAudio.addEventListener('playing', () => {
            isAudioPlaying = true;
            updatePlayerUI();
        });
        globalAudio.addEventListener('pause', () => {
            isAudioPlaying = false;
            updatePlayerUI();
        });
        globalAudio.addEventListener('ended', () => {
            isAudioPlaying = false;
            playNextSong(true);
        });
        globalAudio.addEventListener('error', (e) => {
            console.warn('Erro ao carregar ou reproduzir áudio:', e);
            isAudioPlaying = false;
            updatePlayerUI();
        });
    }

    if (playerPlayBtn) {
        playerPlayBtn.addEventListener('click', togglePlayPause);
    }
    if (playerPrevBtn) {
        playerPrevBtn.addEventListener('click', playPrevSong);
    }
    if (playerNextBtn) {
        playerNextBtn.addEventListener('click', () => playNextSong(false));
    }
    if (playerMarqueeContainer) {
        playerMarqueeContainer.addEventListener('click', () => {
            if (currentPlayingIndex >= 0 && currentPlayingIndex < preparedSongsList.length) {
                openSong(preparedSongsList[currentPlayingIndex].hybridSongObj);
            }
        });
    }

    if ('mediaSession' in navigator) {
        navigator.mediaSession.setActionHandler('play', () => {
            if (currentPlayingIndex === -1) {
                startPlayAll();
            } else {
                isAudioPlaying = true;
                updatePlayerUI();
                globalAudio.play().catch(err => {
                    console.warn(err);
                    isAudioPlaying = false;
                    updatePlayerUI();
                });
            }
        });
        navigator.mediaSession.setActionHandler('pause', () => {
            isAudioPlaying = false;
            globalAudio.pause();
            updatePlayerUI();
        });
        navigator.mediaSession.setActionHandler('previoustrack', playPrevSong);
        navigator.mediaSession.setActionHandler('nexttrack', () => playNextSong(false));
    }

    updatePlayerUI();

    // Helper to create song list item with play button
    function createSongItem(item) {
        const li = document.createElement('li');
        li.className = 'song-item';
        li.dataset.index = item.originalIndex;

        const isCurrent = (item.originalIndex === currentPlayingIndex);
        const isCurrentPlaying = isCurrent && isAudioPlaying;
        const author = item.hybridSongObj.author || 'DESCONHECIDO';

        if (isCurrentPlaying) {
            li.classList.add('now-playing');
            li.classList.add('is-playing');
        }

        const isInoperative = !item.hasAudio;
        const currentIconSvg = isCurrentPlaying ? PAUSE_ICON_SVG : PLAY_ICON_SVG;
        const titleText = isCurrentPlaying ? 'Pausar música' : 'Tocar música';
        const ariaLabel = isCurrentPlaying ? 'Pausar ' + item.hybridSongObj.title : 'Tocar ' + item.hybridSongObj.title;

        const disabledAttr = isInoperative 
            ? ' disabled class="song-play-btn inoperative" title="Música não catalogada" aria-label="Música não catalogada"' 
            : ` class="song-play-btn" title="${titleText}" aria-label="${ariaLabel}" data-playing="${isCurrentPlaying ? 'true' : 'false'}"`;

        const titleHtml = isCurrentPlaying
            ? `<span class="song-number">${item.numStr}.</span> <span class="song-title-name">${item.hybridSongObj.title}</span> <span class="song-bullet">•</span> <span class="song-artist-name">${author}</span>`
            : item.originalText;
        const trackClass = isCurrentPlaying ? 'song-title-track scrolling' : 'song-title-track';

        li.innerHTML = `
            <div class="song-title-wrapper">
                ${LIST_WAVE_BARS_HTML}
                <div class="${trackClass}">
                    <span class="song-title-text" data-mode="${isCurrentPlaying ? 'playing' : 'normal'}">${titleHtml}</span>
                </div>
            </div>
            <button${disabledAttr}>
                ${currentIconSvg}
            </button>
        `;

        if (isCurrentPlaying) {
            const listBg = li.querySelector('.list-wave-bg');
            if (listBg) listBg.classList.add('audio-reactive');
        }

        li.addEventListener('click', () => openSong(item.hybridSongObj));

        const playBtn = li.querySelector('.song-play-btn');
        if (playBtn && !isInoperative) {
            playBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                handleSongPlayClick(item.originalIndex);
            });
        }
        return li;
    }

    // Helper to create "TOCAR TODAS" top item with playlist button
    function createPlayAllItem() {
        const li = document.createElement('li');
        li.className = 'song-item play-all-item';
        li.innerHTML = `
            <button class="play-all-btn" aria-label="Tocar todas as músicas" title="Tocar Todas">
                ${PLAYLIST_ICON_SVG}
                <span class="play-all-title">TOCAR TODAS</span>
            </button>
        `;
        li.addEventListener('click', () => {
            startPlayAll();
        });
        return li;
    }

    // Render List
    function renderSongs(filter = '') {
        songsList.innerHTML = '';
        const searchWord = removeAccents(filter.toLowerCase().trim());

        if (searchWord === '') {
            // Render all in standard numerical sequence with "TOCAR TODAS" at top
            songsList.appendChild(createPlayAllItem());
            preparedSongsList.forEach((item) => {
                songsList.appendChild(createSongItem(item));
            });
            updateFabBackListBtnVisibility();
            adjustListFontSize();
            updatePlayerUI();
            return;
        }

        // Filter and score for search accuracy
        let titleMatches = [];

        preparedSongsList.forEach((item) => {
            const normalizedTitle = item.normalizedTitle;
            const normalizedAuthor = item.normalizedAuthor;
            
            let score = 0;
            const isNumberSearch = /^\d+$/.test(searchWord);

            if (isNumberSearch) {
                if (item.numStr.includes(searchWord)) {
                    score = 200; // Ordem exata: ex. "21" -> "21"
                } else {
                    // Ordem independente: ex. "21" -> "12" (contém 1 e 2)
                    const searchDigits = searchWord.split('');
                    const hasAllDigits = searchDigits.every(d => item.numStr.includes(d));
                    if (hasAllDigits) score = 150;
                }
            }

            if (score >= 150) {
                titleMatches.push({ item, score });
            } else if (normalizedTitle === searchWord) {
                score = 100; // Exact title match
                titleMatches.push({ item, score });
            } else if (normalizedTitle.startsWith(searchWord)) {
                score = 50; // Title starts with
                titleMatches.push({ item, score });
            } else if (normalizedTitle.includes(searchWord)) {
                score = 20; // Title contains
                titleMatches.push({ item, score });
            } else if (normalizedAuthor && normalizedAuthor.includes(searchWord)) {
                score = 10; // Author/Artist contains
                titleMatches.push({ item, score });
            }
        });

        // Sort dynamically: highest score first. If tied, sort by original sequence
        titleMatches.sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }
            return a.item.originalIndex - b.item.originalIndex;
        });

        titleMatches.forEach((match) => {
            songsList.appendChild(createSongItem(match.item));
        });
        updateFabBackListBtnVisibility();
        adjustListFontSize();
        updatePlayerUI();
    }

    // Is it a chord line?
    function isChordLine(line) {
        const words = line.trim().split(/\s+/);
        if (words.length === 0 || line.trim() === '') return false;
        
        let chordCount = 0;
        let specialCount = 0;
        
        words.forEach(w => {
            const cleanW = w.replace(PUNCTUATION_PATTERN, "");
            if (CHORD_PATTERN.test(w) || CHORD_PATTERN.test(cleanW)) {
                chordCount++;
            } else if (SPECIAL_TOKENS.has(w.toUpperCase()) || SPECIAL_TOKENS.has(cleanW.toUpperCase())) {
                specialCount++;
            }
        });
        
        const totalConsidered = chordCount + specialCount;
        return (words.length > 0 && (totalConsidered / words.length) > 0.6);
    }

    // Process Lyrics to highlight chords and specific markers
    function processLyrics(text, isChordsSource) {
        const lines = text.split('\n');
        let processedLines = [];
        let lastWasEmpty = true; // start as true to skip leading empty lines

        lines.forEach((line) => {
            const isChord = isChordsSource && isChordLine(line);
            
            if (isChord) {
                const words = line.trim().split(/\s+/);
                
                let hasActualChords = false;
                words.forEach(w => {
                    const cleanW = w.replace(PUNCTUATION_PATTERN, "");
                    if (CHORD_PATTERN.test(w) || CHORD_PATTERN.test(cleanW)) {
                        hasActualChords = true;
                    }
                });

                const processedLine = line.replace(MARKER_PATTERN, '<span class="lyric-marker">$&</span>');
                if (hasActualChords) {
                    processedLines.push(`<span class="chord-line chord">${processedLine}</span>`);
                } else {
                    processedLines.push(`<span class="marker-line">${processedLine}</span>`);
                }
                lastWasEmpty = false;
            } else {
                const trimmedLine = line.trim();
                if (trimmedLine === '') {
                    if (!lastWasEmpty) {
                        processedLines.push(isChordsSource ? '<span class="empty-line"></span>' : '');
                        lastWasEmpty = true;
                    }
                } else {
                    const processedLine = trimmedLine.replace(MARKER_PATTERN, '<span class="lyric-marker">$&</span>');
                    processedLines.push(isChordsSource ? `<span class="lyric-line">${processedLine}</span>` : processedLine);
                    lastWasEmpty = false;
                }
            }
        });

        // Trim any trailing empty lines in processedLines
        while (processedLines.length > 0 && (processedLines[processedLines.length - 1] === '' || processedLines[processedLines.length - 1] === '<span class="empty-line"></span>')) {
            processedLines.pop();
        }

        return isChordsSource ? processedLines.join('') : processedLines.join('\n');
    }

    // Adjust list font size dynamically using the longest song title as baseline
    function adjustListFontSize() {
        if (!songsList || preparedSongsList.length === 0) return;
        requestAnimationFrame(() => {
            const listWidth = songsList.clientWidth;
            if (listWidth === 0) return;

            const baseSize = 0.95; // rem
            const probe = document.createElement('div');
            probe.className = 'song-item';
            probe.style.position = 'absolute';
            probe.style.visibility = 'hidden';
            probe.style.width = 'auto';
            probe.style.whiteSpace = 'nowrap';
            probe.style.fontSize = baseSize + 'rem';
            probe.style.letterSpacing = '0.2px';
            probe.style.padding = '0';
            probe.style.border = 'none';

            const longestItem = preparedSongsList.reduce((longest, curr) => (curr.hybridSongObj.title.length > longest.hybridSongObj.title.length ? curr : longest), preparedSongsList[0]);
            probe.innerHTML = longestItem ? longestItem.originalText : '';
            document.body.appendChild(probe);

            const textWidth = probe.clientWidth;
            document.body.removeChild(probe);

            // Available width inside song item (accounting for item side padding, play button width, gap and small margin)
            const playBtnSpace = 40; // 28px button + 12px gap
            const availableWidth = listWidth - 8 - playBtnSpace;
            if (textWidth > availableWidth && availableWidth > 50) {
                const ratio = (availableWidth * 0.98) / textWidth;
                const newSize = Math.max(0.60, baseSize * ratio);
                document.documentElement.style.setProperty('--song-item-font-size', newSize.toFixed(3) + 'rem');
            } else {
                document.documentElement.style.setProperty('--song-item-font-size', baseSize + 'rem');
            }
        });
    }

    // Ensure titles fit in a single line by dynamically reducing font-size
    function fitTitleText() {
        if (!viewSong.classList.contains('active')) return;

        const titleEl = songTitleEl;
        const parent = titleEl.parentElement;
        if (!parent) return;
        
        requestAnimationFrame(() => {
            const parentWidth = parent.clientWidth;
            if (parentWidth === 0) {
                requestAnimationFrame(fitTitleText);
                return;
            }

            const baseSize = 0.85; 
            titleEl.style.fontSize = baseSize + 'rem';
            
            const clone = titleEl.cloneNode(true);
            clone.style.position = 'absolute';
            clone.style.visibility = 'hidden';
            clone.style.width = 'auto';
            clone.style.whiteSpace = 'nowrap';
            clone.style.fontFamily = "'Montserrat-Black', sans-serif";
            clone.style.fontWeight = '700';
            clone.style.fontSize = baseSize + 'rem';
            clone.style.textOverflow = 'clip';
            document.body.appendChild(clone);
            
            const textWidth = clone.clientWidth;
            document.body.removeChild(clone);
            
            if (textWidth > parentWidth && parentWidth > 50) {
                const ratio = (parentWidth * 0.98) / textWidth;
                let newSize = baseSize * ratio;
                if (newSize < 0.50) newSize = 0.50;
                titleEl.style.fontSize = newSize.toFixed(3) + 'rem';
            }
        });
    }

    let isSongScrollable = false;
    let maxScrollVal = 0;

    // Toggle bottom back button visibility based on whether the song page is scrollable
    function updateFabBackBtnVisibility() {
        if (!viewSong.classList.contains('active')) return;
        requestAnimationFrame(() => {
            // Get viewport height
            const windowHeight = window.innerHeight;
            
            // Get bounding client rects to calculate the pure content height
            const songContentRect = songContentEl.getBoundingClientRect();
            const viewSongRect = viewSong.getBoundingClientRect();
            
            // Get bottom padding dynamically
            const viewSongStyle = window.getComputedStyle(viewSong);
            const paddingBottom = parseFloat(viewSongStyle.paddingBottom) || 20;
            
            // Calculate content height (excluding the back button itself)
            const contentHeight = (songContentRect.bottom - viewSongRect.top) + paddingBottom;
            
            // If content overflows the viewport, it is scrollable
            isSongScrollable = contentHeight > (windowHeight + 5);
                  if (isSongScrollable) {
                fabBackBtn.classList.add('visible');
                document.body.classList.remove('no-scroll');
                // Calculate maxScrollVal taking into account the space the button now occupies
                const newScrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
                maxScrollVal = newScrollHeight - windowHeight;
                updateFadeInState();
            } else {
                fabBackBtn.classList.remove('visible');
                fabBackBtn.classList.remove('fade-in');
                document.body.classList.add('no-scroll');
                maxScrollVal = 0;
            }
        });
    }


    // Update bottom arrow opacity and transform transition dynamically on scroll
    function updateFadeInState() {
        if (!isSongScrollable || !viewSong.classList.contains('active')) return;
        const currentScroll = window.scrollY;
        const triggerStart = maxScrollVal - 120; // Starts fading in 120px before the bottom
        
        if (currentScroll >= triggerStart) {
            fabBackBtn.classList.add('fade-in');
        } else {
            fabBackBtn.classList.remove('fade-in');
        }
    }

    let isListScrollable = false;
    let maxListScrollVal = 0;

    // Toggle bottom back button visibility based on whether the list page is scrollable
    function updateFabBackListBtnVisibility() {
        if (!viewList.classList.contains('active')) return;
        requestAnimationFrame(() => {
            const windowHeight = window.innerHeight;
            const documentHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            
            isListScrollable = documentHeight > windowHeight + 5;
            
            if (isListScrollable) {
                fabBackListBtn.classList.add('visible');
                // Calculate maxListScrollVal taking into account the space the button now occupies
                const newScrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
                maxListScrollVal = newScrollHeight - windowHeight;
                updateListFadeInState();
            } else {
                fabBackListBtn.classList.remove('visible');
                fabBackListBtn.classList.remove('fade-in');
                maxListScrollVal = 0;
            }
        });
    }

    // Update bottom arrow opacity and transform transition dynamically on list scroll
    function updateListFadeInState() {
        if (!isListScrollable || !viewList.classList.contains('active')) return;
        const currentScroll = window.scrollY;
        const triggerStart = maxListScrollVal - 120; // Starts fading in 120px before the bottom
        
        if (currentScroll >= triggerStart) {
            fabBackListBtn.classList.add('fade-in');
        } else {
            fabBackListBtn.classList.remove('fade-in');
        }
    }

    // Open single song
    function openSong(song) {
        if(!song) return; // safeguard
        currentSong = song;
        searchInput.blur();

        // Reset to minimum font size (12px / 0.75rem)
        currentFontSize = 0.75;
        songContentEl.style.fontSize = currentFontSize + 'rem';
        
        songTitleEl.innerText = song.title; // Montserrat natively renders accents without HTML injection
        
        if (song.author) {
            songAuthorEl.innerText = song.author;
            songAuthorEl.style.display = 'block';
        } else {
            songAuthorEl.style.display = 'none';
        }

        const content = (chordsVisible ? song.chords : song.lyrics) || '';
        songContentEl.innerHTML = processLyrics(content, chordsVisible); // Montserrat natively renders accents
        
        viewMenu.classList.remove('active');
        viewMenu.classList.add('hidden');
        viewList.classList.remove('active');
        viewList.classList.add('hidden');
        viewSong.classList.remove('hidden');
        viewSong.classList.add('active');
        document.body.classList.remove('menu-active');
        window.scrollTo(0, 0);
        // Agendamento da re-checagem de tamanho (permite tempo pra renderização sair de display: none)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                fitTitleText();
                updateFabBackBtnVisibility();
            });
        });
    }

    function resetChordsVisibility() {
        chordsVisible = false;
        if (toggleChordsSvgWrapper) {
            toggleChordsSvgWrapper.classList.remove('chords-active');
            toggleChordsSvgWrapper.classList.add('chords-inactive');
        }
        songContentEl.classList.add('no-chords');
    }

    // Back to Menu
    function goBackToMenu() {
        resetChordsVisibility();
        searchInput.blur();
        clearSearch();
        shouldClearOnNextFocus = true;
        document.body.classList.add('menu-active');
        document.body.classList.remove('no-scroll');
        document.querySelectorAll('.neon-active').forEach(el => el.classList.remove('neon-active'));
        viewSong.classList.remove('active');
        viewSong.classList.add('hidden');
        viewList.classList.remove('active');
        viewList.classList.add('hidden');
        viewMenu.classList.remove('hidden');
        viewMenu.classList.add('active');
        if (isAudioPlaying) {
            startWaveVisualizer();
        }
    }

    // View Lists Route
    listSongsBtn.addEventListener('click', () => {
        document.body.classList.remove('menu-active');
        viewList.classList.remove('search-centered');
        viewList.classList.add('search-hidden');
        searchInputContainer.style.display = 'none'; // hide search input when just listing all
        clearSearch();
        shouldClearOnNextFocus = true;
        viewMenu.classList.remove('active');
        viewMenu.classList.add('hidden');
        viewList.classList.remove('hidden');
        viewList.classList.add('active');
        if (listHeaderBar) listHeaderBar.classList.remove('header-hidden');

        window.scrollTo(0, 0);
        renderSongs();
    });

    searchSongsBtn.addEventListener('click', () => {
        document.body.classList.remove('menu-active');
        viewList.classList.remove('search-hidden');
        searchInputContainer.style.display = 'block';
        clearSearch();
        shouldClearOnNextFocus = true;
        viewList.classList.add('search-centered');
        viewMenu.classList.remove('active');
        viewMenu.classList.add('hidden');
        viewList.classList.remove('hidden');
        viewList.classList.add('active');
        if (listHeaderBar) listHeaderBar.classList.remove('header-hidden');

        window.scrollTo(0, 0);
        renderSongs();
        setTimeout(() => searchInput.focus(), 100);
    });

    backToMenuBtn.addEventListener('click', goBackToMenu);
    

        function closeSongView() {
        resetChordsVisibility();
        viewSong.classList.remove('active');
        viewSong.classList.add('hidden');
        viewList.classList.remove('hidden');
        viewList.classList.add('active');
        document.body.classList.remove('no-scroll');
        if (listHeaderBar) listHeaderBar.classList.remove('header-hidden');
        updateFabBackListBtnVisibility();
        adjustListFontSize();
    }
    
    songBackBtn.addEventListener('click', closeSongView);
    fabBackBtn.addEventListener('click', closeSongView);
    
    const bugReportModal = document.getElementById('bug-report-modal');
    const bugDescription = document.getElementById('bug-description');
    const bugCancelBtn = document.getElementById('bug-cancel-btn');
    const bugSubmitBtn = document.getElementById('bug-submit-btn');
    const bugConfirmModal = document.getElementById('bug-confirm-modal');
    const bugConfirmOkBtn = document.getElementById('bug-confirm-ok-btn');
    const reportBugBtn = document.getElementById('report-bug-btn');
    const bugErrorMsg = document.getElementById('bug-error-msg');

    // Action Confirm elements
    const actionConfirmModal = document.getElementById('action-confirm-modal');
    const actionConfirmTitle = document.getElementById('action-confirm-title');
    const actionConfirmMessage = document.getElementById('action-confirm-message');
    const actionConfirmCancelBtn = document.getElementById('action-confirm-cancel-btn');
    const actionConfirmOkBtn = document.getElementById('action-confirm-ok-btn');
    let onConfirmCallback = null;

    const showActionConfirm = (title, message, callback) => {
        if (!actionConfirmModal) return;
        actionConfirmTitle.innerText = title;
        actionConfirmMessage.innerText = message;
        onConfirmCallback = callback;
        actionConfirmModal.classList.add('active');
    };

    if (actionConfirmCancelBtn && actionConfirmModal) {
        actionConfirmCancelBtn.addEventListener('click', () => {
            actionConfirmModal.classList.remove('active');
            onConfirmCallback = null;
        });
    }

    if (actionConfirmOkBtn && actionConfirmModal) {
        actionConfirmOkBtn.addEventListener('click', () => {
            if (onConfirmCallback) {
                onConfirmCallback();
            }
            actionConfirmModal.classList.remove('active');
            onConfirmCallback = null;
        });
    }

    if (actionConfirmModal) {
        actionConfirmModal.addEventListener('click', (e) => {
            if (e.target === actionConfirmModal) {
                actionConfirmModal.classList.remove('active');
                onConfirmCallback = null;
            }
        });
    }

    if (reportBugBtn && bugReportModal) {
        reportBugBtn.addEventListener('click', (e) => {
            bugDescription.value = ''; // Reset input
            if (bugErrorMsg) bugErrorMsg.classList.add('hidden');
            bugReportModal.classList.add('active');
            // Timeout to allow bounce transform to finish before focusing
            setTimeout(() => {
                bugDescription.focus();
            }, 250);
        });
    }

    if (bugCancelBtn && bugReportModal) {
        bugCancelBtn.addEventListener('click', () => {
            bugReportModal.classList.remove('active');
        });
    }

    // Also close modal when clicking outside content
    if (bugReportModal) {
        bugReportModal.addEventListener('click', (e) => {
            if (e.target === bugReportModal) {
                bugReportModal.classList.remove('active');
            }
        });
    }

    if (bugConfirmModal) {
        bugConfirmModal.addEventListener('click', (e) => {
            if (e.target === bugConfirmModal) {
                bugConfirmModal.classList.remove('active');
            }
        });
    }

    if (bugConfirmOkBtn && bugConfirmModal) {
        bugConfirmOkBtn.addEventListener('click', () => {
            bugConfirmModal.classList.remove('active');
        });
    }

    if (bugDescription) {
        bugDescription.addEventListener('input', () => {
            if (bugErrorMsg) {
                bugErrorMsg.classList.add('hidden');
            }
        });
    }

    if (bugSubmitBtn && bugReportModal && bugDescription) {
        bugSubmitBtn.addEventListener('click', () => {
            const text = bugDescription.value.trim();
            if (!text) {
                if (bugErrorMsg) {
                    bugErrorMsg.classList.remove('hidden');
                    bugErrorMsg.style.animation = 'none';
                    bugErrorMsg.offsetHeight; /* trigger reflow */
                    bugErrorMsg.style.animation = null;
                }
                return;
            }
            
            const songTitle = document.getElementById('song-title').innerText;
            const songAuthor = document.getElementById('song-author').innerText || 'Desconhecido';
            
            // Catalog/Save the bug locally
            const reportedBugs = JSON.parse(localStorage.getItem('reportedBugs')) || [];
            reportedBugs.push({
                song: songTitle,
                author: songAuthor,
                description: text,
                date: new Date().toLocaleDateString('pt-BR')
            });
            localStorage.setItem('reportedBugs', JSON.stringify(reportedBugs));
            
            bugReportModal.classList.remove('active');
            
            // Show confirmation modal
            if (bugConfirmModal) {
                setTimeout(() => {
                    bugConfirmModal.classList.add('active');
                }, 300);
            }
        });
    }

    // Bugs List Modal Logic
    const bugsListModal = document.getElementById('bugs-list-modal');
    const bugsModalList = document.getElementById('bugs-modal-list');
    const bugsClearAllBtn = document.getElementById('bugs-clear-all-btn');
    const bugsCloseBtn = document.getElementById('bugs-close-btn');
    const reportMessagesBtn = document.getElementById('report-messages-btn');

    function renderBugsList() {
        if (!bugsModalList) return;
        const reportedBugs = JSON.parse(localStorage.getItem('reportedBugs')) || [];
        
        if (reportedBugs.length === 0) {
            bugsModalList.innerHTML = '<div class="no-bugs-msg">Nenhum erro encontrado no momento.</div>';
            if (bugsClearAllBtn) bugsClearAllBtn.style.display = 'none';
            return;
        }

        if (bugsClearAllBtn) bugsClearAllBtn.style.display = 'flex';
        
        bugsModalList.innerHTML = reportedBugs.map((bug, index) => `
            <div class="bug-report-item">
                <div class="bug-report-item-header">
                    <h4 class="bug-report-item-title">${bug.song}</h4>
                    <span class="bug-report-item-date">${bug.date}</span>
                </div>
                <p class="bug-report-item-desc">${bug.description}</p>
                <div class="bug-report-item-footer">
                    <button class="bug-report-item-resolve" data-index="${index}" aria-label="Resolvido">
                        ${CHECK_ICON_SVG}
                    </button>
                    <button class="bug-report-item-trash" data-index="${index}" aria-label="Apagar erro">
                        ${TRASH_ICON_SVG}
                    </button>
                </div>
            </div>
        `).join('');

        const resolveAction = (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            const bugs = JSON.parse(localStorage.getItem('reportedBugs')) || [];
            bugs.splice(index, 1);
            localStorage.setItem('reportedBugs', JSON.stringify(bugs));
            renderBugsList();
        };

        const deleteAction = (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            showActionConfirm(
                'APAGAR ERRO',
                'Deseja realmente excluir este relato de erro?',
                () => {
                    const bugs = JSON.parse(localStorage.getItem('reportedBugs')) || [];
                    bugs.splice(index, 1);
                    localStorage.setItem('reportedBugs', JSON.stringify(bugs));
                    renderBugsList();
                }
            );
        };

        // Add resolve listener to resolve button
        bugsModalList.querySelectorAll('.bug-report-item-resolve').forEach(btn => {
            btn.addEventListener('click', resolveAction);
        });

        // Add delete listener to trash button
        bugsModalList.querySelectorAll('.bug-report-item-trash').forEach(btn => {
            btn.addEventListener('click', deleteAction);
        });
    }

    if (reportMessagesBtn && bugsListModal) {
        let isUnlocked = false;
        const errorClosedEye = document.getElementById('report-messages-closed-eye');
        const errorOpenEye = document.getElementById('report-messages-eye');
        if (errorClosedEye && errorOpenEye) {
            errorClosedEye.classList.remove('hidden');
            errorOpenEye.classList.add('hidden');
        }

        const passwordPromptModal = document.getElementById('password-prompt-modal');
        const passwordInput = document.getElementById('prompt-password-input');
        const cancelBtn = document.getElementById('prompt-cancel-btn');
        const submitBtn = document.getElementById('prompt-submit-btn');
        const errorMsg = document.getElementById('prompt-error-msg');
        const toggleVisibilityBtn = document.getElementById('toggle-password-visibility-btn');
        const visibilityOff = document.getElementById('password-visibility-off');
        const visibilityOn = document.getElementById('password-visibility-on');

        const closePasswordModal = () => {
            if (passwordPromptModal) {
                passwordPromptModal.classList.remove('active');
            }
            if (passwordInput) {
                passwordInput.value = '';
                passwordInput.type = 'password';
            }
            if (visibilityOff && visibilityOn) {
                visibilityOff.classList.remove('hidden');
                visibilityOn.classList.add('hidden');
            }
            if (errorMsg) {
                errorMsg.classList.add('hidden');
            }
        };

        const tryUnlock = () => {
            if (!passwordInput) return;
            const pwd = passwordInput.value;
            if (pwd === 'admsemeadores*') {
                isUnlocked = true;
                if (errorClosedEye && errorOpenEye) {
                    errorClosedEye.classList.add('hidden');
                    errorOpenEye.classList.remove('hidden');
                }
                closePasswordModal();
                renderBugsList();
                bugsListModal.classList.add('active');
            } else {
                if (errorMsg) {
                    errorMsg.classList.remove('hidden');
                    // Reset animation trigger
                    errorMsg.style.animation = 'none';
                    errorMsg.offsetHeight; /* trigger reflow */
                    errorMsg.style.animation = null;
                }
                passwordInput.select();
            }
        };

        reportMessagesBtn.addEventListener('click', () => {
            const settingsBtn = document.getElementById('settings-btn');
            const settingsDropdown = document.getElementById('settings-dropdown');
            if (settingsBtn && settingsDropdown) {
                settingsBtn.classList.remove('active');
                settingsDropdown.classList.remove('active');
            }

            if (!isUnlocked) {
                if (passwordPromptModal && passwordInput) {
                    passwordInput.value = '';
                    passwordInput.type = 'password';
                    if (visibilityOff && visibilityOn) {
                        visibilityOff.classList.remove('hidden');
                        visibilityOn.classList.add('hidden');
                    }
                    if (errorMsg) errorMsg.classList.add('hidden');
                    passwordPromptModal.classList.add('active');
                    setTimeout(() => {
                        passwordInput.focus();
                    }, 100);
                }
            } else {
                renderBugsList();
                bugsListModal.classList.add('active');
            }
        });

        if (cancelBtn) {
            cancelBtn.addEventListener('click', closePasswordModal);
        }

        if (submitBtn) {
            submitBtn.addEventListener('click', tryUnlock);
        }

        if (toggleVisibilityBtn && passwordInput && visibilityOff && visibilityOn) {
            toggleVisibilityBtn.addEventListener('click', () => {
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    visibilityOff.classList.add('hidden');
                    visibilityOn.classList.remove('hidden');
                } else {
                    passwordInput.type = 'password';
                    visibilityOff.classList.remove('hidden');
                    visibilityOn.classList.add('hidden');
                }
                passwordInput.focus();
            });
        }

        if (passwordInput) {
            passwordInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    tryUnlock();
                }
            });
            passwordInput.addEventListener('input', () => {
                if (errorMsg) {
                    errorMsg.classList.add('hidden');
                }
            });
        }
    }

    // Settings Dropdown Logic
    const settingsBtn = document.getElementById('settings-btn');
    const settingsDropdown = document.getElementById('settings-dropdown');

    if (settingsBtn && settingsDropdown) {
        settingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsBtn.classList.toggle('active');
            settingsDropdown.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!settingsDropdown.contains(e.target) && e.target !== settingsBtn && !settingsBtn.contains(e.target)) {
                settingsBtn.classList.remove('active');
                settingsDropdown.classList.remove('active');
            }
        });
    }

    if (bugsCloseBtn && bugsListModal) {
        bugsCloseBtn.addEventListener('click', () => {
            bugsListModal.classList.remove('active');
        });
    }

    if (bugsClearAllBtn && bugsListModal) {
        bugsClearAllBtn.addEventListener('click', () => {
            showActionConfirm(
                'LIMPAR HISTÓRICO',
                'Deseja realmente limpar todo o histórico de erros reportados?',
                () => {
                    localStorage.removeItem('reportedBugs');
                    renderBugsList();
                }
            );
        });
    }

    // Close modal when clicking outside content
    if (bugsListModal) {
        bugsListModal.addEventListener('click', (e) => {
            if (e.target === bugsListModal) {
                bugsListModal.classList.remove('active');
            }
        });
    }
    
    fabBackListBtn.addEventListener('click', goBackToMenu);

    // Font Size Controls
    const enhanceFontLogic = () => {
        if(currentFontSize < 2.5) {
            currentFontSize += 0.1;
            songContentEl.style.fontSize = currentFontSize + 'rem';
            updateFabBackBtnVisibility();
        }
    };
    
    const shrinkFontLogic = () => {
        if(currentFontSize > 0.75) {
            currentFontSize -= 0.1;
            songContentEl.style.fontSize = currentFontSize + 'rem';
            updateFabBackBtnVisibility();
        }
    };

    if(fontIncreaseSvg) fontIncreaseSvg.addEventListener('click', enhanceFontLogic);
    if(fontDecreaseSvg) fontDecreaseSvg.addEventListener('click', shrinkFontLogic);

    // Toggle Chords
    const triggerChordToggle = () => {
        chordsVisible = !chordsVisible;
        if (chordsVisible) {
            if (toggleChordsSvgWrapper) {
                toggleChordsSvgWrapper.classList.remove('chords-inactive');
                toggleChordsSvgWrapper.classList.add('chords-active');
            }
            songContentEl.classList.remove('no-chords');
        } else {
            if (toggleChordsSvgWrapper) {
                toggleChordsSvgWrapper.classList.remove('chords-active');
                toggleChordsSvgWrapper.classList.add('chords-inactive');
            }
            songContentEl.classList.add('no-chords');
        }
        
        // Re-process lyrics using the corresponding source
        if (currentSong) {
            const content = (chordsVisible ? currentSong.chords : currentSong.lyrics) || '';
            songContentEl.innerHTML = processLyrics(content, chordsVisible);
        }
        
        updateFabBackBtnVisibility();
    };

    if(toggleChordsSvgWrapper) toggleChordsSvgWrapper.addEventListener('click', triggerChordToggle);

    const searchOverlay = document.getElementById('search-overlay');
    let shouldClearOnNextFocus = false;

    function clearSearch() {
        searchInput.value = '';
        searchOverlay.innerHTML = '';
        try {
            const originalType = searchInput.type || 'text';
            searchInput.type = 'password';
            searchInput.type = originalType;
        } catch (e) {
            // safeguard
        }
    }

    searchInput.addEventListener('focus', () => {
        if (shouldClearOnNextFocus) {
            shouldClearOnNextFocus = false;
            searchInput.value = '';
            searchOverlay.innerHTML = '';
            // Double clear using timeout to catch asynchronous autofills
            setTimeout(() => {
                if (searchInput.value !== '') {
                    searchInput.value = '';
                    searchOverlay.innerHTML = '';
                    searchInput.dispatchEvent(new Event('input'));
                }
            }, 50);
        }
    });

    // Events
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value;
        const trimmedVal = val.trim();

        if (trimmedVal.length > 0) {
            viewList.classList.remove('search-centered');
        } else {
            viewList.classList.add('search-centered');
        }

        // Atualiza a sobreposição de cores
        if (val.length === 0) {
            searchOverlay.innerHTML = '';
        } else {
            // Envolve dígitos e o ponto (se houver) num span da classe `number-highlight` para ficarem verdes
            const highlighted = val.replace(/(\d+\.?)/g, '<span class="number-highlight">$1</span>');
            searchOverlay.innerHTML = highlighted;
        }

        // Mantém a rolagem sincronizada caso o texto seja maior que a caixa
        searchOverlay.scrollLeft = searchInput.scrollLeft;

        renderSongs(trimmedVal);
    });

    searchInput.addEventListener('scroll', () => {
        searchOverlay.scrollLeft = searchInput.scrollLeft;
    });

    function activateNeon(el) {
        el.classList.add('neon-active');
        setTimeout(() => {
            el.classList.remove('neon-active');
            el.blur(); // Perde o foco fantasma no touch 
        }, 200);
    }

    // Feedback visual (neon ativo) nos botões interativos
    document.querySelectorAll('.flex-btn, #theme-btn, #report-messages-btn, #settings-btn, #list-songs-btn, #search-songs-btn').forEach(btn => {
        btn.addEventListener('mousedown', () => activateNeon(btn));
        btn.addEventListener('touchstart', () => activateNeon(btn), {passive: true});
    });

    // Scroll Listener for Header Bars
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 10) {
            if (songHeaderBar) {
                songHeaderBar.classList.add('scrolled');
                songHeaderBar.classList.add('header-hidden');
            }
            if (listHeaderBar) {
                listHeaderBar.classList.add('scrolled');
                listHeaderBar.classList.add('header-hidden');
            }
        } else {
            if (songHeaderBar) {
                songHeaderBar.classList.remove('scrolled');
                songHeaderBar.classList.remove('header-hidden');
            }
            if (listHeaderBar) {
                listHeaderBar.classList.remove('scrolled');
                listHeaderBar.classList.remove('header-hidden');
            }
        }

        updateFadeInState();
        updateListFadeInState();
    });

    window.addEventListener('resize', () => {
        adjustListFontSize();
        fitTitleText();
        updateFabBackBtnVisibility();
        updateFabBackListBtnVisibility();
    });

    // Dismiss modals or dropdowns with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const settingsDropdownEl = document.getElementById('settings-dropdown');
            const settingsBtnEl = document.getElementById('settings-btn');
            if (settingsDropdownEl && settingsDropdownEl.classList.contains('active')) {
                settingsDropdownEl.classList.remove('active');
                if (settingsBtnEl) settingsBtnEl.classList.remove('active');
            }
            const passwordPromptModalEl = document.getElementById('password-prompt-modal');
            if (passwordPromptModalEl && passwordPromptModalEl.classList.contains('active')) {
                passwordPromptModalEl.classList.remove('active');
            }
            if (bugReportModal && bugReportModal.classList.contains('active')) {
                bugReportModal.classList.remove('active');
            }
            if (bugConfirmModal && bugConfirmModal.classList.contains('active')) {
                bugConfirmModal.classList.remove('active');
            }
            if (actionConfirmModal && actionConfirmModal.classList.contains('active')) {
                actionConfirmModal.classList.remove('active');
            }
            if (bugsListModal && bugsListModal.classList.contains('active')) {
                bugsListModal.classList.remove('active');
            }
        }
    });

    // Initial Render fallback
    renderSongs();
});
