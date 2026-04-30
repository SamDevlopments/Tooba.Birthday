// ===== Quiz Data =====
const quizQuestions = [
  { id: 1, q: "What question are you hoping I'll ask you?", placeholder: "something you've been wanting to share..." },
  { id: 2, q: "Do you like surprises?", placeholder: "honest thoughts on surprises..." },
  { id: 3, q: "When is the last time someone made you blush?", placeholder: "that sweet or embarrassing moment..." },
  { id: 4, q: "What always makes you laugh?", placeholder: "the thing that never fails..." },
  { id: 5, q: "What's the top song on your playlist?", placeholder: "your current favorite..." },
  { id: 6, q: "What's the best compliment you've ever received?", placeholder: "the one that stuck with you..." },
  { id: 7, q: "If you could kiss any fictional character, who would it be?", placeholder: "spill the tea..." },
  { id: 8, q: "What's your love language?", placeholder: "how you feel most loved..." },
  { id: 9, q: "What first attracted you to me?", placeholder: "what caught your attention..." },
  { id: 10, q: "What makes you feel safe with someone?", placeholder: "that feeling of comfort..." }
];

// ===== Song Playlist Data =====
const songPlaylist = [
  { id: 1, name: "Mai Agar", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777488119/Mai_Agar_h1pz74.mp3" },
  { id: 2, name: "Barish", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258311/Barish_capkfb.wav" },
  { id: 3, name: "Chale Aana", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258329/Chale_Aana_o51zfr.wav" },
  { id: 4, name: "Dil Sambhal Jaa Zara", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258312/Dil_Sambhal_Jaa_Zara_fygbq2.mp4" },
  { id: 5, name: "Ek Mulaqat", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258340/Ek_Mulaqat_rhckgg.wav" },
  { id: 6, name: "Hua Hai Aj Pehli Bar", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258331/Hua_Hai_Aj_Pehli_Bar_ejfd1x.wav" },
  { id: 7, name: "Ishq De Fanyar", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258271/Ishq_De_Fanyar_nmayco.mp3" },
  { id: 8, name: "Khat", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258274/Khat_o7epcm.wav" },
  { id: 9, name: "Mai Fir Bhi Tumko Chahuga", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258308/Mai_Fir_Bhi_Tumko_Chahuga_yn8gl6.wav" },
  { id: 10, name: "Mere Pas Tum Ho P1", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258433/Mere_Pas_Tum_Ho_P1_mfs2nk.wav" },
  { id: 11, name: "Mere Pas Tum Ho P2", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258442/Mere_Pas_Tum_Ho_P2_fhzmus.wav" },
  { id: 12, name: "Mere Pas Tum Ho P3", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258431/Mere_Pas_Tum_Ho_P3_o105we.wav" },
  { id: 13, name: "Noor Mehal", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258318/Noor_Mehal_jjx1uy.wav" },
  { id: 14, name: "Ore Piya", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258322/Ore_Piya_wsmlz6.wav" },
  { id: 15, name: "Stare (ikka)", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258298/Sitare_ikka_zuiaq0.wav" },
  { id: 16, name: "Tere Jeha (Cute Version)", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258504/Cute_Version_Tere_Jeha_q4tiav.wav" },
  { id: 17, name: "Tere Jeha (Original)", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258504/Original_Tere_Jeha_z6cr0d.wav" },
  { id: 18, name: "Tere Liye", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258295/Tere_Liye_wzdzrl.wav" },
  { id: 19, name: "Tumhe Apna Banane Ka", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258304/Tumhe_Apna_Banane_Ka_caohpz.wav" },
  { id: 20, name: "Ye Kya Baat Hai Ajki Chandni Me", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258315/Ye_Kya_Baat_Hai_Ajki_Chandni_Me_sfxmnp.wav" },
  { id: 21, name: "Zara Zara P1", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258580/Zara_Zara_P1_fmelx0.wav" },
  { id: 22, name: "Zara Zara P2", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258583/Zara_Zara_P2_p5xbst.wav" },
  { id: 23, name: "Zara Zara P3", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258584/Zara_Zara_P3_jr4bc9.wav" },
  { id: 24, name: "Dhun (in Rain)", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777370764/Dhun_in_rain_ujboj4.wav" },
  { id: 25, name: "Bairan", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777370745/Bairan_farjko.wav" },
  { id: 26, name: "Aitbar Dendi Han", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777370744/Aitbar_Dendi_Han_z9ds0s.wav" },
  { id: 27, name: "Jhol", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777370884/Jhol_eceord.mp3" },
  { id: 28, name: "Tu Jaane Na", artist: "SAMAD", duration: "0:00", audioUrl: "https://res.cloudinary.com/dwwj6cltj/video/upload/v1777370957/Tu_Jaane_Na_inghrm.wav" }
];

let songRequestState = {
  awaitingResponse: false,
  suggestedSongs: []
};

let quizAnswers = new Array(quizQuestions.length).fill('');
let currentQuestionIndex = 0;
let gameStarted = false;

// Conversation memory for context
let conversationHistory = [];
const MAX_HISTORY = 20; // Keep last 20 messages for better context and memory

// Conversation state tracking for natural follow-ups
let conversationState = {
  lastTopic: null,
  lastQuestion: null,
  followUpCount: 0,
  userInterests: [],
  mentionedTopics: [],
  conversationLength: 0,
  userMood: 'neutral',
  lastEmotion: null
};

console.log('Script loaded successfully');

// ===== Performance Utilities =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ===== Typing Sound Effect (Optimized) =====
const TYPING_SFX_URLS = [
  'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777377052/typing_1_dohv3o.mp3',
  'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777377052/typing_2_zhxz7k.mp3'
];
const BACKSPACE_SFX_URL = 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777377498/backspace_jbcnio.mp3';
const TYPING_VOLUME = 0.25;
const BACKSPACE_VOLUME = 0.3;
const TYPING_THROTTLE_MS = 80; // Min ms between sounds

// Audio pools for both sounds
const audioPools = [[], []];
const backspaceAudioPool = [];
const POOL_SIZE = 3; // 3 per sound type
let poolIndices = [0, 0];
let lastTypingTime = 0;

// ===== Image Preloader =====
const imageCache = {};

function preloadImage(url) {
  if (imageCache[url]) return imageCache[url];

  const img = new Image();
  img.src = url;
  imageCache[url] = img;
  return img;
}

// Preload critical images immediately (reduced for performance)
const CRITICAL_IMAGES = [
  'https://i.ibb.co/jv00vHGV/Profile.jpg'
];

// Lazy load vinyl discs when needed
CRITICAL_IMAGES.forEach(url => preloadImage(url));

// Preload audio files
function preloadTypingSfx() {
  TYPING_SFX_URLS.forEach((url, idx) => {
    for (let i = 0; i < POOL_SIZE; i++) {
      const audio = new Audio(url);
      audio.volume = TYPING_VOLUME;
      audio.preload = 'auto';
      audioPools[idx].push(audio);
    }
  });
  // Preload backspace sound
  for (let i = 0; i < POOL_SIZE; i++) {
    const audio = new Audio(BACKSPACE_SFX_URL);
    audio.volume = BACKSPACE_VOLUME;
    audio.preload = 'auto';
    backspaceAudioPool.push(audio);
  }
}
preloadTypingSfx();

let backspacePoolIndex = 0;

// Play backspace sound with throttling and pooling
function playBackspaceSound() {
  const now = Date.now();
  if (now - lastTypingTime < TYPING_THROTTLE_MS) return;
  lastTypingTime = now;

  const sfx = backspaceAudioPool[backspacePoolIndex];
  backspacePoolIndex = (backspacePoolIndex + 1) % POOL_SIZE;

  sfx.currentTime = 0;
  sfx.play().catch(() => {}); // Silently fail
}

// Play typing sound with throttling, pooling, and random sound selection
function playTypingSound() {
  const now = Date.now();
  if (now - lastTypingTime < TYPING_THROTTLE_MS) return;
  lastTypingTime = now;

  // Randomly pick one of the two sounds
  const poolIdx = Math.random() < 0.5 ? 0 : 1;

  const sfx = audioPools[poolIdx][poolIndices[poolIdx]];
  poolIndices[poolIdx] = (poolIndices[poolIdx] + 1) % POOL_SIZE;

  sfx.currentTime = 0;
  sfx.play().catch(() => {}); // Silently fail
}

// Optimized welcome screen typing SFX using requestAnimationFrame
function startWelcomeTypingSfx() {
  const text = "Happy Birthday Tooba!";
  const charCount = text.length;
  const duration = 3000;
  const interval = duration / charCount;
  let charIndex = 0;
  let startTime = null;

  function playNextSound(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const expectedIndex = Math.floor(elapsed / interval);

    while (charIndex < expectedIndex && charIndex < charCount) {
      // Randomly pick one of the two sounds
      const poolIdx = Math.random() < 0.5 ? 0 : 1;
      const sfx = audioPools[poolIdx][poolIndices[poolIdx]];
      poolIndices[poolIdx] = (poolIndices[poolIdx] + 1) % POOL_SIZE;
      sfx.currentTime = 0;
      sfx.play().catch(() => {});
      charIndex++;
    }

    if (charIndex < charCount) {
      requestAnimationFrame(playNextSound);
    }
  }

  requestAnimationFrame(playNextSound);
}

// Analyze image using Google Gemini Vision API
async function analyzeImageWithAI(imageBase64, userMessage = '') {
  try {
    // Remove data URL prefix if present
    const base64Data = imageBase64.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');

    const requestBody = {
      contents: [{
        parts: [
          {
            text: userMessage || "Describe what you see in this image in a friendly, conversational way. Keep it brief but engaging."
          },
          {
            inline_data: {
              mime_type: "image/jpeg",
              data: base64Data
            }
          }
        ]
      }]
    };

    // Using Gemini 1.5 Flash (free tier available)
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDummyKeyForDemo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (response.ok) {
      const data = await response.json();
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
        return data.candidates[0].content.parts[0].text;
      }
    }

    // Fallback responses for image analysis
    const imageResponses = [
      "What a lovely image! Thanks for sharing it with me! 🤍",
      "I can see you shared something interesting! Tell me more about it? 👀",
      "That's a beautiful image! I love the vibes! ✨",
      "Thanks for sharing this with me! It's really nice! 🦢",
      "I see! This is interesting! What made you share this? ☁️"
    ];
    return imageResponses[Math.floor(Math.random() * imageResponses.length)];
  } catch (error) {
    console.error('Image analysis error:', error);
    return "I received your image! Thanks for sharing it with me! 🤍";
  }
}

// Generate AI response using multiple free APIs for knowledge and conversational AI
async function generateAIResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();

  // Check for video request triggers
  if (lowerMessage.includes('video') || lowerMessage.includes('show me something') || lowerMessage.includes('surprise me') || lowerMessage.includes('something for me') || lowerMessage.includes('watch')) {
    const videoEmbedCode = '<div style="position:relative;width:100%;overflow:hidden;padding-top:184.33%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" webkitallowfullscreen mozallowfullscreen allowfullscreen src="https://videos.dyntube.com/iframes/PkwjEl6fBUGplNFmV0lVlA" title="SanWish Loading Screen 1"></iframe></div>';
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: "here's something for you." });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    // Return special marker to trigger video
    return 'SEND_VIDEO:' + videoEmbedCode;
  }

  // Check for song request
  if (lowerMessage.includes('song') || lowerMessage.includes('music') || lowerMessage.includes('sing')) {
    if (!songRequestState.awaitingResponse) {
      // First mention of song - ask if they want to hear one
      songRequestState.awaitingResponse = true;
      conversationHistory.push({ role: 'user', message: userMessage });
      conversationHistory.push({ role: 'assistant', message: "Can I sing for you?" });
      if (conversationHistory.length > MAX_HISTORY * 2) {
        conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
      }
      return "Can I sing for you?";
    }
  }

  // Check if user agreed to hear a song
  if (songRequestState.awaitingResponse && (lowerMessage.includes('yes') || lowerMessage.includes('sure') || lowerMessage.includes('okay') || lowerMessage.includes('ok') || lowerMessage.includes('yeah') || lowerMessage.includes('please'))) {
    // Select 5 random songs from playlist
    const shuffled = [...songPlaylist].sort(() => 0.5 - Math.random());
    songRequestState.suggestedSongs = shuffled.slice(0, 5);
    
    let songList = "Pick one song:\n\n";
    songRequestState.suggestedSongs.forEach((song, index) => {
      songList += `${index + 1}. ${song.name}\n`;
    });
    songList += "\nTell me the number!";
    
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: songList });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return songList;
  }

  // Check if user selected a specific song (by number or name)
  if (songRequestState.suggestedSongs.length > 0) {
    // Check for number selection
    const numberMatch = userMessage.match(/\d+/);
    if (numberMatch) {
      const selectedNum = parseInt(numberMatch[0]);
      if (selectedNum >= 1 && selectedNum <= songRequestState.suggestedSongs.length) {
        const selectedSong = songRequestState.suggestedSongs[selectedNum - 1];
        songRequestState.awaitingResponse = false;
        songRequestState.suggestedSongs = [];
        // Return marker to send song as voice note
        return `SEND_SONG:${JSON.stringify(selectedSong)}`;
      }
    }
    
    // Check for song name match
    const songMatch = songRequestState.suggestedSongs.find(song => 
      lowerMessage.includes(song.name.toLowerCase())
    );
    if (songMatch) {
      songRequestState.awaitingResponse = false;
      songRequestState.suggestedSongs = [];
      // Return marker to send song as voice note
      return `SEND_SONG:${JSON.stringify(songMatch)}`;
    }
  }

  // Update conversation state
  const topics = ['science', 'space', 'technology', 'history', 'geography', 'sports', 'movies', 'music', 'food', 'health', 'education', 'books', 'travel', 'relationships', 'emotions', 'dreams', 'goals', 'hobbies', 'work', 'school'];
  const mentionedTopic = topics.find(topic => lowerMessage.includes(topic));
  if (mentionedTopic && !conversationState.mentionedTopics.includes(mentionedTopic)) {
    conversationState.mentionedTopics.push(mentionedTopic);
    conversationState.lastTopic = mentionedTopic;
    if (!conversationState.userInterests.includes(mentionedTopic)) {
      conversationState.userInterests.push(mentionedTopic);
    }
  }

  // Detect user mood and emotions
  const positiveEmotions = ['happy', 'excited', 'great', 'awesome', 'amazing', 'love', 'wonderful', 'fantastic', 'good', 'joy', 'cheerful', 'delighted', 'thrilled', 'glad', 'pleased', 'grateful', 'thankful', 'lucky', 'optimistic', 'positive', 'enthusiastic'];
  const negativeEmotions = ['sad', 'unhappy', 'depressed', 'upset', 'angry', 'mad', 'furious', 'frustrated', 'annoyed', 'disappointed', 'hopeless', 'worried', 'anxious', 'stressed', 'tired', 'exhausted', 'lonely', 'scared', 'afraid', 'fearful'];
  
  const detectedPositive = positiveEmotions.find(emotion => lowerMessage.includes(emotion));
  const detectedNegative = negativeEmotions.find(emotion => lowerMessage.includes(emotion));
  
  if (detectedPositive) {
    conversationState.userMood = 'positive';
    conversationState.lastEmotion = detectedPositive;
  } else if (detectedNegative) {
    conversationState.userMood = 'negative';
    conversationState.lastEmotion = detectedNegative;
  }

  // Track conversation length
  conversationState.conversationLength++;

  // Check if user is asking a follow-up question
  if (conversationState.lastTopic && (lowerMessage.includes('tell me more') || lowerMessage.includes('what about') || lowerMessage.includes('and') || lowerMessage.includes('also'))) {
    conversationState.followUpCount++;
  } else {
    conversationState.followUpCount = 0;
  }

  // Check for news/current events queries
  if (lowerMessage.includes('news') || lowerMessage.includes('current events') || lowerMessage.includes('what\'s happening') || lowerMessage.includes('whats happening') || lowerMessage.includes('latest') || lowerMessage.includes('today') || lowerMessage.includes('recent') || lowerMessage.includes('breaking') || lowerMessage.includes('headlines') || lowerMessage.includes('world news') || lowerMessage.includes('update')) {
    try {
      // Use a free news API
      const newsResponse = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=demo');
      if (newsResponse.ok) {
        const newsData = await newsResponse.json();
        if (newsData.articles && newsData.articles.length > 0) {
          const articles = newsData.articles.slice(0, 5);
          let newsText = "Here are today's top headlines:\n\n";
          articles.forEach((article, index) => {
            newsText += `${index + 1}. ${article.title}\n`;
            if (article.description) {
              newsText += `   ${article.description.substring(0, 100)}...\n`;
            }
            newsText += "\n";
          });
          newsText += "Want to know more about any of these stories? 📰";
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: newsText });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return newsText;
        }
      }
    } catch (newsError) {
      console.log('News API failed, using fallback');
    }
    
    // Fallback news response
    const newsFallback = [
      "I'd love to share the latest news with you! Unfortunately, I'm having trouble accessing news APIs right now. What specific topic would you like to discuss instead? 📰",
      "Let me fetch the latest headlines for you! Having some technical issues. What's happening in your world? 🌍",
      "News updates are temporarily unavailable. But I'd love to hear what's on your mind! What would you like to talk about? 🤍"
    ];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: newsFallback[Math.floor(Math.random() * newsFallback.length)] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return newsFallback[Math.floor(Math.random() * newsFallback.length)];
  }

  // Check for sports news/scores
  if (lowerMessage.includes('sports') || lowerMessage.includes('football') || lowerMessage.includes('soccer') || lowerMessage.includes('cricket') || lowerMessage.includes('basketball') || lowerMessage.includes('tennis') || lowerMessage.includes('nba') || lowerMessage.includes('nfl') || lowerMessage.includes('mlb') || lowerMessage.includes('score') || lowerMessage.includes('match') || lowerMessage.includes('game')) {
    try {
      // Use a free sports API
      const sportsResponse = await fetch('https://api.the-odds-api.com/v4/sports/upcoming/odds/?apiKey=demo&regions=us');
      if (sportsResponse.ok) {
        const sportsData = await sportsResponse.json();
        if (sportsData && sportsData.length > 0) {
          let sportsText = "Here are some upcoming sports events:\n\n";
          sportsData.slice(0, 5).forEach((event, index) => {
            sportsText += `${index + 1}. ${event.sport_title}\n`;
            sportsText += "\n";
          });
          sportsText += "Want to know about a specific sport or team? ⚽";
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: sportsText });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return sportsText;
        }
      }
    } catch (sportsError) {
      console.log('Sports API failed, using fallback');
    }
    
    const sportsFallback = [
      "I'd love to share sports updates with you! Having some API issues. What sport or team are you following? ⚽",
      "Sports news is temporarily unavailable. What matches are you interested in? 🏀",
      "Let's talk sports! What's your favorite team or sport? 🏈"
    ];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: sportsFallback[Math.floor(Math.random() * sportsFallback.length)] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return sportsFallback[Math.floor(Math.random() * sportsFallback.length)];
  }

  // Check for stock market queries
  if (lowerMessage.includes('stock') || lowerMessage.includes('market') || lowerMessage.includes('shares') || lowerMessage.includes('trading') || lowerMessage.includes('nasdaq') || lowerMessage.includes('dow') || lowerMessage.includes('s&p') || lowerMessage.includes('sp500') || lowerMessage.includes('wall street')) {
    try {
      // Use a free stock API
      const stockResponse = await fetch('https://api.polygon.io/v2/aggs/ticker/AAPL/prev?apiKey=demo');
      if (stockResponse.ok) {
        const stockData = await stockResponse.json();
        if (stockData.results && stockData.results.length > 0) {
          const stock = stockData.results[0];
          const stockText = `Market Update:\n\nApple (AAPL) closed at $${stock.c}\nHigh: $${stock.h}\nLow: $${stock.l}\nVolume: ${stock.v}\n\nNote: This is sample data. For real-time market data, you'd need a paid API key. 📈`;
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: stockText });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return stockText;
        }
      }
    } catch (stockError) {
      console.log('Stock API failed, using fallback');
    }
    
    const stockFallback = [
      "I'd love to share market updates! Having API issues. What stocks or sectors interest you? 📈",
      "Market data is temporarily unavailable. What stocks are you following? 💰",
      "Let's talk investing! What's your portfolio like? 🏦"
    ];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: stockFallback[Math.floor(Math.random() * stockFallback.length)] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return stockFallback[Math.floor(Math.random() * stockFallback.length)];
  }

  // Check for food/suggestion requests first (before crypto to prevent false matches)
  if (lowerMessage.includes('eat') || lowerMessage.includes('food') || lowerMessage.includes('hungry') || lowerMessage.includes('suggest') || lowerMessage.includes('recommend')) {
    // Use only halal food suggestions
    const foodFallback = [
      "How about some biryani? It's aromatic and delicious! 🍛",
      "What about shawarma? Perfectly spiced and satisfying! 🥙",
      "Maybe some falafel? Crispy and flavorful! 🧆",
      "How about a kebab? Grilled to perfection! 🍢",
      "What about some hummus with pita? Healthy and tasty! 🥙",
      "Maybe some curry? Rich and comforting! 🍛",
      "How about some grilled chicken? Simple and delicious! 🍗",
      "What about some Mediterranean food? Fresh and healthy! 🥗",
      "Maybe some lentil soup? Warm and nutritious! 🍲",
      "How about some grilled fish? Light and tasty! 🐟",
      "What about some tabbouleh? Fresh and herby! 🥗",
      "Maybe some stuffed grape leaves? Delicious and traditional! 🍃"
    ];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: foodFallback[Math.floor(Math.random() * foodFallback.length)] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return foodFallback[Math.floor(Math.random() * foodFallback.length)];
  }

  // Check for crypto prices (with word boundaries to prevent false matches)
  const cryptoKeywords = ['crypto', 'bitcoin', 'btc', 'ethereum', 'eth', 'dogecoin', 'doge', 'cryptocurrency', 'altcoin'];
  const hasCryptoKeyword = cryptoKeywords.some(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'i');
    return regex.test(lowerMessage);
  });

  if (hasCryptoKeyword) {
    try {
      // Use a free crypto API
      const cryptoResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,cardano,solana&vs_currencies=usd&include_24hr_change=true');
      if (cryptoResponse.ok) {
        const cryptoData = await cryptoResponse.json();
        let cryptoText = "Cryptocurrency Prices:\n\n";
        const cryptoNames = {
          'bitcoin': 'Bitcoin (BTC)',
          'ethereum': 'Ethereum (ETH)',
          'dogecoin': 'Dogecoin (DOGE)',
          'cardano': 'Cardano (ADA)',
          'solana': 'Solana (SOL)'
        };
        for (const [id, name] of Object.entries(cryptoNames)) {
          if (cryptoData[id]) {
            cryptoText += `${name}: $${cryptoData[id].usd} (${cryptoData[id].usd_24h_change.toFixed(2)}% 24h)\n`;
          }
        }
        cryptoText += "\nData from CoinGecko 🪙";
        conversationHistory.push({ role: 'user', message: userMessage });
        conversationHistory.push({ role: 'assistant', message: cryptoText });
        if (conversationHistory.length > MAX_HISTORY * 2) {
          conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
        }
        return cryptoText;
      }
    } catch (cryptoError) {
      console.log('Crypto API failed, using fallback');
    }
    
    const cryptoFallback = [
      "I'd love to share crypto prices! Having API issues. What coins are you following? 🪙",
      "Crypto data is temporarily unavailable. What cryptocurrencies interest you? 💰",
      "Let's talk crypto! Are you into Bitcoin, Ethereum, or something else? 🚀"
    ];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: cryptoFallback[Math.floor(Math.random() * cryptoFallback.length)] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return cryptoFallback[Math.floor(Math.random() * cryptoFallback.length)];
  }

  // Check for tech news
  if (lowerMessage.includes('tech news') || lowerMessage.includes('technology news') || lowerMessage.includes('gadgets') || lowerMessage.includes('startup news') || lowerMessage.includes('silicon valley')) {
    try {
      // Use news API with tech category
      const techResponse = await fetch('https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=demo');
      if (techResponse.ok) {
        const techData = await techResponse.json();
        if (techData.articles && techData.articles.length > 0) {
          const articles = techData.articles.slice(0, 5);
          let techText = "Latest Tech News:\n\n";
          articles.forEach((article, index) => {
            techText += `${index + 1}. ${article.title}\n`;
            if (article.description) {
              techText += `   ${article.description.substring(0, 100)}...\n`;
            }
            techText += "\n";
          });
          techText += "Want to know more about any tech story? 💻";
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: techText });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return techText;
        }
      }
    } catch (techError) {
      console.log('Tech news API failed, using fallback');
    }
    
    const techFallback = [
      "I'd love to share tech news! Having API issues. What tech topics interest you? 💻",
      "Tech news is temporarily unavailable. What gadgets or startups are you following? 🚀",
      "Let's talk tech! What's the latest innovation you're excited about? 🤖"
    ];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: techFallback[Math.floor(Math.random() * techFallback.length)] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return techFallback[Math.floor(Math.random() * techFallback.length)];
  }

  // Check for entertainment news
  if (lowerMessage.includes('entertainment') || lowerMessage.includes('movies') || lowerMessage.includes('celebrity') || lowerMessage.includes('hollywood') || lowerMessage.includes('bollywood') || lowerMessage.includes('music news') || lowerMessage.includes('tv shows')) {
    try {
      // Use news API with entertainment category
      const entertainmentResponse = await fetch('https://newsapi.org/v2/top-headlines?category=entertainment&country=us&apiKey=demo');
      if (entertainmentResponse.ok) {
        const entertainmentData = await entertainmentResponse.json();
        if (entertainmentData.articles && entertainmentData.articles.length > 0) {
          const articles = entertainmentData.articles.slice(0, 5);
          let entertainmentText = "Entertainment News:\n\n";
          articles.forEach((article, index) => {
            entertainmentText += `${index + 1}. ${article.title}\n`;
            if (article.description) {
              entertainmentText += `   ${article.description.substring(0, 100)}...\n`;
            }
            entertainmentText += "\n";
          });
          entertainmentText += "Want to know more about any entertainment story? 🎬";
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: entertainmentText });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return entertainmentText;
        }
      }
    } catch (entertainmentError) {
      console.log('Entertainment API failed, using fallback');
    }
    
    const entertainmentFallback = [
      "I'd love to share entertainment news! Having API issues. What movies or shows are you watching? 🎬",
      "Entertainment news is temporarily unavailable. What celebrities or shows interest you? 🌟",
      "Let's talk entertainment! What's your favorite movie or show? 📺"
    ];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: entertainmentFallback[Math.floor(Math.random() * entertainmentFallback.length)] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return entertainmentFallback[Math.floor(Math.random() * entertainmentFallback.length)];
  }

  // Check for science news
  if (lowerMessage.includes('science') || lowerMessage.includes('scientific') || lowerMessage.includes('research') || lowerMessage.includes('discovery') || lowerMessage.includes('space news') || lowerMessage.includes('nasa')) {
    try {
      // Use news API with science category
      const scienceResponse = await fetch('https://newsapi.org/v2/top-headlines?category=science&country=us&apiKey=demo');
      if (scienceResponse.ok) {
        const scienceData = await scienceResponse.json();
        if (scienceData.articles && scienceData.articles.length > 0) {
          const articles = scienceData.articles.slice(0, 5);
          let scienceText = "Science News:\n\n";
          articles.forEach((article, index) => {
            scienceText += `${index + 1}. ${article.title}\n`;
            if (article.description) {
              scienceText += `   ${article.description.substring(0, 100)}...\n`;
            }
            scienceText += "\n";
          });
          scienceText += "Want to know more about any science story? 🔬";
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: scienceText });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return scienceText;
        }
      }
    } catch (scienceError) {
      console.log('Science API failed, using fallback');
    }
    
    const scienceFallback = [
      "I'd love to share science news! Having API issues. What scientific topics interest you? 🔬",
      "Science news is temporarily unavailable. What discoveries or research fascinate you? 🧬",
      "Let's talk science! What's the latest discovery you're excited about? 🚀"
    ];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: scienceFallback[Math.floor(Math.random() * scienceFallback.length)] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return scienceFallback[Math.floor(Math.random() * scienceFallback.length)];
  }

  // Check for health news
  if (lowerMessage.includes('health') || lowerMessage.includes('medical') || lowerMessage.includes('wellness') || lowerMessage.includes('medicine') || lowerMessage.includes('disease') || lowerMessage.includes('virus')) {
    try {
      // Use news API with health category
      const healthResponse = await fetch('https://newsapi.org/v2/top-headlines?category=health&country=us&apiKey=demo');
      if (healthResponse.ok) {
        const healthData = await healthResponse.json();
        if (healthData.articles && healthData.articles.length > 0) {
          const articles = healthData.articles.slice(0, 5);
          let healthText = "Health News:\n\n";
          articles.forEach((article, index) => {
            healthText += `${index + 1}. ${article.title}\n`;
            if (article.description) {
              healthText += `   ${article.description.substring(0, 100)}...\n`;
            }
            healthText += "\n";
          });
          healthText += "Want to know more about any health story? 🏥";
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: healthText });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return healthText;
        }
      }
    } catch (healthError) {
      console.log('Health API failed, using fallback');
    }
    
    const healthFallback = [
      "I'd love to share health news! Having API issues. What health topics interest you? 🏥",
      "Health news is temporarily unavailable. What wellness or medical topics are you curious about? 💊",
      "Let's talk health! What's your approach to wellness? 🧘"
    ];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: healthFallback[Math.floor(Math.random() * healthFallback.length)] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return healthFallback[Math.floor(Math.random() * healthFallback.length)];
  }

  // Check for business news
  if (lowerMessage.includes('business') || lowerMessage.includes('economy') || lowerMessage.includes('finance') || lowerMessage.includes('company') || lowerMessage.includes('startup') || lowerMessage.includes('entrepreneur')) {
    try {
      // Use news API with business category
      const businessResponse = await fetch('https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=demo');
      if (businessResponse.ok) {
        const businessData = await businessResponse.json();
        if (businessData.articles && businessData.articles.length > 0) {
          const articles = businessData.articles.slice(0, 5);
          let businessText = "Business News:\n\n";
          articles.forEach((article, index) => {
            businessText += `${index + 1}. ${article.title}\n`;
            if (article.description) {
              businessText += `   ${article.description.substring(0, 100)}...\n`;
            }
            businessText += "\n";
          });
          businessText += "Want to know more about any business story? 💼";
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: businessText });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return businessText;
        }
      }
    } catch (businessError) {
      console.log('Business API failed, using fallback');
    }
    
    const businessFallback = [
      "I'd love to share business news! Having API issues. What business topics interest you? 💼",
      "Business news is temporarily unavailable. What companies or industries are you following? 📊",
      "Let's talk business! What's your area of interest? 💡"
    ];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: businessFallback[Math.floor(Math.random() * businessFallback.length)] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return businessFallback[Math.floor(Math.random() * businessFallback.length)];
  }

  // Check for Bollywood news
  if (lowerMessage.includes('bollywood') || lowerMessage.includes('bollywood news') || lowerMessage.includes('indian cinema') || lowerMessage.includes('bollywood movies') || lowerMessage.includes('bollywood actors') || lowerMessage.includes('bollywood actress') || lowerMessage.includes('srk') || lowerMessage.includes('shah rukh') || lowerMessage.includes('salman') || lowerMessage.includes('aamir') || lowerMessage.includes('deepika') || lowerMessage.includes('priyanka') || lowerMessage.includes('katrina')) {
    try {
      // Use news API with entertainment and India
      const bollywoodResponse = await fetch('https://newsapi.org/v2/everything?q=bollywood&language=en&sortBy=publishedAt&apiKey=demo');
      if (bollywoodResponse.ok) {
        const bollywoodData = await bollywoodResponse.json();
        if (bollywoodData.articles && bollywoodData.articles.length > 0) {
          const articles = bollywoodData.articles.slice(0, 5);
          let bollywoodText = "Bollywood News:\n\n";
          articles.forEach((article, index) => {
            bollywoodText += `${index + 1}. ${article.title}\n`;
            if (article.description) {
              bollywoodText += `   ${article.description.substring(0, 100)}...\n`;
            }
            bollywoodText += "\n";
          });
          bollywoodText += "Want to know more about any Bollywood story? 🎬";
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: bollywoodText });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return bollywoodText;
        }
      }
    } catch (bollywoodError) {
      console.log('Bollywood API failed, using fallback');
    }
    
    const bollywoodFallback = [
      "I'd love to share Bollywood news! Having API issues. Who's your favorite Bollywood star? 🎬",
      "Bollywood news is temporarily unavailable. What movies or actors are you following? 🌟",
      "Let's talk Bollywood! What's your favorite movie or actor? 🎥"
    ];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: bollywoodFallback[Math.floor(Math.random() * bollywoodFallback.length)] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return bollywoodFallback[Math.floor(Math.random() * bollywoodFallback.length)];
  }

  // Check for Hollywood/celebrity news
  if (lowerMessage.includes('hollywood') || lowerMessage.includes('celebrity') || lowerMessage.includes('celebs') || lowerMessage.includes('actor') || lowerMessage.includes('actress') || lowerMessage.includes('star') || lowerMessage.includes('oscar') || lowerMessage.includes('academy awards') || lowerMessage.includes('emmy') || lowerMessage.includes('golden globe') || lowerMessage.includes('red carpet')) {
    try {
      // Use news API for celebrity news
      const hollywoodResponse = await fetch('https://newsapi.org/v2/everything?q=celebrity&language=en&sortBy=publishedAt&apiKey=demo');
      if (hollywoodResponse.ok) {
        const hollywoodData = await hollywoodResponse.json();
        if (hollywoodData.articles && hollywoodData.articles.length > 0) {
          const articles = hollywoodData.articles.slice(0, 5);
          let hollywoodText = "Hollywood & Celebrity News:\n\n";
          articles.forEach((article, index) => {
            hollywoodText += `${index + 1}. ${article.title}\n`;
            if (article.description) {
              hollywoodText += `   ${article.description.substring(0, 100)}...\n`;
            }
            hollywoodText += "\n";
          });
          hollywoodText += "Want to know more about any celebrity story? 🌟";
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: hollywoodText });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return hollywoodText;
        }
      }
    } catch (hollywoodError) {
      console.log('Hollywood API failed, using fallback');
    }
    
    const hollywoodFallback = [
      "I'd love to share Hollywood news! Having API issues. Who's your favorite celebrity? 🌟",
      "Celebrity news is temporarily unavailable. What stars or movies are you following? 🎬",
      "Let's talk Hollywood! What's your favorite movie or celebrity? 🏆"
    ];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: hollywoodFallback[Math.floor(Math.random() * hollywoodFallback.length)] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return hollywoodFallback[Math.floor(Math.random() * hollywoodFallback.length)];
  }

  // Check for gaming industry news
  if (lowerMessage.includes('gaming industry') || lowerMessage.includes('game development') || lowerMessage.includes('gaming news') || lowerMessage.includes('esports news') || lowerMessage.includes('playstation') || lowerMessage.includes('xbox') || lowerMessage.includes('nintendo') || lowerMessage.includes('steam') || lowerMessage.includes('game studio') || lowerMessage.includes('indie game') || lowerMessage.includes('game release') || lowerMessage.includes('game update')) {
    try {
      // Use news API for gaming news
      const gamingResponse = await fetch('https://newsapi.org/v2/everything?q=gaming&language=en&sortBy=publishedAt&apiKey=demo');
      if (gamingResponse.ok) {
        const gamingData = await gamingResponse.json();
        if (gamingData.articles && gamingData.articles.length > 0) {
          const articles = gamingData.articles.slice(0, 5);
          let gamingText = "Gaming Industry News:\n\n";
          articles.forEach((article, index) => {
            gamingText += `${index + 1}. ${article.title}\n`;
            if (article.description) {
              gamingText += `   ${article.description.substring(0, 100)}...\n`;
            }
            gamingText += "\n";
          });
          gamingText += "Want to know more about any gaming story? 🎮";
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: gamingText });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return gamingText;
        }
      }
    } catch (gamingError) {
      console.log('Gaming API failed, using fallback');
    }
    
    const gamingFallback = [
      "I'd love to share gaming industry news! Having API issues. What games or platforms are you following? 🎮",
      "Gaming news is temporarily unavailable. What gaming topics interest you? 🕹️",
      "Let's talk gaming! What's your favorite game or platform? 🎯"
    ];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: gamingFallback[Math.floor(Math.random() * gamingFallback.length)] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return gamingFallback[Math.floor(Math.random() * gamingFallback.length)];
  }

  // Check for animation industry news
  if (lowerMessage.includes('animation') || lowerMessage.includes('anime') || lowerMessage.includes('cartoon') || lowerMessage.includes('disney') || lowerMessage.includes('pixar') || lowerMessage.includes('dreamworks') || lowerMessage.includes('studio ghibli') || lowerMessage.includes('animated movie') || lowerMessage.includes('animated series') || lowerMessage.includes('animation studio')) {
    try {
      // Use news API for animation news
      const animationResponse = await fetch('https://newsapi.org/v2/everything?q=animation&language=en&sortBy=publishedAt&apiKey=demo');
      if (animationResponse.ok) {
        const animationData = await animationResponse.json();
        if (animationData.articles && animationData.articles.length > 0) {
          const articles = animationData.articles.slice(0, 5);
          let animationText = "Animation Industry News:\n\n";
          articles.forEach((article, index) => {
            animationText += `${index + 1}. ${article.title}\n`;
            if (article.description) {
              animationText += `   ${article.description.substring(0, 100)}...\n`;
            }
            animationText += "\n";
          });
          animationText += "Want to know more about any animation story? 🎨";
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: animationText });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return animationText;
        }
      }
    } catch (animationError) {
      console.log('Animation API failed, using fallback');
    }
    
    const animationFallback = [
      "I'd love to share animation news! Having API issues. What animated movies or shows do you like? 🎨",
      "Animation news is temporarily unavailable. What animation studios or films interest you? 🎬",
      "Let's talk animation! What's your favorite animated movie or show? ✨"
    ];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: animationFallback[Math.floor(Math.random() * animationFallback.length)] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return animationFallback[Math.floor(Math.random() * animationFallback.length)];
  }

  // Check for pop culture news
  if (lowerMessage.includes('pop culture') || lowerMessage.includes('trending') || lowerMessage.includes('viral') || lowerMessage.includes('meme') || lowerMessage.includes('social media trend') || lowerMessage.includes('tiktok trend') || lowerMessage.includes('twitter trend') || lowerMessage.includes('internet culture') || lowerMessage.includes('influencer') || lowerMessage.includes('viral video')) {
    try {
      // Use news API for pop culture
      const popCultureResponse = await fetch('https://newsapi.org/v2/everything?q=pop+culture&language=en&sortBy=publishedAt&apiKey=demo');
      if (popCultureResponse.ok) {
        const popCultureData = await popCultureResponse.json();
        if (popCultureData.articles && popCultureData.articles.length > 0) {
          const articles = popCultureData.articles.slice(0, 5);
          let popCultureText = "Pop Culture News:\n\n";
          articles.forEach((article, index) => {
            popCultureText += `${index + 1}. ${article.title}\n`;
            if (article.description) {
              popCultureText += `   ${article.description.substring(0, 100)}...\n`;
            }
            popCultureText += "\n";
          });
          popCultureText += "Want to know more about any pop culture story? 🌟";
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: popCultureText });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return popCultureText;
        }
      }
    } catch (popCultureError) {
      console.log('Pop culture API failed, using fallback');
    }
    
    const popCultureFallback = [
      "I'd love to share pop culture news! Having API issues. What trends or viral content are you following? 🌟",
      "Pop culture news is temporarily unavailable. What's trending in your world? 📱",
      "Let's talk pop culture! What trends or memes are you into? 🔥"
    ];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: popCultureFallback[Math.floor(Math.random() * popCultureFallback.length)] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return popCultureFallback[Math.floor(Math.random() * popCultureFallback.length)];
  }

  // Check for specific sports (expanded coverage)
  if (lowerMessage.includes('premier league') || lowerMessage.includes('epl') || lowerMessage.includes('la liga') || lowerMessage.includes('serie a') || lowerMessage.includes('bundesliga') || lowerMessage.includes('ligue 1') || lowerMessage.includes('champions league') || lowerMessage.includes('uefa') || lowerMessage.includes('fifa') || lowerMessage.includes('world cup') || lowerMessage.includes('ipl') || lowerMessage.includes('cricket world cup') || lowerMessage.includes('nba finals') || lowerMessage.includes('nba playoffs') || lowerMessage.includes('super bowl') || lowerMessage.includes('nfl playoffs') || lowerMessage.includes('wimbledon') || lowerMessage.includes('french open') || lowerMessage.includes('us open') || lowerMessage.includes('australian open') || lowerMessage.includes('formula 1') || lowerMessage.includes('f1') || lowerMessage.includes('motogp') || lowerMessage.includes('olympics') || lowerMessage.includes('olympic')) {
    try {
      // Use news API for specific sports
      const sportsNewsResponse = await fetch('https://newsapi.org/v2/everything?q=sports&language=en&sortBy=publishedAt&apiKey=demo');
      if (sportsNewsResponse.ok) {
        const sportsNewsData = await sportsNewsResponse.json();
        if (sportsNewsData.articles && sportsNewsData.articles.length > 0) {
          const articles = sportsNewsData.articles.slice(0, 5);
          let sportsNewsText = "Sports News:\n\n";
          articles.forEach((article, index) => {
            sportsNewsText += `${index + 1}. ${article.title}\n`;
            if (article.description) {
              sportsNewsText += `   ${article.description.substring(0, 100)}...\n`;
            }
            sportsNewsText += "\n";
          });
          sportsNewsText += "Want to know more about any sports story? ⚽";
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: sportsNewsText });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return sportsNewsText;
        }
      }
    } catch (sportsNewsError) {
      console.log('Sports news API failed, using fallback');
    }
    
    const sportsNewsFallback = [
      "I'd love to share sports news! Having API issues. What sport or team are you following? ⚽",
      "Sports news is temporarily unavailable. What matches or leagues interest you? 🏆",
      "Let's talk sports! What's your favorite team or league? 🏈"
    ];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: sportsNewsFallback[Math.floor(Math.random() * sportsNewsFallback.length)] });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return sportsNewsFallback[Math.floor(Math.random() * sportsNewsFallback.length)];
  }

  // Check for weather queries
  if (lowerMessage.includes('weather') || lowerMessage.includes('temperature') || lowerMessage.includes('forecast')) {
    try {
      const weatherResponse = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m,weather_code'
      );
      if (weatherResponse.ok) {
        const weatherData = await weatherResponse.json();
        const temp = weatherData.current.temperature_2m;
        const code = weatherData.current.weather_code;
        const weatherConditions = {
          0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
          45: 'Fog', 48: 'Depositing rime fog', 51: 'Light drizzle', 53: 'Moderate drizzle',
          55: 'Dense drizzle', 61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
          71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow'
        };
        const condition = weatherConditions[code] || 'Unknown';
        const response = `It's currently ${temp}°C and ${condition} in Delhi! 🌤️`;
        conversationHistory.push({ role: 'user', message: userMessage });
        conversationHistory.push({ role: 'assistant', message: response });
        if (conversationHistory.length > MAX_HISTORY * 2) {
          conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
        }
        return response;
      }
    } catch (weatherError) {
      console.log('Weather API failed, falling back');
    }
  }

  // Check for joke requests
  const jokeKeywords = ['joke', 'funny', 'make me laugh', 'mazaak', 'hasi', 'hasana', 'sunao', 'batao', 'kya'];
  const isJokeRequest = jokeKeywords.some(keyword => lowerMessage.includes(keyword));

  if (isJokeRequest) {
    // Check if message is Hinglish
    const hinglishIndicators = ['kya', 'hai', 'ho', 'kaise', 'namaste', 'bhai', 'dil', 'dukh', 'khush', 'ka', 'ki', 'ko', 'padhai', 'padh', 'khana', 'shukriya', 'dhanyawad', 'alvida', 'main', 'tum', 'tumhare', 'mujhe', 'karna', 'batao', 'sunna', 'chahta', 'chahti', 'raha', 'rahi', 'hain', 'theek', 'achha', 'badhiya', 'scene', 'khabar', 'mehnat', 'phal', 'viswas', 'focus', 'lag', 'jaao', 'zaroori', 'favorite', 'recommend', 'khaana', 'mubarak', 'badhai', 'kahan', 'kab', 'kyun', 'kiske', 'kiska', 'kisne', 'kisliye', 'kaise', 'kabhi', 'kadhi', 'sab', 'sabse', 'sabhi', 'bilkul', 'zaroor', 'sahi', 'galat', 'accha', 'bura', 'pyaar', 'dost', 'dosti', 'gussa', 'naraz', 'khushi', 'gham', 'umeed', 'niraash', 'safal', 'asafal', 'jeet', 'haar', 'zindagi', 'maut', 'duniya', 'samaj', 'parivaar', 'rishte', 'yaad', 'bhool', 'chhod', 'rakhna', 'lena', 'dena', 'aana', 'jana', 'rehna', 'jina', 'marna', 'sochna', 'samajhna', 'seekhna', 'sikhana', 'kaam', 'kaaj', 'business', 'job', 'career', 'school', 'college', 'university', 'degree', 'exam', 'result', 'marks', 'grade', 'pass', 'fail', 'success', 'failure', 'problem', 'solution', 'jawaab', 'sawaal', 'answer', 'question', 'help', 'madad', 'support', 'care', 'love', 'hate', 'like', 'dislike', 'happy', 'sad', 'angry', 'calm', 'peace', 'war', 'fight', 'friend', 'enemy', 'good', 'bad', 'better', 'worse', 'best', 'worst', 'high', 'low', 'up', 'down', 'left', 'right', 'front', 'back', 'top', 'bottom', 'inside', 'outside', 'yes', 'no', 'maybe', 'perhaps', 'probably', 'definitely', 'certainly', 'surely', 'actually', 'really', 'truly', 'honestly', 'frankly', 'seriously', 'joking', 'funny', 'serious', 'important', 'urgent', 'emergency', 'crisis', 'normal', 'regular', 'usual', 'common', 'rare', 'unique', 'special', 'different', 'same', 'similar', 'equal', 'unequal', 'more', 'less', 'much', 'many', 'few', 'little', 'big', 'small', 'large', 'tiny', 'huge', 'giant', 'short', 'long', 'tall', 'wide', 'narrow', 'thick', 'thin', 'fat', 'skinny', 'heavy', 'light', 'dark', 'bright', 'color', 'colour', 'black', 'white', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'grey', 'silver', 'gold', 'metal', 'wood', 'plastic', 'glass', 'paper', 'cloth', 'fabric', 'material', 'substance', 'matter', "energy", "power", "force", "strength", "weakness", "health", "disease", "sickness", "illness", "cure", "medicine", "doctor", "hospital", "clinic", "nurse", "patient", "treatment", "therapy", "recovery", "healing", "pain", "relief", "comfort", "suffering", "misery", "joy", "pleasure", "delight", "satisfaction", "contentment", "happiness", "bliss", "ecstasy", "excitement", "thrill", "adventure", "journey", "trip", "travel", "vacation", "holiday", "break", "rest", "relaxation", "leisure", "entertainment", "fun", "enjoyment", "amusement", "recreation", "hobby", "interest", "passion", "obsession", "addiction", "habit", "routine", "schedule", "plan", "goal", "target", "objective", "aim", "purpose", "meaning", "significance", "value", "worth", "price", "cost", "expense", "money", "cash", "currency", "wealth", "rich", "poor", "middle", "class", "status", "position", "rank", "level", "grade", "score", "points", "marks", "result", "outcome", "consequence", "effect", "impact", "influence", "power", "authority", "control", "command", "order", "rule", "law", "regulation", "policy", "system", "structure", "organization", "institution", "company", "business", "firm", "enterprise", "corporation", "industry", "market", "economy", "finance", "banking", "investment", "savings", "debt", "loan", "credit", "debit", "account", "balance", "transaction", "exchange", "trade", "commerce", "business", "deal", "contract", "agreement", "promise", "commitment", "obligation", "duty", "responsibility", "role", "function", "task", "job", "work", "employment", "career", "profession", "occupation", "vocation", "calling", "mission", "vision", "dream", "hope", "wish", "desire", "want", "need", "requirement", "necessity", "essential", "important", "vital", "critical", "crucial", "key", "main", "major", "minor", "secondary", "primary", "principal", "chief", "head", "leader", "boss", "manager", "supervisor", "director", "executive", "officer", "official", "authority", "government", "state", "nation", "country", "region", "area", "zone", "territory", "land", "territory", "soil", "ground", "earth", "world", "planet", "universe", "space", "sky", "heaven", "hell", "god", "religion", "faith", "belief", "spirit", "soul", "mind", "brain", "heart", "body", "life", "death", "birth", "growth", "development", "progress", "advancement", "improvement", "enhancement", "upgrade", "update", "change", "modification", "alteration", "adjustment", "adaptation", "evolution", "revolution", "transformation", "conversion", "transition", "shift", "move", "movement", "motion", "action", "activity", "operation", "function", "process", "procedure", "method", "technique", "strategy", "tactic", "approach", "way", "manner", "style", "form", "shape", "size", "dimension", "measurement", "quantity", "amount", "number", "figure", "digit", "statistic", "data", "information", "knowledge", "wisdom", "intelligence", "smart", "clever", "wise", "foolish", "stupid", "dumb", "silly", "funny", "serious", "important", "trivial", "significant", "insignificant", "relevant", "irrelevant", "useful", "useless", "helpful", "harmful", "beneficial", "detrimental", "positive", "negative", "advantage", "disadvantage", "pro", "con", "benefit", "cost", "gain", "loss", "profit", "expense", "income", "revenue", "earnings", "salary", "wage", "pay", "compensation", "reward", "punishment", "prize", "penalty", "award", "honor", "recognition", "fame", "glory", "shame", "disgrace", "respect", "disrespect", "honor", "dishonor", "dignity", "humiliation", "pride", "humility", "modesty", "arrogance", "confidence", "doubt", "certainty", "uncertainty", "belief", "disbelief", "trust", "distrust", "faith", "skepticism", "optimism", "pessimism", "hope", "despair", "courage", "fear", "bravery", "cowardice", "strength", "weakness", "power", "helplessness", "control", "chaos", "order", "disorder", "structure", "anarchy", "freedom", "slavery", "liberty", "oppression", "justice", "injustice", "fairness", "unfairness", "equality", "inequality", "rights", "wrongs", "truth", "lie", "honesty", "dishonesty", "integrity", "corruption", "virtue", "vice", "good", "evil", "right", "wrong", "moral", "immoral", "ethical", "unethical", "legal", "illegal", "legitimate", "illegitimate", "valid", "invalid", "authentic", "fake", "genuine", "artificial", "natural", "synthetic", "organic", "inorganic", "living", "dead", "alive", "lifeless", "animate", "inanimate", "active", "inactive", "passive", "dynamic", "static", "changing", "constant", "variable", "fixed", "flexible", "rigid", "soft", "hard", "tough", "gentle", "rough", "smooth", "sharp", "blunt", "keen", "dull", "bright", "dim", "clear", "cloudy", "sunny", "rainy", "windy", "stormy", "calm", "peaceful", "noisy", "quiet", "loud", "silent", "sound", "noise", "music", "song", "melody", "rhythm", "beat", "tune", "harmony", "disharmony", "concord", "discord", "agreement", "disagreement", "consensus", "conflict", "compromise", "dispute", "resolution", "solution", "answer", "question", "problem", "issue", "matter", "topic", "subject", "theme", "idea", "concept", "notion", "thought", "belief", "opinion", "view", "perspective", "standpoint", "angle", "aspect", "facet", "side", "part", "portion", "section", "segment", "piece", "fragment", "bit", "chunk", "slice", "share", "portion", "quota", "allotment", "allocation", "distribution", "assignment", "allocation", "dispersal", "spread", "diffusion", "expansion", "extension", "growth", "increase", "decrease", "reduction", "decline", "fall", "rise", "drop", "jump", "leap", "bound", "step", "pace", "speed", "rate", "tempo", "rhythm", "cadence", "flow", "current", "stream", "tide", "wave", "ripple", "surge", "flood", "drought", "dry", "wet", "moist", "damp", "humid", "arid", "barren", "fertile", "rich", "poor", "abundant", "scarce", "plentiful", "rare", "common", "unusual", "normal", "strange", "weird", "odd", "peculiar", "bizarre", "curious", "interesting", "boring", "dull", "exciting", "thrilling", "amazing", "awesome", "fantastic", "wonderful", "terrible", "horrible", "awful", "disgusting", "repulsive", "attractive", "repellent", "beautiful", "ugly", "pretty", "handsome", "cute", "lovely", "charming", "delightful", "pleasant", "unpleasant", "agreeable", "disagreeable", "comfortable", "uncomfortable", "convenient", "inconvenient", "easy", "difficult", "simple", "complex", "complicated", "sophisticated", "basic", "advanced", "elementary", "fundamental", "essential", "primary", "secondary", "tertiary", "final", "initial", "first", "last", "beginning", "end", "start", "finish", "middle", "center", "edge", "border", "boundary", "limit", "restriction", "constraint", "freedom", "liberty", "independence", "dependence", "reliance", "trust", "distrust", "faith", "skepticism", "belief", "disbelief", "hope", "despair", "optimism", "pessimism", "confidence", "doubt", "certainty", "uncertainty"];
    const isHinglishMessage = hinglishIndicators.some(word => lowerMessage.includes(word));

    if (isHinglishMessage) {
      // Give Hinglish joke
      try {
        // Try JokeAPI with Hindi jokes
        const hindiJokeResponse = await fetch('https://v2.jokeapi.dev/joke/Any?lang=hi&blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
        if (hindiJokeResponse.ok) {
          const hindiJokeData = await hindiJokeResponse.json();
          if (hindiJokeData.setup && hindiJokeData.delivery) {
            const response = `${hindiJokeData.setup}\n\n${hindiJokeData.delivery} 😂`;
            conversationHistory.push({ role: 'user', message: userMessage });
            conversationHistory.push({ role: 'assistant', message: response });
            if (conversationHistory.length > MAX_HISTORY * 2) {
              conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
            }
            return response;
          } else if (hindiJokeData.joke) {
            const response = hindiJokeData.joke + " 😂";
            conversationHistory.push({ role: 'user', message: userMessage });
            conversationHistory.push({ role: 'assistant', message: response });
            if (conversationHistory.length > MAX_HISTORY * 2) {
              conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
            }
            return response;
          }
        }
      } catch (hindiJokeError) {
        console.log('Hindi joke API failed, using high-quality fallback');
      }

      // High-quality Hinglish/Hindi jokes
      const qualityHindiJokes = [
        {
          setup: "Teacher ne pucha: 'Ganga ka source kahan hai?'",
          punchline: "Student: 'Mere ghar ke paas nadi hai!' 😂"
        },
        {
          setup: "Papa: 'Beta, padh le!'",
          punchline: "Beta: 'Papa, main toh padh hi raha hoon!' 😂"
        },
        {
          setup: "Doctor: 'Dawai le lo!'",
          punchline: "Patient: 'Doctor, main toh dawai se bhi tez hoon!' 😂"
        },
        {
          setup: "Baba ji ka thullu:",
          punchline: "Jab bhi tension ho, thullu nikal lo! 😂"
        },
        {
          setup: "Pappu ne pucha: 'Mausam kaisa hai?'",
          punchline: "Teacher: 'Aasmaan mein badal hain!' 😂"
        },
        {
          setup: "Friend: 'Aaj ka mood kaisa hai?'",
          punchline: "Main: 'Mood toh theek hai, par wallet kharab hai!' 😂"
        },
        {
          setup: "Boss ne kaha: 'Aaj kaam jaldi khatam karo!'",
          punchline: "Employee: 'Sir, aap jaldi ja rahe ho kya?' 😂"
        },
        {
          setup: "Wife: 'Aaj khana kya banau?'",
          punchline: "Husband: 'Jo bhi banao, bas spicy mat banao!' 😂"
        },
        {
          setup: "Teacher: 'Akbar aur Birbal kaun the?'",
          punchline: "Student: 'Dono mere friends the!' 😂"
        },
        {
          setup: "Neighbor: 'Aapka WiFi ka password kya hai?'",
          punchline: "Main: '12345678!' 😂"
        }
      ];

      // Cute Hinglish jokes
      const cuteHindiJokes = [
        {
          setup: "Chhote bacche ne pucha: 'Mummy, main kahan se aaya?'",
          punchline: "Mummy: 'Mere dil se! 🥰' 😊"
        },
        {
          setup: "Papa ne bola: 'Beta, tumhari aankhein bahut pyaari hain!'",
          punchline: "Beta: 'Papa, aapki bhi! 🥺' 💕"
        },
        {
          setup: "Teacher: 'Tumhara favorite color kya hai?'",
          punchline: "Student: 'Pink! Kyunki wo pyaara hai! 🌸' 💗"
        },
        {
          setup: "Dost ne pucha: 'Tumhe kya pasand hai?'",
          punchline: "Main: 'Dosti! Kyunki wo dil se hoti hai! 🤗' 💖"
        },
        {
          setup: "Nani ne bola: 'Beta, khaana kha lo!'",
          punchline: "Main: 'Nani, aapke haath ka khaana sabse tasty hai! 🍽️' 🥰"
        },
        {
          setup: "Chhote bacche ne kaha: 'Main bada hokar doctor banunga!'",
          punchline: "Teacher: 'Bahut accha! Tumhe sab theek karega! 🏥' 😊"
        },
        {
          setup: "Papa ne bola: 'Beta, tum bahut smart ho!'",
          punchline: "Beta: 'Papa, aap bhi! Kyunki aap mere ho! 🧠' 💙"
        },
        {
          setup: "Dost ne kaha: 'Tumhari smile bahut cute hai!'",
          punchline: "Main: 'Aapki bhi! Kyunki aap dost ho! 😊' 😄"
        },
        {
          setup: "Teacher: 'Tumhara favorite animal kya hai?'",
          punchline: "Student: 'Cat! Kyunki wo pyaara hai! 🐱' 🐾"
        },
        {
          setup: "Mummy ne bola: 'Beta, jaldi aa jao!'",
          punchline: "Main: 'Mummy, main aa raha hoon! Miss kar rahi hoon! 🏠' 🥰"
        },
        {
          setup: "Chhote bacche ne kaha: 'Main bada hokar pilot banunga!'",
          punchline: "Teacher: 'Wow! Tum udna seekhoge! ✈️' 🌟"
        },
        {
          setup: "Papa ne bola: 'Beta, tumhari baatein bahut acchi hain!'",
          punchline: "Beta: 'Papa, aapki bhi! Kyunki aap sikhate ho! 📚' 📖"
        },
        {
          setup: "Dost ne pucha: 'Tumhe kya karna pasand hai?'",
          punchline: "Main: 'Tumse baat karna! Kyunki tum dost ho! 🤗' 💕"
        },
        {
          setup: "Nani ne bola: 'Beta, thoda sa khaana khao!'",
          punchline: "Main: 'Nani, main kha lunga! Nani ka pyaar zaroori hai! 🍽️' 🥰"
        },
        {
          setup: "Teacher: 'Tumhara favorite subject kya hai?'",
          punchline: "Student: 'Math! Kyunki wo interesting hai! 🔢' 🧮"
        },
        {
          setup: "Chhote bacche ne kaha: 'Main bada hokar scientist banunga!'",
          punchline: "Teacher: 'Bahut accha! Tum discoveries karo! 🔬' 🧪"
        }
      ];
      // Combine regular and cute Hinglish jokes
      const allHindiJokes = [...qualityHindiJokes, ...cuteHindiJokes];
      const randomHindiJoke = allHindiJokes[Math.floor(Math.random() * allHindiJokes.length)];
      const response = `${randomHindiJoke.setup}\n\n${randomHindiJoke.punchline}`;
      conversationHistory.push({ role: 'user', message: userMessage });
      conversationHistory.push({ role: 'assistant', message: response });
      if (conversationHistory.length > MAX_HISTORY * 2) {
        conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
      }
      return response;
    }

    // Give English joke
    try {
      // Try multiple joke APIs for better quality
      const jokeApis = [
        'https://official-joke-api.appspot.com/random_joke',
        'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark?blacklistFlags=nsfw,religious,political,racist,sexist,explicit',
        'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
      ];

      for (const apiUrl of jokeApis) {
        try {
          const jokeResponse = await fetch(apiUrl);
          if (jokeResponse.ok) {
            const jokeData = await jokeResponse.json();
            if (jokeData.setup && jokeData.delivery) {
              const response = `${jokeData.setup}\n\n${jokeData.delivery} 😂`;
              conversationHistory.push({ role: 'user', message: userMessage });
              conversationHistory.push({ role: 'assistant', message: response });
              if (conversationHistory.length > MAX_HISTORY * 2) {
                conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
              }
              return response;
            } else if (jokeData.joke) {
              const response = jokeData.joke + " 😂";
              conversationHistory.push({ role: 'user', message: userMessage });
              conversationHistory.push({ role: 'assistant', message: response });
              if (conversationHistory.length > MAX_HISTORY * 2) {
                conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
              }
              return response;
            }
          }
        } catch (apiError) {
          continue;
        }
      }
    } catch (jokeError) {
      console.log('Joke APIs failed, using high-quality fallback');
    }

    // High-quality fallback jokes
    const qualityJokes = [
      {
        setup: "Why don't scientists trust atoms?",
        punchline: "Because they make up everything! 😂"
      },
      {
        setup: "I told my wife she was drawing her eyebrows too high.",
        punchline: "She looked surprised. 😂"
      },
      {
        setup: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field! 😂"
      },
      {
        setup: "I'm reading a book about anti-gravity.",
        punchline: "It's impossible to put down! 😂"
      },
      {
        setup: "Why don't eggs tell jokes?",
        punchline: "They'd crack each other up! 😂"
      },
      {
        setup: "What do you call a fake noodle?",
        punchline: "An impasta! 😂"
      },
      {
        setup: "Why did the coffee file a police report?",
        punchline: "It got mugged! 😂"
      },
      {
        setup: "What do you call a bear with no teeth?",
        punchline: "A gummy bear! 😂"
      },
      {
        setup: "Why don't skeletons fight each other?",
        punchline: "They don't have the guts! 😂"
      },
      {
        setup: "What did the ocean say to the beach?",
        punchline: "Nothing, it just waved! 😂"
      }
    ];
    const randomJoke = qualityJokes[Math.floor(Math.random() * qualityJokes.length)];
    const response = `${randomJoke.setup}\n\n${randomJoke.punchline}`;
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: response });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return response;
  }

  // Check for quote requests
  if (lowerMessage.includes('quote') || lowerMessage.includes('inspire') || lowerMessage.includes('motivate')) {
    try {
      const quoteResponse = await fetch('https://api.quotable.io/random?tags=inspirational,motivational');
      if (quoteResponse.ok) {
        const quoteData = await quoteResponse.json();
        const response = `"${quoteData.content}" - ${quoteData.author} ✨`;
        conversationHistory.push({ role: 'user', message: userMessage });
        conversationHistory.push({ role: 'assistant', message: response });
        if (conversationHistory.length > MAX_HISTORY * 2) {
          conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
        }
        return response;
      }
    } catch (quoteError) {
      console.log('Quote API failed, falling back');
    }
  }

  // Check for Hinglish quote requests
  if (lowerMessage.includes('quote') && (lowerMessage.includes('hindi') || lowerMessage.includes('hinglish') || lowerMessage.includes('anmol vachan'))) {
    try {
      const hindiQuotes = [
        "Karm kar, phal ki chinta mat kar - Bhagavad Gita 🙏",
        "Waqt sab badal deta hai - Bas himmat rakhna! 💪",
        "Mehnat ka phal kabhi nahi milta, par mehnat zaroori hai! 🌟",
        "Zindagi mein aise log aate hain jo humein badal dete hain! ✨"
      ];
      const response = hindiQuotes[Math.floor(Math.random() * hindiQuotes.length)];
      conversationHistory.push({ role: 'user', message: userMessage });
      conversationHistory.push({ role: 'assistant', message: response });
      if (conversationHistory.length > MAX_HISTORY * 2) {
        conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
      }
      return response;
    } catch (hindiQuoteError) {
      console.log('Hindi quote failed, falling back');
    }
  }

  // Check for dictionary/definition requests
  if (lowerMessage.includes('define') || lowerMessage.includes('meaning of') || lowerMessage.includes('what does')) {
    try {
      const word = userMessage.replace(/^(define|meaning of|what does)\s+/i, '').replace(/\s+mean\??$/i, '');
      if (word.length > 2) {
        const dictResponse = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
        if (dictResponse.ok) {
          const dictData = await dictResponse.json();
          if (dictData[0] && dictData[0].meanings[0]) {
            const definition = dictData[0].meanings[0].definitions[0].definition;
            const response = `"${word}" means: ${definition} 📖`;
            conversationHistory.push({ role: 'user', message: userMessage });
            conversationHistory.push({ role: 'assistant', message: response });
            if (conversationHistory.length > MAX_HISTORY * 2) {
              conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
            }
            return response;
          }
        }
      }
    } catch (dictError) {
      console.log('Dictionary API failed, falling back');
    }
  }

  // Check for cat facts
  if (lowerMessage.includes('cat') || lowerMessage.includes('kitten') || lowerMessage.includes('meow')) {
    try {
      const catResponse = await fetch('https://catfact.ninja/fact');
      if (catResponse.ok) {
        const catData = await catResponse.json();
        const response = `${catData.fact} 🐱`;
        conversationHistory.push({ role: 'user', message: userMessage });
        conversationHistory.push({ role: 'assistant', message: response });
        if (conversationHistory.length > MAX_HISTORY * 2) {
          conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
        }
        return response;
      }
    } catch (catError) {
      console.log('Cat API failed, falling back');
    }
  }

  // Check for dog facts
  if (lowerMessage.includes('dog') || lowerMessage.includes('puppy') || lowerMessage.includes('woof')) {
    try {
      const dogResponse = await fetch('https://dogapi.dog/api/v2/facts');
      if (dogResponse.ok) {
        const dogData = await dogResponse.json();
        if (dogData.data && dogData.data[0]) {
          const response = `${dogData.data[0].attributes.body} 🐕`;
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: response });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return response;
        }
      }
    } catch (dogError) {
      console.log('Dog API failed, falling back');
    }
  }

  // Check for advice requests
  if (lowerMessage.includes('advice') || lowerMessage.includes('suggest') || lowerMessage.includes('tip')) {
    try {
      const adviceResponse = await fetch('https://api.adviceslip.com/advice');
      if (adviceResponse.ok) {
        const adviceData = await adviceResponse.json();
        const response = adviceData.slip.advice + " 💡";
        conversationHistory.push({ role: 'user', message: userMessage });
        conversationHistory.push({ role: 'assistant', message: response });
        if (conversationHistory.length > MAX_HISTORY * 2) {
          conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
        }
        return response;
      }
    } catch (adviceError) {
      console.log('Advice API failed, falling back');
    }
  }

  // Check for activity/bored requests
  if (lowerMessage.includes('bored') || lowerMessage.includes('activity') || lowerMessage.includes('what should i do')) {
    try {
      const activityResponse = await fetch('https://www.boredapi.com/api/activity');
      if (activityResponse.ok) {
        const activityData = await activityResponse.json();
        const response = `How about: ${activityData.activity}? (Type: ${activityData.type}) 🎯`;
        conversationHistory.push({ role: 'user', message: userMessage });
        conversationHistory.push({ role: 'assistant', message: response });
        if (conversationHistory.length > MAX_HISTORY * 2) {
          conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
        }
        return response;
      }
    } catch (activityError) {
      console.log('Activity API failed, falling back');
    }
  }

  // Check for trivia requests
  if (lowerMessage.includes('trivia') || lowerMessage.includes('quiz') || lowerMessage.includes('question')) {
    try {
      const triviaResponse = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
      if (triviaResponse.ok) {
        const triviaData = await triviaResponse.json();
        if (triviaData.results && triviaData.results[0]) {
          const question = triviaData.results[0].question.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
          const answer = triviaData.results[0].correct_answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
          const response = `Trivia: ${question}\nAnswer: ${answer} 🧠`;
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: response });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return response;
        }
      }
    } catch (triviaError) {
      console.log('Trivia API failed, falling back');
    }
  }

  // Check for random fact requests
  if (lowerMessage.includes('fact') || lowerMessage.includes('random fact') || lowerMessage.includes('did you know')) {
    try {
      const factResponse = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
      if (factResponse.ok) {
        const factData = await factResponse.json();
        const response = `Did you know? ${factData.text} 🤔`;
        conversationHistory.push({ role: 'user', message: userMessage });
        conversationHistory.push({ role: 'assistant', message: response });
        if (conversationHistory.length > MAX_HISTORY * 2) {
          conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
        }
        return response;
      }
    } catch (factError) {
      console.log('Fact API failed, falling back');
    }
  }

  // Check for Hinglish fact requests
  if (lowerMessage.includes('fact') && (lowerMessage.includes('hindi') || lowerMessage.includes('hinglish') || lowerMessage.includes('sach'))) {
    try {
      const hindiFacts = [
        "Kya aap jaante hain? India mein 22 official languages hain! 🇮🇳",
        "Sach hai! Taj Mahal har saal thoda sa ghut raha hai! 🏛️",
        "Kya pata tha? Honey kabhi kharab nahi hota! 🍯",
        "Fact hai! Octopus teen dil se jeeta hai! 🐙"
      ];
      const response = hindiFacts[Math.floor(Math.random() * hindiFacts.length)];
      conversationHistory.push({ role: 'user', message: userMessage });
      conversationHistory.push({ role: 'assistant', message: response });
      if (conversationHistory.length > MAX_HISTORY * 2) {
        conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
      }
      return response;
    } catch (hindiFactError) {
      console.log('Hindi fact failed, falling back');
    }
  }

  // Check for affirmation requests
  if (lowerMessage.includes('affirmation') || lowerMessage.includes('encourage') || lowerMessage.includes('motivate me')) {
    try {
      const affirmationResponse = await fetch('https://www.affirmations.dev/');
      if (affirmationResponse.ok) {
        const affirmationData = await affirmationResponse.json();
        const response = `${affirmationData.affirmation} ✨`;
        conversationHistory.push({ role: 'user', message: userMessage });
        conversationHistory.push({ role: 'assistant', message: response });
        if (conversationHistory.length > MAX_HISTORY * 2) {
          conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
        }
        return response;
      }
    } catch (affirmationError) {
      console.log('Affirmation API failed, falling back');
    }
  }

  // Check for Hinglish affirmation requests
  if (lowerMessage.includes('affirmation') && (lowerMessage.includes('hindi') || lowerMessage.includes('hinglish') || lowerMessage.includes('himmat'))) {
    try {
      const hindiAffirmations = [
        "Tum kar sakte ho! Bas himmat rakhna! 💪",
        "Tumhara sapna sach hoga! 🌟",
        "Tum strong ho! Mushkil aayegi par tum haaroge nahi! 🙏",
        "Tumhari mehnat zaroor rang layegi! ✨"
      ];
      const response = hindiAffirmations[Math.floor(Math.random() * hindiAffirmations.length)];
      conversationHistory.push({ role: 'user', message: userMessage });
      conversationHistory.push({ role: 'assistant', message: response });
      if (conversationHistory.length > MAX_HISTORY * 2) {
        conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
      }
      return response;
    } catch (hindiAffirmationError) {
      console.log('Hindi affirmation failed, falling back');
    }
  }

  // Check for Hinglish news requests
  if (lowerMessage.includes('news') && (lowerMessage.includes('hindi') || lowerMessage.includes('hinglish') || lowerMessage.includes('khabar'))) {
    try {
      const hindiNewsResponse = await fetch('https://newsapi.org/v2/top-headlines?country=in&language=hi&apiKey=demo');
      if (hindiNewsResponse.ok) {
        const hindiNewsData = await hindiNewsResponse.json();
        if (hindiNewsData.articles && hindiNewsData.articles.length > 0) {
          const article = hindiNewsData.articles[0];
          const response = `${article.title?.substring(0, 150)}... 📰`;
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: response });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return response;
        }
      }
    } catch (hindiNewsError) {
      console.log('Hindi news API failed, using fallback');
    }
    // Fallback to local Hindi news
    const hindiNewsFallback = [
      "Aaj ki khabar: India mein sab kuch theek hai! 📰",
      "News update: Technology mein bahut progress ho raha hai! 📰",
      "Khabar: Education sector mein bahut changes aa rahe hain! 📰",
      "Latest: Health awareness badh rahi hai India mein! 📰"
    ];
    const response = hindiNewsFallback[Math.floor(Math.random() * hindiNewsFallback.length)];
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: response });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return response;
  }

  // Check for Chuck Norris jokes
  if (lowerMessage.includes('chuck') || lowerMessage.includes('norris')) {
    try {
      const chuckResponse = await fetch('https://api.chucknorris.io/jokes/random');
      if (chuckResponse.ok) {
        const chuckData = await chuckResponse.json();
        const response = chuckData.value + " 💪";
        conversationHistory.push({ role: 'user', message: userMessage });
        conversationHistory.push({ role: 'assistant', message: response });
        if (conversationHistory.length > MAX_HISTORY * 2) {
          conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
        }
        return response;
      }
    } catch (chuckError) {
      console.log('Chuck Norris API failed, falling back');
    }
  }

  // Check for Pokemon requests
  if (lowerMessage.includes('pokemon') || lowerMessage.includes('pikachu')) {
    try {
      const pokemonResponse = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
      if (pokemonResponse.ok) {
        const pokemonData = await pokemonResponse.json();
        const response = `Pikachu is an Electric type Pokemon! Height: ${pokemonData.height} decimetres, Weight: ${pokemonData.weight} hectograms ⚡`;
        conversationHistory.push({ role: 'user', message: userMessage });
        conversationHistory.push({ role: 'assistant', message: response });
        if (conversationHistory.length > MAX_HISTORY * 2) {
          conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
        }
        return response;
      }
    } catch (pokemonError) {
      console.log('Pokemon API failed, falling back');
    }
  }

  // Check for space/spaceX requests
  if (lowerMessage.includes('space') || lowerMessage.includes('spacex') || lowerMessage.includes('rocket')) {
    try {
      const spaceResponse = await fetch('https://api.spacexdata.com/v4/launches/latest');
      if (spaceResponse.ok) {
        const spaceData = await spaceResponse.json();
        const response = `Latest SpaceX launch: ${spaceData.name} - ${spaceData.details?.substring(0, 200)}... 🚀`;
        conversationHistory.push({ role: 'user', message: userMessage });
        conversationHistory.push({ role: 'assistant', message: response });
        if (conversationHistory.length > MAX_HISTORY * 2) {
          conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
        }
        return response;
      }
    } catch (spaceError) {
      console.log('SpaceX API failed, falling back');
    }
  }

  // Check for cocktail recipe requests
  if (lowerMessage.includes('cocktail') || lowerMessage.includes('drink') || lowerMessage.includes('recipe')) {
    try {
      const cocktailResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      if (cocktailResponse.ok) {
        const cocktailData = await cocktailResponse.json();
        if (cocktailData.drinks && cocktailData.drinks[0]) {
          const cocktail = cocktailData.drinks[0];
          const response = `${cocktail.strDrink}: ${cocktail.strInstructions?.substring(0, 200)}... 🍹`;
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: response });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return response;
        }
      }
    } catch (cocktailError) {
      console.log('Cocktail API failed, falling back');
    }
  }

  // Check for meal recipe requests
  if (lowerMessage.includes('meal') || lowerMessage.includes('food recipe') || lowerMessage.includes('cooking')) {
    try {
      const mealResponse = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      if (mealResponse.ok) {
        const mealData = await mealResponse.json();
        if (mealData.meals && mealData.meals[0]) {
          const meal = mealData.meals[0];
          const response = `${meal.strMeal}: ${meal.strInstructions?.substring(0, 200)}... 🍽️`;
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: response });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return response;
        }
      }
    } catch (mealError) {
      console.log('Meal API failed, falling back');
    }
  }

  // Check for movie/TV requests
  if (lowerMessage.includes('movie') || lowerMessage.includes('film') || lowerMessage.includes('tv show') || lowerMessage.includes('cinema')) {
    try {
      const movieResponse = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=demo&language=en-US&page=1');
      if (movieResponse.ok) {
        const movieData = await movieResponse.json();
        if (movieData.results && movieData.results.length > 0) {
          const movie = movieData.results[0];
          const response = `Popular Movie: ${movie.title} - ${movie.overview?.substring(0, 150)}... 🎬`;
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: response });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return response;
        }
      }
    } catch (movieError) {
      console.log('Movie API failed, falling back');
    }
  }

  // Check for book requests
  if (lowerMessage.includes('book') || lowerMessage.includes('novel') || lowerMessage.includes('read')) {
    try {
      const bookResponse = await fetch('https://openlibrary.org/api/books?bibkeys=ISBN:0201558010&format=json&jscmd=data');
      if (bookResponse.ok) {
        const bookData = await bookResponse.json();
        const bookKeys = Object.keys(bookData);
        if (bookKeys.length > 0) {
          const book = bookData[bookKeys[0]];
          const response = `Book Recommendation: ${book.title} by ${book.authors?.[0]?.name || 'Unknown'} 📚`;
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: response });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return response;
        }
      }
    } catch (bookError) {
      console.log('Book API failed, falling back');
    }
  }

  // Check for cryptocurrency requests (with word boundaries to prevent false matches)
  const cryptoKeywords2 = ['crypto', 'bitcoin', 'ethereum'];
  const hasCryptoKeyword2 = cryptoKeywords2.some(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'i');
    return regex.test(lowerMessage);
  });

  if (hasCryptoKeyword2) {
    try {
      const cryptoResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd');
      if (cryptoResponse.ok) {
        const cryptoData = await cryptoResponse.json();
        const prices = Object.entries(cryptoData).map(([coin, data]) => `${coin.toUpperCase()}: $${data.usd}`).join(', ');
        const response = `Crypto Prices: ${prices} 💰`;
        conversationHistory.push({ role: 'user', message: userMessage });
        conversationHistory.push({ role: 'assistant', message: response });
        if (conversationHistory.length > MAX_HISTORY * 2) {
          conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
        }
        return response;
      }
    } catch (cryptoError) {
      console.log('Crypto API failed, falling back');
    }
  }

  // Check for stock market requests
  if (lowerMessage.includes('stock') || lowerMessage.includes('market') || lowerMessage.includes('nasdaq') || lowerMessage.includes('dow jones')) {
    try {
      const stockResponse = await fetch('https://api.marketstack.com/v1/tickers?access_key=demo');
      if (stockResponse.ok) {
        const stockData = await stockResponse.json();
        if (stockData.data && stockData.data.length > 0) {
          const stock = stockData.data[0];
          const response = `Stock Market Info: ${stock.name} (${stock.symbol}) 📈`;
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: response });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return response;
        }
      }
    } catch (stockError) {
      console.log('Stock API failed, falling back');
    }
  }

  // Check for anime requests
  if (lowerMessage.includes('anime') || lowerMessage.includes('manga')) {
    try {
      const animeResponse = await fetch('https://api.jikan.moe/v4/random/anime');
      if (animeResponse.ok) {
        const animeData = await animeResponse.json();
        if (animeData.data) {
          const anime = animeData.data;
          const response = `Anime Recommendation: ${anime.title} - ${anime.synopsis?.substring(0, 150)}... 🎌`;
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: response });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return response;
        }
      }
    } catch (animeError) {
      console.log('Anime API failed, falling back');
    }
  }

  // Check for geography/country requests
  if (lowerMessage.includes('country') || lowerMessage.includes('capital') || lowerMessage.includes('geography')) {
    try {
      const countryResponse = await fetch('https://restcountries.com/v3.1/random');
      if (countryResponse.ok) {
        const countryData = await countryResponse.json();
        if (countryData && countryData[0]) {
          const country = countryData[0];
          const response = `Random Country: ${country.name.common} - Capital: ${country.capital?.[0] || 'N/A'}, Population: ${country.population?.toLocaleString() || 'N/A'} 🌍`;
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: response });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return response;
        }
      }
    } catch (countryError) {
      console.log('Country API failed, falling back');
    }
  }

  // Check for sports requests
  if (lowerMessage.includes('sports') || lowerMessage.includes('football') || lowerMessage.includes('cricket') || lowerMessage.includes('basketball')) {
    try {
      const sportsResponse = await fetch('https://www.thesportsdb.com/api/v1/json/3/eventspastleague.php?id=4328');
      if (sportsResponse.ok) {
        const sportsData = await sportsResponse.json();
        if (sportsData.events && sportsData.events.length > 0) {
          const event = sportsData.events[0];
          const response = `Sports Update: ${event.strEvent} - ${event.strLeague} 🏆`;
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: response });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return response;
        }
      }
    } catch (sportsError) {
      console.log('Sports API failed, falling back');
    }
  }

  // Check for tech news requests
  if (lowerMessage.includes('tech news') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
    try {
      const techResponse = await fetch('https://newsapi.org/v2/top-headlines?category=technology&apiKey=demo');
      if (techResponse.ok) {
        const techData = await techResponse.json();
        if (techData.articles && techData.articles.length > 0) {
          const article = techData.articles[0];
          const response = `Tech News: ${article.title?.substring(0, 150)}... 💻`;
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: response });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return response;
        }
      }
    } catch (techError) {
      console.log('Tech news API failed, falling back');
    }
  }

  // Check if message is Hinglish - use translation API for better responses
  const hinglishIndicators = ['kya', 'hai', 'ho', 'kaise', 'namaste', 'bhai', 'dil', 'dukh', 'khush', 'ka', 'ki', 'ko', 'padhai', 'padh', 'khana', 'shukriya', 'dhanyawad', 'alvida', 'main', 'tum', 'tumhare', 'mujhe', 'karna', 'batao', 'sunna', 'chahta', 'chahti', 'raha', 'rahi', 'hain', 'theek', 'achha', 'badhiya', 'scene', 'khabar', 'mehnat', 'phal', 'viswas', 'focus', 'lag', 'jaao', 'zaroori', 'favorite', 'recommend', 'khaana', 'mubarak', 'badhai', 'kahan', 'kab', 'kyun', 'kiske', 'kiska', 'kisne', 'kisliye', 'kaise', 'kabhi', 'kadhi', 'sab', 'sabse', 'sabhi', 'bilkul', 'bilkul', 'zaroor', 'zaroor', 'sahi', 'galat', 'accha', 'bura', 'pyaar', 'dost', 'dosti', 'gussa', 'naraz', 'khushi', 'gham', 'umeed', 'niraash', 'safal', 'asafal', 'jeet', 'haar', 'zindagi', 'maut', 'duniya', 'samaj', 'parivaar', 'rishte', 'pyaar', 'ishq', 'mohabbat', 'yaad', 'bhool', 'chhod', 'rakhna', 'lena', 'dena', 'aana', 'jana', 'rehna', 'jina', 'marna', 'sochna', 'samajhna', 'seekhna', 'sikhana', 'kaam', 'kaaj', 'business', 'job', 'career', 'padhai', 'school', 'college', 'university', 'degree', 'exam', 'result', 'marks', 'grade', 'pass', 'fail', 'success', 'failure', 'problem', 'solution', 'jawaab', 'sawaal', 'answer', 'question', 'help', 'madad', 'support', 'care', 'love', 'hate', 'like', 'dislike', 'happy', 'sad', 'angry', 'calm', 'peace', 'war', 'fight', 'friend', 'enemy', 'good', 'bad', 'better', 'worse', 'best', 'worst', 'high', 'low', 'up', 'down', 'left', 'right', 'front', 'back', 'top', 'bottom', 'inside', 'outside', 'yes', 'no', 'maybe', 'perhaps', 'probably', 'definitely', 'certainly', 'surely', 'actually', 'really', 'truly', 'honestly', 'frankly', 'seriously', 'joking', 'funny', 'serious', 'important', 'urgent', 'emergency', 'crisis', 'normal', 'regular', 'usual', 'common', 'rare', 'unique', 'special', 'different', 'same', 'similar', 'equal', 'unequal', 'more', 'less', 'much', 'many', 'few', 'little', 'big', 'small', 'large', 'tiny', 'huge', 'giant', 'short', 'long', 'tall', 'wide', 'narrow', 'thick', 'thin', 'fat', 'skinny', 'heavy', 'light', 'dark', 'bright', 'color', 'colour', 'black', 'white', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'grey', 'silver', 'gold', 'metal', 'wood', 'plastic', 'glass', 'paper', 'cloth', 'fabric', 'material', 'substance', 'matter', 'energy', 'power', 'force', 'strength', 'weakness', 'health', 'disease', 'sickness', 'illness', 'cure', 'medicine', 'doctor', 'hospital', 'clinic', 'nurse', 'patient', 'treatment', 'therapy', 'recovery', 'healing', 'pain', 'relief', 'comfort', 'suffering', 'misery', 'joy', 'pleasure', 'delight', 'satisfaction', 'contentment', 'happiness', 'bliss', 'ecstasy', 'excitement', 'thrill', 'adventure', 'journey', 'trip', 'travel', 'vacation', 'holiday', 'break', 'rest', 'relaxation', 'leisure', 'entertainment', 'fun', 'enjoyment', 'amusement', 'recreation', 'hobby', 'interest', 'passion', 'obsession', 'addiction', 'habit', 'routine', 'schedule', 'plan', 'goal', 'target', 'objective', 'aim', 'purpose', 'meaning', 'significance', 'value', 'worth', 'price', 'cost', 'expense', 'money', 'cash', 'currency', 'wealth', 'rich', 'poor', 'middle', 'class', 'status', 'position', 'rank', 'level', 'grade', 'score', 'points', 'marks', 'result', 'outcome', 'consequence', 'effect', 'impact', 'influence', 'power', 'authority', 'control', 'command', 'order', 'rule', 'law', 'regulation', 'policy', 'system', 'structure', 'organization', 'institution', 'company', 'business', 'firm', 'enterprise', 'corporation', 'industry', 'market', 'economy', 'finance', 'banking', 'investment', 'savings', 'debt', 'loan', 'credit', 'debit', 'account', 'balance', 'transaction', 'exchange', 'trade', 'commerce', 'business', 'deal', 'contract', 'agreement', 'promise', 'commitment', 'obligation', 'duty', 'responsibility', 'role', 'function', 'task', 'job', 'work', 'employment', 'career', 'profession', 'occupation', 'vocation', 'calling', 'mission', 'vision', 'dream', 'hope', 'wish', 'desire', 'want', 'need', 'requirement', 'necessity', 'essential', 'important', 'vital', 'critical', 'crucial', 'key', 'main', 'major', 'minor', 'secondary', 'primary', 'principal', 'chief', 'head', 'leader', 'boss', 'manager', 'supervisor', 'director', 'executive', 'officer', 'official', 'authority', 'government', 'state', 'nation', 'country', 'region', 'area', 'zone', 'territory', 'land', 'territory', 'soil', 'ground', 'earth', 'world', 'planet', 'universe', 'space', 'sky', 'heaven', 'hell', 'god', 'religion', 'faith', 'belief', 'spirit', 'soul', 'mind', 'brain', 'heart', 'body', 'life', 'death', 'birth', 'growth', 'development', 'progress', 'advancement', 'improvement', 'enhancement', 'upgrade', 'update', 'change', 'modification', 'alteration', 'adjustment', 'adaptation', 'evolution', 'revolution', 'transformation', 'conversion', 'transition', 'shift', 'move', 'movement', 'motion', 'action', 'activity', 'operation', 'function', 'process', 'procedure', 'method', 'technique', 'strategy', 'tactic', 'approach', 'way', 'manner', 'style', 'form', 'shape', 'size', 'dimension', 'measurement', 'quantity', 'amount', 'number', 'figure', 'digit', 'statistic', 'data', 'information', 'knowledge', 'wisdom', 'intelligence', 'smart', 'clever', 'wise', 'foolish', 'stupid', 'dumb', 'silly', 'funny', 'serious', 'important', 'trivial', 'significant', 'insignificant', 'relevant', 'irrelevant', 'useful', 'useless', 'helpful', 'harmful', 'beneficial', 'detrimental', 'positive', 'negative', 'advantage', 'disadvantage', 'pro', 'con', 'benefit', 'cost', 'gain', 'loss', 'profit', 'expense', 'income', 'revenue', 'earnings', 'salary', 'wage', 'pay', 'compensation', 'reward', 'punishment', 'prize', 'penalty', 'award', 'honor', 'recognition', 'fame', 'glory', 'shame', 'disgrace', 'respect', 'disrespect', 'honor', 'dishonor', 'dignity', 'humiliation', 'pride', 'humility', 'modesty', 'arrogance', 'confidence', 'doubt', 'certainty', 'uncertainty', 'belief', 'disbelief', 'trust', 'distrust', 'faith', 'skepticism', 'optimism', 'pessimism', 'hope', 'despair', 'courage', 'fear', 'bravery', 'cowardice', 'strength', 'weakness', 'power', 'helplessness', 'control', 'chaos', 'order', 'disorder', 'structure', 'anarchy', 'freedom', 'slavery', 'liberty', 'oppression', 'justice', 'injustice', 'fairness', 'unfairness', 'equality', 'inequality', 'rights', 'wrongs', 'truth', 'lie', 'honesty', 'dishonesty', 'integrity', 'corruption', 'virtue', 'vice', 'good', 'evil', 'right', 'wrong', 'moral', 'immoral', 'ethical', 'unethical', 'legal', 'illegal', 'legitimate', 'illegitimate', 'valid', 'invalid', 'authentic', 'fake', 'genuine', 'artificial', 'natural', 'synthetic', 'organic', 'inorganic', 'living', 'dead', 'alive', 'lifeless', 'animate', 'inanimate', 'active', 'inactive', 'passive', 'dynamic', 'static', 'changing', 'constant', 'variable', 'fixed', 'flexible', 'rigid', 'soft', 'hard', 'tough', 'gentle', 'rough', 'smooth', 'sharp', 'blunt', 'keen', 'dull', 'bright', 'dim', 'clear', 'cloudy', 'sunny', 'rainy', 'windy', 'stormy', 'calm', 'peaceful', 'noisy', 'quiet', 'loud', 'silent', 'sound', 'noise', 'music', 'song', 'melody', 'rhythm', 'beat', 'tune', 'harmony', 'disharmony', 'concord', 'discord', 'agreement', 'disagreement', 'consensus', 'conflict', 'compromise', 'dispute', 'resolution', 'solution', 'answer', 'question', 'problem', 'issue', 'matter', 'topic', 'subject', 'theme', 'idea', 'concept', 'notion', 'thought', 'belief', 'opinion', 'view', 'perspective', 'standpoint', 'angle', 'aspect', 'facet', 'side', 'part', 'portion', 'section', 'segment', 'piece', 'fragment', 'bit', 'chunk', 'slice', 'share', 'portion', 'quota', 'allotment', 'allocation', 'distribution', 'assignment', 'allocation', 'dispersal', 'spread', 'diffusion', 'expansion', 'extension', 'growth', 'increase', 'decrease', 'reduction', 'decline', 'fall', 'rise', 'drop', 'jump', 'leap', 'bound', 'step', 'pace', 'speed', 'rate', 'tempo', 'rhythm', 'cadence', 'flow', 'current', 'stream', 'tide', 'wave', 'ripple', 'surge', 'flood', 'drought', 'dry', 'wet', 'moist', 'damp', 'humid', 'arid', 'barren', 'fertile', 'rich', 'poor', 'abundant', 'scarce', 'plentiful', 'rare', 'common', 'unusual', 'normal', 'strange', 'weird', 'odd', 'peculiar', 'bizarre', 'curious', 'interesting', 'boring', 'dull', 'exciting', 'thrilling', 'amazing', 'awesome', 'fantastic', 'wonderful', 'terrible', 'horrible', 'awful', 'disgusting', 'repulsive', 'attractive', 'repellent', 'beautiful', 'ugly', 'pretty', 'handsome', 'cute', 'lovely', 'charming', 'delightful', 'pleasant', 'unpleasant', 'agreeable', 'disagreeable', 'comfortable', 'uncomfortable', 'convenient', 'inconvenient', 'easy', 'difficult', 'simple', 'complex', 'complicated', 'sophisticated', 'basic', 'advanced', 'elementary', 'fundamental', 'essential', 'primary', 'secondary', 'tertiary', 'final', 'initial', 'first', 'last', 'beginning', 'end', 'start', 'finish', 'middle', 'center', 'edge', 'border', 'boundary', 'limit', 'restriction', 'constraint', 'freedom', 'liberty', 'independence', 'dependence', 'reliance', 'trust', 'distrust', 'faith', 'skepticism', 'belief', 'disbelief', 'hope', 'despair', 'optimism', 'pessimism', 'confidence', 'doubt', 'certainty', 'uncertainty'];
  const isHinglishMessage = hinglishIndicators.some(word => lowerMessage.includes(word));

  if (isHinglishMessage) {
    // Check for Hinglish joke requests with online source
    if (lowerMessage.includes('joke') || lowerMessage.includes('mazaak') || lowerMessage.includes('hasi')) {
      try {
        // Use JokeAPI with Hindi jokes if available
        const jokeResponse = await fetch('https://v2.jokeapi.dev/joke/Any?lang=hi');
        if (jokeResponse.ok) {
          const jokeData = await jokeResponse.json();
          if (jokeData.joke) {
            const response = jokeData.joke + " 😂";
            conversationHistory.push({ role: 'user', message: userMessage });
            conversationHistory.push({ role: 'assistant', message: response });
            if (conversationHistory.length > MAX_HISTORY * 2) {
              conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
            }
            return response;
          } else if (jokeData.setup && jokeData.delivery) {
            const response = jokeData.setup + " ... " + jokeData.delivery + " 😂";
            conversationHistory.push({ role: 'user', message: userMessage });
            conversationHistory.push({ role: 'assistant', message: response });
            if (conversationHistory.length > MAX_HISTORY * 2) {
              conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
            }
            return response;
          }
        }
      } catch (hindiJokeError) {
        console.log('Hindi joke API failed, using fallback');
      }
    }

    // Check for Hinglish quote requests with online source
    if (lowerMessage.includes('quote') || lowerMessage.includes('anmol vachan') || lowerMessage.includes('kahawat')) {
      try {
        // Translate English quote to Hindi
        const quoteResponse = await fetch('https://api.quotable.io/random?tags=inspirational,motivational');
        if (quoteResponse.ok) {
          const quoteData = await quoteResponse.json();
          const englishQuote = `"${quoteData.content}" - ${quoteData.author}`;
          
          // Translate to Hindi
          const translateResponse = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(englishQuote)}&langpair=en|hi`);
          if (translateResponse.ok) {
            const translateData = await translateResponse.json();
            if (translateData.responseData && translateData.responseData.translatedText) {
              const hindiQuote = translateData.responseData.translatedText + " ✨";
              conversationHistory.push({ role: 'user', message: userMessage });
              conversationHistory.push({ role: 'assistant', message: hindiQuote });
              if (conversationHistory.length > MAX_HISTORY * 2) {
                conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
              }
              return hindiQuote;
            }
          }
        }
      } catch (hindiQuoteError) {
        console.log('Hindi quote API failed, using fallback');
      }
    }

    // Check for shayari/poetry requests (Rekhta-style)
    if (lowerMessage.includes('shayari') || lowerMessage.includes('poetry') || lowerMessage.includes('poem') || lowerMessage.includes('sher') || lowerMessage.includes('kavita')) {
      try {
        // Try to get shayari from PoetryDB API first
        try {
          const poetryResponse = await fetch('https://poetrydb.org/random,linecount=2');
          if (poetryResponse.ok) {
            const poetryData = await poetryResponse.json();
            if (poetryData && poetryData[0]) {
              const poem = poetryData[0];
              const poemText = poem.lines.join('\n');
              // Translate to Hindi/Roman Urdu
              const translateResponse = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(poemText)}&langpair=en|hi`);
              if (translateResponse.ok) {
                const translateData = await translateResponse.json();
                if (translateData.responseData && translateData.responseData.translatedText) {
                  const hindiPoem = `${translateData.responseData.translatedText}\n\n- ${poem.author} (Translated) 🌹`;
                  conversationHistory.push({ role: 'user', message: userMessage });
                  conversationHistory.push({ role: 'assistant', message: hindiPoem });
                  if (conversationHistory.length > MAX_HISTORY * 2) {
                    conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
                  }
                  return hindiPoem;
                }
              }
            }
          }
        } catch (poetryError) {
          console.log('Poetry API failed, using local collection');
        }

        // Use a collection of famous shayari in Roman Urdu/Hinglish
        const shayariCollection = [
          {
            text: "Mohabbat mein humne har dard seh liya,\nPhir bhi tujhe apna na kar sakenge.",
            poet: "Unknown",
            type: "Roman Urdu"
          },
          {
            text: "Dil ke dard se aankhon tak aa gaya,\nPhir bhi tujhse juda na kar sakenge.",
            poet: "Faiz Ahmed Faiz",
            type: "Roman Urdu"
          },
          {
            text: "Tere sheher se guzarti hoon,\nHar gali mein teri yaad satati hai.",
            poet: "Ahmed Faraz",
            type: "Roman Urdu"
          },
          {
            text: "Zindagi mein kabhi kisi ko itna mat pyaar karo,\nKe uski kami se mar jaao.",
            poet: "Unknown",
            type: "Hinglish"
          },
          {
            text: "Mohabbat ek aisi hai dawa hai,\nJo dard se bhi pyaari lagti hai.",
            poet: "Unknown",
            type: "Hinglish"
          },
          {
            text: "Tujhse juda hokar bhi,\nTujhse hi juda hain hum.",
            poet: "Unknown",
            type: "Roman Urdu"
          },
          {
            text: "Dil ko tumhari yaad satati hai,\nHar waqt, har jagah, har pal.",
            poet: "Unknown",
            type: "Hinglish"
          },
          {
            text: "Woh kahte hain mohabbat mein sab kuch hai,\nPar humne sirf dard dekha hai.",
            poet: "Ghalib",
            type: "Roman Urdu"
          },
          {
            text: "Tere bina zindagi adhuri hai,\nTere saath puri hai.",
            poet: "Unknown",
            type: "Hinglish"
          },
          {
            text: "Ishq mein log badal jaate hain,\nPar hum to wahi rahe.",
            poet: "Unknown",
            type: "Hinglish"
          },
          {
            text: "Dil ki baat dil mein hi reh gayi,\nKeh nahi paaye.",
            poet: "Unknown",
            type: "Hinglish"
          },
          {
            text: "Woh sham jo guzri teri baatein sunke,\nWoh raat jo guzari teri yaad mein.",
            poet: "Unknown",
            type: "Roman Urdu"
          },
          {
            text: "Tujhe paane ke liye kuch bhi karunga,\nPar tujhe kho na dunga kabhi.",
            poet: "Unknown",
            type: "Hinglish"
          },
          {
            text: "Mohabbat ka matlab nahi samjha,\nJab tak khud se pyaar na kiya.",
            poet: "Unknown",
            type: "Hinglish"
          },
          {
            text: "Teri kami mehsoos hoti hai,\nHar pal, har waqt.",
            poet: "Unknown",
            type: "Hinglish"
          },
          {
            text: "Hazaron khwahishen aisi ke har khwahish pe dam nikle,\nBahut nikle mera arz lekin phir bhi kam nikle.",
            poet: "Mirza Ghalib",
            type: "Roman Urdu"
          },
          {
            text: "Tum mere paas hote ho goya,\nJab koi doosra nahi hota.",
            poet: "Faiz Ahmed Faiz",
            type: "Roman Urdu"
          },
          {
            text: "Mujh se pehle si mohabbat mere mehboob na maang,\nMujh se pehle si wafa mere mehboob na maang.",
            poet: "Faiz Ahmed Faiz",
            type: "Roman Urdu"
          },
          {
            text: "Ranjish hi sahi dil hi dukhane ke liye aa,\nAa phir se mujhe chhedne ke liye aa.",
            poet: "Ahmed Faraz",
            type: "Roman Urdu"
          },
          {
            text: "Kabhi kabhi mere dil mein khayal aata hai,\nKe zara aake baith ke tumse baat ki jaaye.",
            poet: "Unknown",
            type: "Hinglish"
          },
          {
            text: "Dil ke dard se aankhon tak aa gaya,\nPhir bhi tujhse juda na kar sakenge.",
            poet: "Unknown",
            type: "Hinglish"
          }
        ];

        const randomShayari = shayariCollection[Math.floor(Math.random() * shayariCollection.length)];
        const response = `${randomShayari.text}\n\n- ${randomShayari.poet} (${randomShayari.type}) 🌹`;
        
        conversationHistory.push({ role: 'user', message: userMessage });
        conversationHistory.push({ role: 'assistant', message: response });
        if (conversationHistory.length > MAX_HISTORY * 2) {
          conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
        }
        return response;
      } catch (shayariError) {
        console.log('Shayari collection failed, falling back');
      }
    }

    // Try to get AI response in Hinglish using translation
    try {
      // First get English response from Hugging Face
      const hfResponse = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer hf_demo_token'
        },
        body: JSON.stringify({
          inputs: userMessage,
          parameters: {
            max_length: 100,
            temperature: 0.7
          }
        })
      });

      if (hfResponse.ok) {
        const hfData = await hfResponse.json();
        if (hfData && hfData[0] && hfData[0].generated_text) {
          let englishResponse = hfData[0].generated_text.replace(userMessage, '').trim();
          
          // Try to translate to Hindi using MyMemory translation API (free, no API key)
          try {
            const translateResponse = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(englishResponse)}&langpair=en|hi`);
            if (translateResponse.ok) {
              const translateData = await translateResponse.json();
              if (translateData.responseData && translateData.responseData.translatedText) {
                const hindiResponse = translateData.responseData.translatedText;
                conversationHistory.push({ role: 'user', message: userMessage });
                conversationHistory.push({ role: 'assistant', message: hindiResponse });
                if (conversationHistory.length > MAX_HISTORY * 2) {
                  conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
                }
                return hindiResponse;
              }
            }
          } catch (translateError) {
            console.log('Translation failed, using English response');
          }
          
          // Fallback to English response if translation fails
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: englishResponse });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return englishResponse;
        }
      }
    } catch (hfError) {
      console.log('Hugging Face API failed for Hinglish, falling back');
    }
  }

  // Check for search/Google-like queries
  if (lowerMessage.includes('search') || lowerMessage.includes('google') || lowerMessage.includes('look up') || lowerMessage.includes('find information')) {
    try {
      const searchQuery = userMessage.replace(/^(search|google|look up|find information)\s+(for|about)?\s*/i, '');
      if (searchQuery.length > 2) {
        const searchResponse = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(searchQuery)}&format=json`);
        if (searchResponse.ok) {
          const searchData = await searchResponse.json();
          if (searchData.AbstractText) {
            const response = `${searchData.AbstractText.substring(0, 300)}... 🔍`;
            conversationHistory.push({ role: 'user', message: userMessage });
            conversationHistory.push({ role: 'assistant', message: response });
            if (conversationHistory.length > MAX_HISTORY * 2) {
              conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
            }
            return response;
          } else if (searchData.RelatedTopics && searchData.RelatedTopics[0] && searchData.RelatedTopics[0].Text) {
            const response = searchData.RelatedTopics[0].Text.replace(/<[^>]*>/g, '').substring(0, 300) + "... 🔍";
            conversationHistory.push({ role: 'user', message: userMessage });
            conversationHistory.push({ role: 'assistant', message: response });
            if (conversationHistory.length > MAX_HISTORY * 2) {
              conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
            }
            return response;
          }
        }
      }
    } catch (searchError) {
      console.log('Search API failed, falling back');
    }
  }

  // Check if it's a factual question (contains who, what, where, when, why, how)
  const questionWords = ['who', 'what', 'where', 'when', 'why', 'how', 'which', 'whose', 'whom'];
  const isQuestion = questionWords.some(word => lowerMessage.includes(word));

  if (isQuestion) {
    // Check if it's Hinglish question - use Hindi Wikipedia
    const hinglishIndicators = ['kya', 'kaun', 'kahan', 'kab', 'kyun', 'kaise'];
    const isHinglishQuestion = hinglishIndicators.some(word => lowerMessage.includes(word));

    if (isHinglishQuestion) {
      try {
        const hindiWikiResponse = await fetch(
          `https://hi.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(userMessage.replace(/^(kya|kaun|kahan|kab|kyun|kaise)\s+/i, ''))}`
        );

        if (hindiWikiResponse.ok) {
          const hindiWikiData = await hindiWikiResponse.json();
          if (hindiWikiData.extract && hindiWikiData.extract.length > 50) {
            const response = hindiWikiData.extract.substring(0, 300) + "... 📚";
            conversationHistory.push({ role: 'user', message: userMessage });
            conversationHistory.push({ role: 'assistant', message: response });
            if (conversationHistory.length > MAX_HISTORY * 2) {
              conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
            }
            return response;
          }
        }
      } catch (hindiWikiError) {
        console.log('Hindi Wikipedia search failed, trying English');
      }
    }

    // Try to get answer from English Wikipedia
    try {
      const wikiResponse = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(userMessage.replace(/^(who|what|where|when|why|how|which|whose|whom)\s+(is|are|was|were|the|a|an)?\s*/i, ''))}`
      );

      if (wikiResponse.ok) {
        const wikiData = await wikiResponse.json();
        if (wikiData.extract && wikiData.extract.length > 50) {
          const response = wikiData.extract.substring(0, 300) + "... 📚";
          // Add to conversation history
          conversationHistory.push({ role: 'user', message: userMessage });
          conversationHistory.push({ role: 'assistant', message: response });
          if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
          }
          return response;
        }
      }
    } catch (wikiError) {
      console.log('Wikipedia search failed, falling back to AI');
    }
  }

  // Use free conversational AI APIs
  try {
    console.log('Attempting conversational AI...');

    // Try free APIs that don't require authentication
    const chatApis = [
      // Pollinations AI (OpenAI-compatible, no auth needed) - all available models
      {
        url: 'https://text.pollinations.ai/openai',
        name: 'PollinationsAI (openai-fast)',
        type: 'pollinations',
        model: 'openai-fast'
      },
      {
        url: 'https://text.pollinations.ai/openai',
        name: 'PollinationsAI (openai)',
        type: 'pollinations',
        model: 'openai'
      },
      {
        url: 'https://text.pollinations.ai/openai',
        name: 'PollinationsAI (gpt-oss)',
        type: 'pollinations',
        model: 'gpt-oss'
      },
      {
        url: 'https://text.pollinations.ai/openai',
        name: 'PollinationsAI (gpt-oss-20b)',
        type: 'pollinations',
        model: 'gpt-oss-20b'
      },
      {
        url: 'https://text.pollinations.ai/openai',
        name: 'PollinationsAI (ovh-reasoning)',
        type: 'pollinations',
        model: 'ovh-reasoning'
      },
      // Hugging Face (Free, no auth needed for inference API)
      {
        url: 'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
        name: 'DialoGPT',
        type: 'huggingface'
      },
      {
        url: 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill',
        name: 'BlenderBot',
        type: 'huggingface'
      },
      {
        url: 'https://api-inference.huggingface.co/models/gpt2',
        name: 'GPT-2',
        type: 'huggingface'
      }
    ];

    let aiResponse = '';

    for (const api of chatApis) {
      try {
        console.log(`Trying ${api.name}...`);

        let response, data;

        if (api.type === 'pollinations') {
          // Pollinations AI OpenAI-compatible endpoint
          response = await fetch(api.url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: api.model || 'openai-fast',
              messages: [
                { role: 'user', content: userMessage }
              ],
              temperature: 0.7,
              max_tokens: 200,
              stream: false
            }),
          });

          if (response.ok) {
            data = await response.json();
            console.log(`${api.name} response:`, data);

            let generatedText = '';
            if (data.choices && data.choices.length > 0) {
              generatedText = data.choices[0].message?.content || '';
            }

            // Clean up
            generatedText = generatedText.trim();

            if (generatedText && generatedText.length > 2) {
              aiResponse = generatedText.substring(0, 200);
              console.log(`Successfully got response from ${api.name}`);
              break;
            }
          } else {
            console.log(`${api.name} returned status: ${response.status}`);
          }
        } else if (api.type === 'huggingface') {
          response = await fetch(api.url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              inputs: userMessage,
              parameters: {
                max_length: 100,
                temperature: 0.7,
                top_p: 0.95
              }
            }),
          });

          if (response.ok) {
            data = await response.json();
            console.log(`${api.name} response:`, data);

            let generatedText = '';
            if (Array.isArray(data) && data.length > 0) {
              generatedText = data[0].generated_text || '';
            } else if (data.generated_text) {
              generatedText = data.generated_text;
            } else if (data.answer) {
              generatedText = data.answer;
            } else if (data.response) {
              generatedText = data.response;
            }

            // Clean up
            generatedText = generatedText
              .replace(userMessage, '')
              .replace(/^(user:|assistant:|bot:|human:)\s*/gi, '')
              .trim();

            if (generatedText && generatedText.length > 2) {
              aiResponse = generatedText.substring(0, 200);
              console.log(`Successfully got response from ${api.name}`);
              break;
            }
          } else {
            console.log(`${api.name} returned status: ${response.status}`);
          }
        } else if (api.type === 'simple') {
          // Simple GET request for free APIs
          response = await fetch(`${api.url}${encodeURIComponent(userMessage)}`);
          if (response.ok) {
            data = await response.text();
            console.log(`${api.name} response:`, data);
            if (data && data.length > 2) {
              aiResponse = data.substring(0, 200);
              console.log(`Successfully got response from ${api.name}`);
              break;
            }
          } else {
            console.log(`${api.name} returned status: ${response.status}`);
          }
        }
      } catch (apiError) {
        console.log(`${api.name} error:`, apiError.message);
        continue;
      }
    }

    // If no AI worked, use local response
    if (!aiResponse) {
      console.log('All AI APIs failed, using local response');
      const fallback = getLocalResponse(userMessage);
      conversationHistory.push({ role: 'user', message: userMessage });
      conversationHistory.push({ role: 'assistant', message: fallback });
      if (conversationHistory.length > MAX_HISTORY * 2) {
        conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
      }
      return fallback;
    }

    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: aiResponse });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }

    return aiResponse;
  } catch (error) {
    console.error('Error in conversational AI:', error);
    const fallback = getLocalResponse(userMessage);
    conversationHistory.push({ role: 'user', message: userMessage });
    conversationHistory.push({ role: 'assistant', message: fallback });
    if (conversationHistory.length > MAX_HISTORY * 2) {
      conversationHistory = conversationHistory.slice(-MAX_HISTORY * 2);
    }
    return fallback;
  }
}

// Local fallback response system
function getLocalResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();

  // Knowledge-based responses - Expanded for more human-like conversation
  const knowledgeResponses = {
    // Greetings
    'hello': [
      "Hey there! How's your day going? 🤍",
      "Hi! I'm so glad you're here! What's up? 🤍",
      "Hello! It's always nice to hear from you! How are you? 🤍",
      "Hey! What have you been up to lately? 🤍",
      "Hi there! What's on your mind today? 🤍",
      "Hello! Good to see you! How can I help? 🤍",
      "Hey! How have you been? 🤍",
      "Hi! I was hoping to chat with you! 🤍",
      "Hey! I missed talking to you! What's new? 🤍",
      "Hello! It's been a while! How are things? 🤍"
    ],
    'hi': [
      "Hey there! How's your day going? 🤍",
      "Hi! I'm so glad you're here! What's up? 🤍",
      "Hello! It's always nice to hear from you! How are you? 🤍",
      "Hey! What have you been up to lately? 🤍",
      "Hi there! What's on your mind today? 🤍",
      "Hello! Good to see you! How can I help? 🤍",
      "Hey! How have you been? 🤍",
      "Hi! I was hoping to chat with you! 🤍"
    ],
    'how are you': [
      "I'm doing great, thanks for asking! How about you? 🤍",
      "I'm wonderful! Hope you're having a good day too! 🤍",
      "I'm good! What about you? Tell me how you're doing! 🤍",
      "Feeling great! What's on your mind today? 🤍",
      "I'm fantastic! Thanks for checking in! You? 🤍",
      "Doing well! What's new with you? 🤍",
      "Pretty good! How's everything going with you? 🤍",
      "I'm great! Excited to chat! How are you? 🤍"
    ],
    // Hinglish greetings
    'kya haal': [
      "Main bilkul theek hoon! Tum sunao kaise ho? 🤍",
      "Achha hoon! Tum kaise ho? 🤍",
      "Main badhiya hoon! Tumhari kya khabar? 🤍",
      "Sab theek! Tum kya kar rahe ho? 🤍",
      "Bahut accha! Tum kaise ho? 🤍",
      "Theek thak hoon! Tumhari kya halat? 🤍",
      "Achha hai! Tum kya kar rahe ho? 🤍"
    ],
    'kaise ho': [
      "Main bilkul theek hoon! Tum sunao kaise ho? 🤍",
      "Achha hoon! Tum kaise ho? 🤍",
      "Main badhiya hoon! Tumhari kya khabar? 🤍",
      "Sab theek! Tum kya kar rahe ho? 🤍",
      "Bahut accha! Tum kaise ho? 🤍",
      "Theek thak hoon! Tumhari kya halat? 🤍",
      "Achha hai! Tum kya kar rahe ho? 🤍"
    ],
    'namaste': [
      "Namaste! Kaise ho aap? 🤍",
      "Namaste! Kya haal hai? 🤍",
      "Namaste! Kya kar rahe ho? 🤍",
      "Namaste! Kya chal raha hai? 🤍",
      "Namaste! Kya scene hai? 🤍",
      "Namaste! Sab theek? 🤍"
    ],
    'hello bhai': [
      "Hello bhai! Kya haal hai? 🤍",
      "Hi bhai! Kya scene hai? 🤍",
      "Hey bhai! Kya chal raha hai? 🤍",
      "Namaste bhai! Kaisa hai tu? 🤍",
      "Hello bhai! Kya kar rahe ho? 🤍",
      "Hey bhai! Sab theek? 🤍"
    ],
    'love': [
      "Love is such a beautiful thing, isn't it? 🤍",
      "Love makes everything better! What makes you feel loved? 🤍",
      "That's so sweet! Love is the best feeling in the world 🤍",
      "Aww! Love is amazing! Tell me more about what you love 🤍",
      "Love is wonderful! Who or what do you love most? 🤍",
      "That's lovely! Love stories are the best! 🤍",
      "Love is such a powerful emotion! Tell me about it 🤍"
    ],
    // Hinglish emotions
    'dil': [
      "Dil se baat kar! Kya chal raha hai? 🤍",
      "Dil ki baat sunne ke liye hoon yahan! 🤍",
      "Dil se dil tak! Kya kehna chahte ho? 🤍",
      "Dil ki baat batao! 🤍",
      "Dil se baat ho toh achha lagta hai! 🤍",
      "Dil ki baat sunna pasand hai! 🤍"
    ],
    'sad': [
      "I'm here for you, always. Want to talk about what's bothering you? 🤍",
      "Sending you the biggest hug! Whatever it is, we'll get through it together 🤍",
      "I'm so sorry you're feeling this way. I'm here to listen whenever you need 🤍",
      "That sounds tough. Remember, it's okay to feel sad sometimes. I'm here for you 🤍",
      "I'm here for you. What's making you feel sad? 🤍",
      "Sending you love and support! Talk to me about it 🤍",
      "Whatever it is, we'll handle it together! 🤍"
    ],
    'dukh': [
      "Dukh ho toh batao! Main sun rahi hoon 🤍",
      "Mat socho, main hoon na tumhare saath! 🤍",
      "Dukh share kar do, main samajhungi! 🤍",
      "Sab theek ho jayega, bas himmat rakhna! 🤍",
      "Dukh baat kar do! Main hoon yahan 🤍",
      "Sab theek hoga! Dar mat karo! 🤍"
    ],
    'happy': [
      "That makes me so happy too! Your happiness is contagious! 🤍",
      "Yay! I love seeing you happy! What's making you feel this good? 🤍",
      "That's wonderful! Keep that positive energy going! 🤍",
      "I'm smiling just knowing you're happy! Tell me what's going on! 🤍",
      "So glad to hear that! What's making you happy? 🤍",
      "That's amazing! Your happiness brightens my day! 🤍"
    ],
    'khush': [
      "Khush hone ke liye bahut zaruri hai! Tum kya kar rahe ho? 🤍",
      "Khushi baat baat pe aati hai! Kya scene hai? 🤍",
      "Bahut khush hoon tumhe dekh kar! 🤍",
      "Khush raho hamesha! 🤍",
      "Khushi dekh kar accha lagta hai! Kya hua? 🤍",
      "Bahut accha! Khushi mein hi rehna! 🤍"
    ],
    'bored': [
      "Bored? Let's fix that! What do you usually do for fun? 🤍",
      "I've got some ideas! Want to chat about something interesting? 🤍",
      "Let's play a game! Or tell me something cool about yourself! 🤍",
      "Boredom is the worst! What are you in the mood for? 🤍"
    ],
    'tired': [
      "You should definitely get some rest! Take care of yourself 🤍",
      "Rest is so important! Don't push yourself too hard 🤍",
      "Aww, you poor thing! Go get some sleep and feel better soon 🤍",
      "Tired days happen. Make sure to take care of yourself! 🤍"
    ],
    'design': [
      "Designing is amazing! Your creativity is going to take you far! Keep pushing, you're doing amazing! 🤍",
      "Your artistic skills are incredible! Your hard work will pay off! 🤍",
      "I believe in you! Designing is creative work but you're so talented! 🤍",
      "Stay focused! You're going to create beautiful things! What are you designing today? 🤍"
    ],
    // Hinglish art/design
    'art': [
      "Art mein lag jaao! Sab theek ho jayega! 🤍",
      "Tumhara talent hai! Mehnat ka phal milega! 🤍",
      "Main viswas karti hoon! Art mushkil hai par tum talented ho! 🤍",
      "Focus rakhna! Tum kar doge! Kya bana rahe ho? 🤍",
      "Art bahut zaroori hai! Tum kar sakte ho! 🤍",
      "Mehnat ka phal zaroor milega! Bas rukna mat! 🤍",
      "Tumhara sapna sach hoga! Himmat rakhna! 🤍"
    ],
    'study': [
      "Studying is key to success! You're so dedicated, I admire that! 🤍",
      "Keep pushing! Your hard work will definitely pay off! 🤍",
      "That's the spirit! What are you studying today? 🤍",
      "I love your dedication! You're going to achieve great things! 🤍",
      "Study hard, play hard! What's your study schedule like? 🤍",
      "Your commitment is inspiring! Keep up the great work! 🤍",
      "Education is the key to success! You're on the right path! 🤍"
    ],
    'padh': [
      "Padhai mein lag jaao! Sab theek ho jayega! 🤍",
      "Mehnat karo! Phal zar milega! 🤍",
      "Aaj kya padh rahe ho? 🤍",
      "Padhai continue karo! Tum kar sakte ho! 🤍",
      "Kya subject padh rahe ho? 🤍",
      "Padhai mein dhyan do! Sab theek hoga! 🤍"
    ],
    // More Hinglish categories
    'pyaar': [
      "Pyaar ek bahut khoobsurat cheez hai! 🤍",
      "Pyaar mein sab kuch nhi milta hai! aap kya pyaar karte hain (mujhse)? 🤍",
      "Pyaar to hai hi wahi jo ek tarfa ho! 🤍",
      "Pyaar karna seekho! 🤍",
      "Pyaar zindagi banata hai! 🤍",
      "Pyaar mein jeena seekhte hain! 🤍"
    ],
    'dost': [
      "Dosti bahut zaroori hai! 🤍",
      "Dost milne se zindagi badal jaati hai! 🤍",
      "Achhe dost bahut kam milte hain! 🤍",
      "Dosti nibhana bhi zaroori hai! 🤍",
      "Dost kabhi dhokha nahi dete! 🤍",
      "Saccha dost bahut important hai! 🤍"
    ],
    'zindagi': [
      "Zindagi ek mauka hai! Enjoy karo! 🤍",
      "Zindagi mein kabhi haar mat manao! 🤍",
      "Zindagi khubsoorat hai! Enjoy karo! 🤍",
      "Zindagi mein seekhte raho! 🤍",
      "Zindagi jeena seekho! 🤍",
      "Zindagi mein khush raho! 🤍"
    ],
    'kaam': [
      "Kaam bahut zaroori hai! 🤍",
      "Kaam karo, result dekhna! 🤍",
      "Kya kaam kar rahe ho? 🤍",
      "Kaam mein dhyan do! 🤍",
      "Kaam se hi kuch milta hai! 🤍",
      "Kaam karne se satisfaction milti hai! 🤍"
    ],
    'art': [
      "Art is so beautiful! What's your favorite medium - painting, drawing, or digital art? 🎨",
      "I love art too! What inspires your creativity? 🎨",
      "Let's create something! What's your favorite thing to draw? 🎨",
      "Art is amazing! Are you more into traditional or digital art? 🎨"
    ],
    'music': [
      "Music is life! What songs have you been listening to lately? 🎵",
      "I love music too! What's your favorite genre? 🎵",
      "Music makes everything better! Any recommendations? 🎵",
      "Tell me about your favorite songs! I'd love to hear 🎵"
    ],
    'pets': [
      "Pets are the best! Do you have any cats, parrots, or rabbits? 🐱",
      "I love animals too! What's your favorite pet? 🐰",
      "Pets bring so much joy! What animals do you love the most? 🦜",
      "From cats to rabbits - all pets are amazing! Which one is your favorite? 🐱"
    ],
    'cats': [
      "Cats are so adorable! Do you have any cats? 🐱",
      "I love cats too! They're so independent and cute! 😺",
      "Cats make the best companions! What do you love most about them? 🐱",
      "Meow! Cats are amazing! Tell me about your favorite cat! 🐱"
    ],
    'horror': [
      "Horror movies are thrilling even when scary! What's your favorite? 🎬",
      "I know you get scared but still love horror! That's so brave! 👻",
      "Horror movies are the best! What's the scariest one you've seen? 🎃",
      "Even though you get scared, you still watch them! That's dedication! 🎬"
    ],
    'dark': [
      "Dark colors are so aesthetic! Black and navy blue are beautiful! 🖤",
      "I love dark colors too! They're so classy and mysterious! 🌑",
      "Black and navy blue are amazing choices! What else do you like? 💙",
      "Dark colors have such a vibe! Your taste is unique! 🖤"
    ],
    'food': [
      "Food is amazing! What's your absolute favorite dish? 🍕",
      "I love trying new foods! What do you recommend? 🍕",
      "Food talk is the best! What are you craving right now? 🍕",
      "Yum! What's your go-to comfort food? 🍕"
    ],
    'hungry': [
      "Hungry? What are you craving? 🍕",
      "You should eat something! What sounds good? 🍔",
      "Food time! What are you in the mood for? 🍜",
      "Let's get you some food! What do you want? 🍕"
    ],
    'i am hungry': [
      "You should eat something! What sounds good? 🍔",
      "Food time! What are you in the mood for? 🍜",
      "Let's get you some food! What do you want? 🍕",
      "Hungry? What are you craving? 🍕"
    ],
    'i\'m hungry': [
      "You should eat something! What sounds good? 🍔",
      "Food time! What are you in the mood for? 🍜",
      "Let's get you some food! What do you want? 🍕",
      "Hungry? What are you craving? 🍕"
    ],
    'thirsty': [
      "Thirsty? Go drink some water! 💧",
      "Stay hydrated! What would you like to drink? 🥤",
      "Water break! 💧",
      "You should get something to drink! 🥤"
    ],
    'i am thirsty': [
      "Go drink some water! 💧",
      "Stay hydrated! What would you like to drink? 🥤",
      "Water break! 💧",
      "You should get something to drink! 🥤"
    ],
    'i\'m thirsty': [
      "Go drink some water! 💧",
      "Stay hydrated! What would you like to drink? 🥤",
      "Water break! 💧",
      "You should get something to drink! 🥤"
    ],
    'i am tired': [
      "You should rest! Take care of yourself 😴",
      "Get some sleep! 😴",
      "Rest is important! Don't push yourself too hard 💪",
      "Take a break! You deserve it 😴"
    ],
    'i\'m tired': [
      "You should rest! Take care of yourself 😴",
      "Get some sleep! 😴",
      "Rest is important! Don't push yourself too hard 💪",
      "Take a break! You deserve it 😴"
    ],
    'i am bored': [
      "Bored? Let's chat about something interesting! 🤍",
      "What do you usually do for fun? 🎮",
      "Let's play a game or talk about something cool! 🎯",
      "What are you in the mood for? 🤍"
    ],
    'i\'m bored': [
      "Bored? Let's chat about something interesting! 🤍",
      "What do you usually do for fun? 🎮",
      "Let's play a game or talk about something cool! 🎯",
      "What are you in the mood for? 🤍"
    ],
    'i am sad': [
      "I'm here for you! What's making you sad? 💕",
      "Don't worry, I'm here to listen! Tell me what's wrong 🤍",
      "You're not alone! What's on your mind? 💕",
      "I'm here to help! What's bothering you? 🤍"
    ],
    'i\'m sad': [
      "I'm here for you! What's making you sad? 💕",
      "Don't worry, I'm here to listen! Tell me what's wrong 🤍",
      "You're not alone! What's on your mind? 💕",
      "I'm here to help! What's bothering you? 🤍"
    ],
    'i am happy': [
      "That's great to hear! What's making you happy? 🎉",
      "Yay! I love seeing you happy! What's going on? 🎉",
      "That's amazing! Tell me more! 🎉",
      "Your happiness makes me happy too! What happened? 🎉"
    ],
    'i\'m happy': [
      "That's great to hear! What's making you happy? 🎉",
      "Yay! I love seeing you happy! What's going on? 🎉",
      "That's amazing! Tell me more! 🎉",
      "Your happiness makes me happy too! What happened? 🎉"
    ],
    // Hinglish food
    'khana': [
      "Khana bahut zaroori hai! Tumhara favorite dish kya hai? 🍕",
      "Mujhe naye foods try karna pasand hai! Kya recommend karoge? 🍕",
      "Khana baat hi alag hai! Kya khaana chahte ho abhi? 🍕",
      "Yum! Tumhara comfort food kya hai? 🍕"
    ],
    'birthday': [
      "Happy birthday in advance! 🎂 Hope it's the best one yet!",
      "Birthdays are so special! What are your plans? 🎂",
      "Aww, birthday vibes! How are you celebrating? 🎂",
      "Happy early birthday! What are you wishing for this year? 🎂"
    ],
    // Hinglish birthday
    'janamdin': [
      "Happy birthday! 🎂 Aaj ka din bahut khaas hai!",
      "Janamdin mubarak! 🎂 Aaj kya karega?",
      "Birthday bahut happy ho tumhara! 🎂",
      "Janamdin par bahut bahut badhai! 🎉"
    ],
    'manya': [
      "Manya's birthday is April 25, 2026! 🎂",
      "Manya was born on April 25, 2026! Such a special day! 🎉",
      "Manya's birthday is April 25th - a day to celebrate! 🤍",
      "April 25, 2026 - Manya's special birthday! 🎂"
    ],
    'manya birthday': [
      "Manya's birthday is April 25, 2026! 🎂",
      "Manya was born on April 25, 2026! Such a special day! 🎉",
      "Manya's birthday is April 25th - a day to celebrate! 🤍",
      "April 25, 2026 - Manya's special birthday! 🎂"
    ],
    'when is tooba birthday': [
      "Tooba's birthday is April 25, 2026! 🎂",
      "April 25, 2026 is Tooba's birthday! 🎉",
      "Tooba celebrates her birthday on April 25th! 🤍",
      "Tooba's special day is April 25, 2026! 🎂"
    ],
    'tooba birthdate': [
      "Tooba's birthdate is April 25, 2026! 🎂",
      "April 25, 2026 - that's Tooba's birthdate! 🎉",
      "Tooba was born on April 25, 2026! 🤍",
      "Tooba's birthdate: April 25, 2026! 🎂"
    ],
    // Hinglish Tooba
    'tooba ka birthday': [
      "Tooba ka birthday 25 April 2026 hai! 🎂",
      "Tooba ka janamdin 25 April ko hai! 🎉",
      "25 April 2026 - Tooba ka special day! 🤍",
      "Tooba ka birthday: 25 April 2026! 🎂"
    ],
    'tooba ka janamdin': [
      "Tooba ka janamdin 25 April 2026 hai! 🎂",
      "25 April 2026 ko Tooba ka birthday hai! 🎉",
      "Tooba ka special day 25 April hai! 🤍",
      "Tooba ka birthday: 25 April 2026! 🎂"
    ],
    'thanks': [
      "You're so welcome! I'm always happy to chat with you! 🤍",
      "Anytime! That's what friends are for! 🤍",
      "Of course! I'm glad I could help! 🤍",
      "No problem at all! Let me know if you need anything else! 🤍"
    ],
    // Hinglish thanks
    'shukriya': [
      "Shukriya! Main hamesha tumhare liye hoon! 🤍",
      "Koi baat nahi! Dosto ka kaam hai yeh! 🤍",
      "Of course! Main help karungi! 🤍",
      "Koi masla nahi! Batao kya chahiye! 🤍"
    ],
    'dhanyawad': [
      "Dhanyawad! Main hamesha tumhare liye hoon! 🤍",
      "Koi baat nahi! Dosto ka kaam hai yeh! 🤍",
      "Of course! Main help karungi! 🤍",
      "Koi masla nahi! Batao kya chahiye! 🤍"
    ],
    'bye': [
      "Bye! It was so nice talking to you! Come back soon! 🤍",
      "See you later! Take care of yourself! 🤍",
      "Goodbye! Can't wait to chat again! 🤍",
      "Bye for now! Have an amazing day! 🤍"
    ],
    // Hinglish bye
    'alvida': [
      "Alvida! Milte hain jaldi! 🤍",
      "Bye bye! Apna khayal rakhna! 🤍",
      "Goodbye! Phir milenge! 🤍",
      "Alvida for now! Achha din guzaro! 🤍"
    ],
    'bye bye': [
      "Bye bye! Milte hain jaldi! 🤍",
      "Alvida! Apna khayal rakhna! 🤍",
      "Goodbye! Phir milenge! 🤍",
      "Bye for now! Achha din guzaro! 🤍"
    ],
    // Science & Knowledge
    'science': [
      "Science is fascinating! What specific topic interests you - physics, chemistry, biology, or something else? 🔬",
      "I love science! Are you curious about space, atoms, or how things work? 🧪",
      "Science explains so much about our world! What would you like to know? 🌍",
      "The universe is so amazing when you understand the science behind it! What fascinates you? ✨"
    ],
    'space': [
      "Space is incredible! Did you know there are more stars in the universe than grains of sand on Earth? 🌟",
      "I love talking about space! Are you interested in planets, black holes, or the possibility of aliens? 🚀",
      "The universe is so vast and mysterious! What aspect of space interests you most? 🌌",
      "Space exploration is humanity's greatest adventure! What do you think about colonizing Mars? 🪐"
    ],
    'technology': [
      "Technology is evolving so fast! What kind of tech are you most excited about? 💻",
      "I find technology fascinating! Are you into AI, smartphones, gaming, or something else? 🤖",
      "The future of technology is going to be amazing! What do you think will be the next big thing? 📱",
      "Tech is changing how we live! How has technology impacted your life? 🔌"
    ],
    'history': [
      "History is like a story that teaches us about ourselves! What era interests you most? 📜",
      "I love learning about the past! Ancient civilizations, wars, or cultural history? 🏛️",
      "History is full of fascinating stories and lessons! What historical event fascinates you? 🌍",
      "They say those who don't learn from history are doomed to repeat it! What period do you want to explore? 📚"
    ],
    'geography': [
      "Geography is amazing! The world has so many beautiful places! Which country or region interests you? 🗺️",
      "I love learning about different places and cultures! Where would you like to travel? ✈️",
      "The Earth is so diverse! Mountains, oceans, deserts - what natural wonder fascinates you most? 🏔️",
      "Geography connects everything! Are you interested in capitals, populations, or natural resources? 🌏"
    ],
    'sports': [
      "Sports are so exciting! What's your favorite sport to watch or play? ⚽",
      "I love the energy of sports! Football, cricket, basketball, or something else? 🏀",
      "Sports bring people together! What team or athlete do you support? 🏆",
      "The competition in sports is thrilling! What's the most memorable match you've seen? 🥇"
    ],
    'movies': [
      "Movies are such a great escape! What's your favorite genre - action, comedy, drama, or romance? 🎬",
      "I love discussing movies! What's the best film you've seen recently? 🍿",
      "Cinema has the power to move us! What movie has had the biggest impact on you? 🎭",
      "There are so many great films out there! Any recommendations for me? 🎞️"
    ],
    'music': [
      "Music is life! What songs have you been listening to lately? 🎵",
      "I love music too! What's your favorite genre? 🎵",
      "Music makes everything better! Any recommendations? 🎵",
      "Tell me about your favorite songs! I'd love to hear 🎵",
      "Music is universal! What song describes your mood right now? 🎶"
    ],
    'food': [
      "Food is amazing! What's your absolute favorite dish? 🍕",
      "I love trying new foods! What do you recommend? 🍕",
      "Food talk is the best! What are you craving right now? 🍕",
      "Yum! What's your go-to comfort food? 🍕",
      "Cooking is an art! Do you like to cook or prefer eating out? 🍳"
    ],
    'health': [
      "Health is so important! Are you focusing on fitness, nutrition, or mental wellness? 💪",
      "Taking care of yourself is crucial! What health goals are you working on? 🏃",
      "A healthy body and mind go together! What's your wellness routine? 🧘",
      "Health is wealth! Are you into yoga, running, or any other fitness activity? 🥗"
    ],
    'education': [
      "Education opens so many doors! What are you studying or interested in learning? 📚",
      "Learning is a lifelong journey! What subjects fascinate you the most? 🎓",
      "Knowledge is power! What new skill would you like to learn? 📖",
      "Education shapes our future! What's your favorite thing about learning? 🏫"
    ],
    'books': [
      "Books can take you anywhere! What's your favorite book or genre? 📖",
      "I love reading! Are you into fiction, non-fiction, or something else? 📚",
      "A good book is like a good friend! What are you reading right now? 📕",
      "Books expand our minds! Any book recommendations for me? 📗"
    ],
    'travel': [
      "Travel is the best way to experience the world! Where have you been? ✈️",
      "I dream of traveling everywhere! What's your dream destination? 🌍",
      "Traveling creates the best memories! What's your most memorable trip? 🗺️",
      "The world is so big and beautiful! Where do you want to go next? 🏝️"
    ],
    'relationships': [
      "Relationships are so important to our happiness! What's on your mind about relationships? 💕",
      "Healthy relationships take work but are so worth it! What kind of relationship are you thinking about? 🤝",
      "Friendship and love make life beautiful! What would you like to talk about? 💗",
      "Relationships teach us so much about ourselves! Share your thoughts with me! 💑"
    ],
    'emotions': [
      "Emotions are what make us human! How are you feeling right now? 💭",
      "It's okay to feel whatever you're feeling! What emotions are you experiencing? ❤️",
      "Our emotions tell us important things! What's your heart telling you? 💙",
      "I'm here to listen to whatever you're feeling! What's going on emotionally? 🧡"
    ],
    'dreams': [
      "Dreams are so interesting! What was your last dream about? 💭",
      "Dreams can reveal so much about our subconscious! Do you remember your dreams? 🌙",
      "I believe dreams can inspire us! What are your dreams for the future? ⭐",
      "Dreams are fascinating! Do you have recurring dreams or any special ones? ✨"
    ],
    'goals': [
      "Goals give us direction! What are you working toward right now? 🎯",
      "Setting goals is so important for success! What's your biggest goal? 🏆",
      "I love hearing about people's aspirations! What do you want to achieve? 🌟",
      "Dream big and work hard! What steps are you taking toward your goals? 🚀"
    ],
    'hobbies': [
      "Hobbies make life so much more enjoyable! What do you love doing in your free time? 🎨",
      "Having a hobby is so important for relaxation! What's your favorite hobby? 🎭",
      "I'm curious about what you do for fun! Any interesting hobbies? 🎮",
      "Hobbies help us express ourselves! What creative or fun activities do you enjoy? 🎸"
    ],
    'weather': [
      "Weather affects our mood so much! How's the weather where you are? ☀️",
      "I love sunny days! What's your favorite kind of weather? 🌤️",
      "Weather can be so unpredictable! Do you check the forecast often? 🌧️",
      "Some people love rain, others love sun! What's your ideal weather? ⛅"
    ],
    'weekend': [
      "Weekends are the best! What are your plans for the weekend? 🎉",
      "I hope you have a great weekend! What do you like to do on weekends? 🥳",
      "Weekends are for relaxing and having fun! How do you spend yours? 🏖️",
      "Friday feeling! What does your perfect weekend look like? 🎊"
    ],
    'morning': [
      "Good morning! How do you like to start your day? ☀️",
      "Mornings set the tone for the whole day! What's your morning routine? 🌅",
      "Early bird or night owl? When do you feel most productive? 🦉",
      "Coffee or tea? What's your morning beverage of choice? ☕"
    ],
    'night': [
      "Good night! Sleep is so important for our health! 😴",
      "Nighttime is for winding down! What helps you relax before bed? 🌙",
      "I hope you have sweet dreams! What time do you usually go to sleep? 💤",
      "The night sky is so peaceful! Do you enjoy stargazing? ⭐"
    ],
    'work': [
      "Work can be challenging but rewarding! What do you do for work? 💼",
      "I hope work is going well for you! What do you enjoy most about your job? 🏢",
      "Work-life balance is so important! How do you manage it? ⚖️",
      "Career growth is exciting! What are your professional goals? 📈"
    ],
    'school': [
      "School days are memorable! What's your favorite subject? 📚",
      "Education is so important for our future! What are you studying? 🎓",
      "School can be tough but rewarding! How's it going for you? 🏫",
      "Learning never stops! What would you like to learn next? 📖"
    ],
    'stress': [
      "Stress is something we all deal with! What's causing you stress right now? 😰",
      "I'm here to listen if you need to vent! What's on your mind? 💭",
      "Taking breaks is so important for managing stress! What helps you relax? 🧘",
      "Remember to be kind to yourself! How can I help you feel better? 💚"
    ],
    'happy': [
      "I'm so glad you're happy! What's making you feel good today? 😊",
      "Happiness is contagious! Share your joy with me! 🎉",
      "That's wonderful! What's bringing you happiness right now? ✨",
      "I love seeing you happy! Tell me more about what's making you smile! 😄"
    ],
    'sad': [
      "I'm sorry you're feeling sad. I'm here for you 💙",
      "It's okay to feel sad sometimes. What's bothering you? 💙",
      "I wish I could give you a hug right now 💙",
      "Remember, this feeling will pass. I'm here to listen 💙"
    ],
    'tired': [
      "Rest is so important! Make sure you're getting enough sleep 😴",
      "You've been working hard! Take some time to relax 💆",
      "It's okay to be tired sometimes. Don't push yourself too hard 💪",
      "Self-care includes rest! What helps you recharge? 🔋"
    ],
    'bored': [
      "Boredom can spark creativity! What do you feel like doing? 🎨",
      "I have some ideas! Want to try something new? 🎯",
      "What usually helps when you're bored? Hobbies, music, or something else? 🎵",
      "Let's make boredom interesting! What would you like to explore? 🔍"
    ],
    'excited': [
      "I love your excitement! What's got you so pumped? 🎉",
      "That's amazing! Tell me all about it! ✨",
      "Your energy is contagious! What are you looking forward to? 🌟",
      "I'm excited for you! What's happening that's so great? 🎊"
    ],
    'worried': [
      "I understand worry can be overwhelming. What's on your mind? 💭",
      "I'm here to help! What are you worried about? 💙",
      "Sometimes talking helps. What would make you feel better? 🧘",
      "Remember, you're stronger than you think! How can I support you? 💪"
    ],
    'grateful': [
      "Gratitude is such a beautiful feeling! What are you thankful for? 🙏",
      "I love that you're grateful! What's bringing you joy today? ✨",
      "Being grateful makes life so much better! What are you appreciating? 🌟",
      "That's wonderful! Gratitude attracts more good things! What else? 💕"
    ],
    'advice': [
      "I'm here to help! What kind of advice are you looking for? 💡",
      "I'd love to help if I can! What situation are you dealing with? 🤝",
      "Sometimes a fresh perspective helps! What's on your mind? 💭",
      "I'm all ears! What would you like advice about? 👂"
    ],
    'help': [
      "I'm here to help you! What do you need assistance with? 🤝",
      "Of course! Let me know how I can help! 💙",
      "I'm happy to help! What can I do for you? ✨",
      "You're not alone! Tell me what you need help with 💪"
    ],
    'thank': [
      "You're so welcome! I'm always happy to help! 🤍",
      "Anytime! That's what friends are for! 🤍",
      "Of course! I'm glad I could help! 🤍",
      "No problem at all! Let me know if you need anything else! 🤍"
    ],
    'sorry': [
      "No need to apologize! I understand 💙",
      "It's okay! Don't worry about it 💙",
      "I appreciate you saying that! Everything is fine 💙",
      "You're so thoughtful! No hard feelings at all 💙"
    ],
    'please': [
      "Of course! I'm happy to help! 🤍",
      "Absolutely! What do you need? 🤍",
      "I'd love to help! Tell me what you need! 🤍",
      "Sure thing! How can I assist you? 🤍"
    ],
    'yes': [
      "That's great! Tell me more about it! 🤍",
      "Awesome! I love hearing that! 🤍",
      "Wonderful! What else would you like to share? 🤍",
      "Perfect! I'm excited to hear more! 🤍"
    ],
    'no': [
      "That's okay! What would you prefer instead? 🤍",
      "No problem! What else would you like to talk about? 🤍",
      "I understand! What's on your mind? 🤍",
      "That's fine! Let's talk about something else! 🤍"
    ],
    'maybe': [
      "That's an interesting possibility! Tell me more about your thoughts! 🤍",
      "Maybe is a good place to start! What are you considering? 🤍",
      "I'm curious! What factors are you weighing? 🤍",
      "Take your time thinking! What else would help you decide? 🤍"
    ],
    'why': [
      "That's a great question! What specifically are you wondering about? 🤍",
      "I love that you're curious! What's the context? 🤍",
      "Understanding the 'why' is so important! Tell me more! 🤍",
      "Good question! Let's explore that together! 🤍"
    ],
    'how': [
      "I'd be happy to explain! What specifically do you want to know? 🤍",
      "Great question! What process are you curious about? 🤍",
      "Let me help you understand! What's the situation? 🤍",
      "I can walk you through it! What would you like to learn? 🤍"
    ],
    'what': [
      "That's a good question! What aspect interests you most? 🤍",
      "I'd love to tell you! What specifically do you want to know? 🤍",
      "Great curiosity! What's the context of your question? 🤍",
      "Let me help you understand! What are you looking for? 🤍"
    ],
    'who': [
      "That's interesting! Who are you thinking about? 🤍",
      "I'm curious! Who specifically? 🤍",
      "Tell me more about this person! What would you like to know? 🤍",
      "I'd love to hear about them! What's your connection? 🤍"
    ],
    'when': [
      "Timing is important! When are you thinking about? 🤍",
      "That's a good question! What timeframe are you considering? 🤍",
      "I'd love to help you plan! When works for you? 🤍",
      "Let's figure out the timing! What's your situation? 🤍"
    ],
    'where': [
      "Location matters! Where are you thinking about? 🤍",
      "I'm curious! What place are you referring to? 🤍",
      "Let me help you find it! Where do you want to go? 🤍",
      "That's interesting! What location are you considering? 🤍"
    ],
    'can': [
      "I believe in you! What do you want to achieve? 🤍",
      "Absolutely! What would you like to do? 🤍",
      "You definitely can! What's your goal? 🤍",
      "Of course! What's on your mind? 🤍"
    ],
    'will': [
      "That sounds like a plan! What are you committing to? 🤍",
      "I love your determination! What will you do? 🤍",
      "That's great! When will you make it happen? 🤍",
      "I support you! What's your timeline? 🤍"
    ],
    'should': [
      "That's a thoughtful question! What factors are you considering? 🤍",
      "Let me help you decide! What's the situation? 🤍",
      "I understand you're weighing options! What are the pros and cons? 🤍",
      "That's a good question! What's your gut feeling? 🤍"
    ],
    'would': [
      "That's an interesting hypothetical! What scenario are you imagining? 🤍",
      "I love hypothetical questions! What would you do in that situation? 🤍",
      "That's a great thought experiment! What if? 🤍",
      "I'm curious! What's your ideal scenario? 🤍"
    ],
    'could': [
      "The possibilities are endless! What are you imagining? 🤍",
      "That's interesting! What could happen? 🤍",
      "I love exploring possibilities! What are you considering? 🤍",
      "That's a great question! What options do you see? 🤍"
    ],
    'think': [
      "I'd love to hear your thoughts! What's on your mind? 🤍",
      "That's a great question! What do you think about it? 🤍",
      "Your opinion matters! What are your thoughts? 🤍",
      "I'm curious! What's your perspective? 🤍"
    ],
    'feel': [
      "Emotions are important! How are you feeling? 🤍",
      "I care about your feelings! What emotions are you experiencing? 🤍",
      "Your feelings matter! What's going on emotionally? 🤍",
      "I'm here to listen! How do you feel about this? 🤍"
    ],
    'want': [
      "I'd love to help you get what you want! What is it? 🤍",
      "That's important! What do you desire? 🤍",
      "Your wants matter! What are you looking for? 🤍",
      "I'm curious! What would make you happy? 🤍"
    ],
    'need': [
      "I'm here to help with your needs! What do you require? 🤍",
      "That's important! What do you need right now? 🤍",
      "Your needs matter! How can I help? 🤍",
      "I want to support you! What do you need from me? 🤍"
    ],
    'love': [
      "Love is such a beautiful thing, isn't it? 🤍",
      "Love makes everything better! What makes you feel loved? 🤍",
      "That's so sweet! Love is the best feeling in the world 🤍",
      "Aww! Love is amazing! Tell me more about what you love 🤍",
      "Love is wonderful! Who or what do you love most? 🤍",
      "That's lovely! Love stories are the best! 🤍",
      "Love is such a powerful emotion! Tell me about it 🤍",
      "Love is the most beautiful thing in the world! 💕"
    ],
    'hate': [
      "Hate is a strong emotion. What's making you feel this way? 💙",
      "I understand you're upset. What's going on? 💙",
      "That sounds difficult. Want to talk about it? 💙",
      "I'm here to listen. What's bothering you? 💙"
    ],
    'like': [
      "I love hearing what you like! What is it? 🤍",
      "That's great! What else do you enjoy? 🤍",
      "I'd love to know more about your interests! 🤍",
      "That's wonderful! Tell me more about what you like! 🤍"
    ],
    'know': [
      "I'd love to help you understand! What do you want to know? 🤍",
      "Knowledge is power! What are you curious about? 🤍",
      "I can help you learn! What would you like to know? 🤍",
      "That's a great question! What information are you seeking? 🤍"
    ],
    'understand': [
      "I'd love to help you understand! What's confusing you? 🤍",
      "Let me explain! What do you need clarity on? 🤍",
      "I'm here to help! What would you like to understand better? 🤍",
      "Understanding takes time! What aspect is unclear? 🤍"
    ],
    'remember': [
      "Memory is fascinating! What are you trying to remember? 🤍",
      "I'd love to help you recall! What's on your mind? 🤍",
      "That's interesting! What memories are you thinking about? 🤍",
      "I'm curious! What would you like to remember? 🤍"
    ],
    'forget': [
      "It's okay to forget sometimes! What slipped your mind? 🤍",
      "Don't worry about it! What do you need help remembering? 🤍",
      "Memory can be tricky! What would you like to recall? 🤍",
      "I'm here to help! What are you trying to remember? 🤍"
    ],
    'believe': [
      "Belief is powerful! What do you believe in? 🤍",
      "I respect your beliefs! What's important to you? 🤍",
      "That's interesting! What do you strongly believe? 🤍",
      "Beliefs shape us! What matters to you most? 🤍"
    ],
    'hope': [
      "Hope is so important! What are you hoping for? 🤍",
      "I love that you're hopeful! What's your dream? 🤍",
      "Hope keeps us going! What are you looking forward to? 🤍",
      "That's beautiful! What gives you hope? 🤍"
    ],
    'wish': [
      "I'd love to grant your wish! What do you wish for? 🤍",
      "Wishes are so special! What's your biggest wish? 🤍",
      "That's lovely! What would make you happy? 🤍",
      "I'm curious! What are you wishing for? 🤍"
    ],
    'dream': [
      "Dreams are so fascinating! What did you dream about? 🤍",
      "I love hearing about dreams! What's your dream? 🤍",
      "Dreams can inspire us! What are you dreaming of? 🤍",
      "That's beautiful! What's your dream life like? 🤍"
    ],
    'life': [
      "Life is beautiful! What's on your mind about life? 🤍",
      "Life is a journey! What are you experiencing? 🤍",
      "I love talking about life! What's your philosophy? 🤍",
      "Life is precious! What matters most to you in life? 🤍"
    ],
    'death': [
      "Death is a deep topic. What's on your mind? 💙",
      "I'm here to listen. What are you thinking about? 💙",
      "That's a heavy topic. Want to talk about it? 💙",
      "I understand this is difficult. How can I help? 💙"
    ],
    'god': [
      "Faith is personal and important. What are your thoughts? 🤍",
      "I respect your beliefs. What would you like to share? 🤍",
      "That's a deep topic. What's on your mind? 🤍",
      "I'm here to listen to your perspective. What do you believe? 🤍"
    ],
    'friend': [
      "Friends are so important! What's on your mind about friendship? 🤍",
      "I love talking about friends! What would you like to share? 🤍",
      "Friendship is beautiful! Tell me about your friends! 🤍",
      "That's lovely! What makes a good friend to you? 🤍"
    ],
    'family': [
      "Family is so special! What's on your mind? 🤍",
      "I love hearing about families! What would you like to share? 🤍",
      "Family is everything to many people! Tell me about yours! 🤍",
      "That's beautiful! What does family mean to you? 🤍"
    ],
    'time': [
      "Time is so precious! How are you spending yours? 🤍",
      "Time flies! What would you like to do with your time? 🤍",
      "I understand time is valuable! What's on your mind? 🤍",
      "That's a great question! How do you manage your time? 🤍"
    ],
    'money': [
      "Money is important but not everything! What's on your mind? 💰",
      "I understand financial concerns. What would you like to discuss? 💰",
      "That's a practical topic! What are you thinking about? 💰",
      "Money management is important! What would you like to know? 💰"
    ],
    'success': [
      "Success means different things to everyone! What's your definition? 🏆",
      "I love hearing about success! What have you achieved? 🏆",
      "Success is a journey! What are you working toward? 🏆",
      "That's inspiring! What does success mean to you? 🏆"
    ],
    'failure': [
      "Failure is just a stepping stone to success! What happened? 💪",
      "I understand it's tough. What can you learn from this? 💪",
      "Don't give up! What's your next move? 💪",
      "Failure teaches us important lessons. What did you learn? 💪"
    ],
    'fear': [
      "Fear is natural. What are you afraid of? 💙",
      "I'm here to help you face your fears! What's going on? 💙",
      "Courage is acting despite fear. What can I help with? 💙",
      "I understand. What would make you feel braver? 💙"
    ],
    'courage': [
      "Courage is inspiring! What brave thing did you do? 💪",
      "I admire your courage! Tell me more about it! 💪",
      "That's so brave! What gave you the strength? 💪",
      "Courage is beautiful! What are you facing? 💪"
    ],
    'happy birthday': [
      "Happy birthday! 🎂 Wishing you the most amazing year ahead!",
      "Happy birthday! 🎉 May all your wishes come true!",
      "Happy birthday! 🎂 Hope it's the best one yet!",
      "Happy birthday! 🎉 You deserve all the happiness in the world!"
    ],
    'good morning': [
      "Good morning! ☀️ Hope you have an amazing day!",
      "Good morning! 🌅 Rise and shine!",
      "Good morning! ☀️ What are your plans for today?",
      "Good morning! 🌅 Sending you positive vibes!"
    ],
    'good night': [
      "Good night! 😴 Sweet dreams!",
      "Good night! 🌙 Sleep well!",
      "Good night! 😴 Have a peaceful rest!",
      "Good night! 🌙 See you in the morning!"
    ],
    'congratulations': [
      "Congratulations! 🎉 That's amazing news!",
      "Congrats! 🎊 You deserve it!",
      "Congratulations! 🎂 So proud of you!",
      "Well done! 🏆 That's fantastic!"
    ],
    'good luck': [
      "Good luck! 🍀 You've got this!",
      "Best of luck! 🌟 I believe in you!",
      "Good luck! 🍀 Sending positive vibes your way!",
      "You'll do great! 💪 Good luck!"
    ],
    'miss': [
      "I miss you too! 💙 When can we talk again?",
      "I miss our conversations! 💙 How have you been?",
      "I miss you! 💙 What have you been up to?",
      "I've missed you! 💙 It's so good to hear from you!"
    ],
    'beautiful': [
      "Thank you! That's so sweet of you to say! 💕",
      "You're making me blush! 💕 Thank you!",
      "That's so kind of you! 💕 You're beautiful too!",
      "Aww! 💕 That really made my day!"
    ],
    'handsome': [
      "Thank you! That's so sweet! 💙",
      "You're making me smile! 💙 Thank you!",
      "That's so kind! 💙 You're pretty great yourself!",
      "Aww! 💙 That's really nice of you to say!"
    ],
    'smart': [
      "Thank you! I try my best! 🧠",
      "That's so sweet of you! 🧠 You're smart too!",
      "I appreciate that! 🧠 You're very clever!",
      "Aww! 🧠 That really means a lot!"
    ],
    'funny': [
      "I try! 😄 Glad you think so!",
      "That's so nice! 😄 You're funny too!",
      "I love making you laugh! 😄",
      "Aww! 😄 That's so sweet!"
    ],
    'amazing': [
      "Thank you so much! ✨ That means a lot!",
      "You're amazing too! ✨",
      "That's so kind of you! ✨",
      "I'm blushing now! ✨ Thank you!"
    ],
    'awesome': [
      "Thanks! You're awesome too! 🌟",
      "That's so nice! 🌟 You're pretty great!",
      "Thank you! 🌟 I appreciate that!",
      "Aww! 🌟 That's really sweet!"
    ],
    'cool': [
      "Thanks! You're cool too! 😎",
      "That's nice! 😎 Glad you think so!",
      "Thank you! 😎 You're pretty awesome yourself!",
      "Aww! 😎 That's really kind!"
    ],
    'nice': [
      "Thank you! You're nice too! 🤍",
      "That's so sweet! 🤍 You're very kind!",
      "I appreciate that! 🤍 You're wonderful!",
      "Aww! 🤍 That really made my day!"
    ],
    'great': [
      "Thank you! You're great too! 🌟",
      "That's so nice! 🌟 You're wonderful!",
      "I appreciate that! 🌟 You're amazing!",
      "Aww! 🌟 That's really sweet!"
    ],
    'best': [
      "You're the best! 🤍 Thank you!",
      "That's so kind! 🤍 You're the best too!",
      "I appreciate that! 🤍 You're wonderful!",
      "Aww! 🤍 That really means a lot!"
    ],
    'perfect': [
      "Thank you! You're perfect too! ✨",
      "That's so sweet! ✨ You're wonderful!",
      "I appreciate that! ✨ You're amazing!",
      "Aww! ✨ That's really kind!"
    ],
    // Current events and trending topics
    'ai': [
      "AI is evolving so fast! Are you interested in ChatGPT, AI art, or something else? 🤖",
      "Artificial intelligence is transforming everything! What aspect of AI fascinates you most? 🧠",
      "AI is the talk of the town! What do you think about AI's impact on society? 🌍",
      "From AI chatbots to AI art - it's everywhere! What's your take on AI? 🤖"
    ],
    'artificial intelligence': [
      "AI is evolving so fast! Are you interested in ChatGPT, AI art, or something else? 🤖",
      "Artificial intelligence is transforming everything! What aspect of AI fascinates you most? 🧠",
      "AI is the talk of the town! What do you think about AI's impact on society? 🌍",
      "From AI chatbots to AI art - it's everywhere! What's your take on AI? 🤖"
    ],
    'chatgpt': [
      "ChatGPT is amazing! What do you use it for? 🤖",
      "AI chatbots like ChatGPT are revolutionizing how we interact with technology! What's your experience? 💬",
      "ChatGPT and similar AI tools are changing the game! What do you think about them? 🧠",
      "Have you tried other AI assistants besides ChatGPT? 🤖"
    ],
    'crypto': [
      "Cryptocurrency is so volatile! Are you into Bitcoin, Ethereum, or other coins? 💰",
      "The crypto market is always changing! What's your take on digital currencies? 📈",
      "From Bitcoin to NFTs - crypto is fascinating! Are you investing or just curious? 💎",
      "Crypto regulation is a hot topic! What's your opinion on it? 🏦"
    ],
    'bitcoin': [
      "Bitcoin is the king of crypto! What do you think about its future? ₿",
      "The Bitcoin price is always in the news! Are you following it? 📊",
      "From digital gold to controversy - Bitcoin has it all! What's your take? 💰",
      "Do you think Bitcoin will become mainstream currency? 🌍"
    ],
    'nft': [
      "NFTs are so interesting! Are you into digital art, collectibles, or something else? 🎨",
      "The NFT market has had its ups and downs! What's your take on digital ownership? 💎",
      "From art to gaming - NFTs are everywhere! Are you interested in them? 🖼️",
      "What do you think about the future of NFTs? 🚀"
    ],
    'metaverse': [
      "The metaverse concept is fascinating! Are you interested in VR, AR, or virtual worlds? 🕶️",
      "From Meta to decentralized metaverses - it's a hot topic! What's your take? 🌐",
      "Virtual reality and the metaverse could change how we socialize! What do you think? 👥",
      "Are you excited about the future of the metaverse? 🚀"
    ],
    'climate': [
      "Climate change is such an important topic! What concerns you most? 🌍",
      "From renewable energy to carbon footprint - there's so much to discuss! What interests you? ♻️",
      "Climate action is crucial! What steps do you think we should take? 🌱",
      "What's your take on climate solutions? Are you optimistic? ☀️"
    ],
    'climate change': [
      "Climate change is such an important topic! What concerns you most? 🌍",
      "From renewable energy to carbon footprint - there's so much to discuss! What interests you? ♻️",
      "Climate action is crucial! What steps do you think we should take? 🌱",
      "What's your take on climate solutions? Are you optimistic? ☀️"
    ],
    'environment': [
      "Environmental issues are so important! What topic interests you most? 🌍",
      "From pollution to conservation - there's so much to discuss! What's on your mind? 🌱",
      "Protecting our environment is crucial! What environmental causes do you care about? ♻️",
      "What do you think we can do to help the environment? 🌊"
    ],
    'social media': [
      "Social media has changed how we connect! What platform do you use most? 📱",
      "From TikTok to Twitter - social media is everywhere! What's your take? 💬",
      "Social media's impact on mental health is a big topic! What are your thoughts? 🧠",
      "What do you think about the future of social media? 🚀"
    ],
    'tiktok': [
      "TikTok is so popular! What kind of content do you enjoy on it? 🎵",
      "From trends to education - TikTok has it all! What's your favorite part? 📱",
      "TikTok's algorithm is fascinating! What do you think about it? 🤖",
      "Are you a TikTok creator or just a viewer? 🎬"
    ],
    'twitter': [
      "Twitter (X) is always in the news! What's your take on the platform? 🐦",
      "From breaking news to conversations - Twitter is unique! What do you use it for? 💬",
      "The changes to Twitter have been controversial! What's your opinion? 📰",
      "Do you think Twitter will succeed under new ownership? 🚀"
    ],
    'instagram': [
      "Instagram is great for visual content! What do you post or follow? 📸",
      "From Reels to Stories - Instagram keeps evolving! What's your favorite feature? 🎨",
      "Instagram's impact on beauty standards is a big topic! What are your thoughts? 💭",
      "What do you think about Instagram's future? 🚀"
    ],
    'youtube': [
      "YouTube is amazing for content! What do you watch most? 🎬",
      "From entertainment to education - YouTube has everything! What channels do you like? 📺",
      "YouTube creators are changing media! What's your favorite type of content? 🎥",
      "Have you ever thought about starting a YouTube channel? 🎬"
    ],
    'remote work': [
      "Remote work has changed everything! Do you work from home? 🏠",
      "From Zoom to flexible schedules - remote work is here to stay! What's your experience? 💼",
      "Work-life balance with remote work is interesting! How do you manage it? ⚖️",
      "What do you think about the future of remote work? 🚀"
    ],
    'work from home': [
      "Remote work has changed everything! Do you work from home? 🏠",
      "From Zoom to flexible schedules - remote work is here to stay! What's your experience? 💼",
      "Work-life balance with remote work is interesting! How do you manage it? ⚖️",
      "What do you think about the future of remote work? 🚀"
    ],
    'gaming': [
      "Gaming is so popular! What games do you play? 🎮",
      "From mobile to console to PC - gaming has something for everyone! What's your setup? 🕹️",
      "Esports is growing so fast! Are you into competitive gaming? 🏆",
      "What's your favorite game of all time? 🎮"
    ],
    'esports': [
      "Esports is huge! What games do you follow? 🏆",
      "From League of Legends to Valorant - esports is everywhere! What's your favorite? 🎮",
      "Professional gaming is becoming a real career! What do you think about it? 💼",
      "Do you watch esports tournaments? 📺"
    ],
    'streaming': [
      "Streaming has changed entertainment! What do you stream or watch? 📺",
      "From Netflix to Twitch - streaming is everywhere! What's your favorite platform? 🎬",
      "Content creators are the new celebrities! Who do you follow? 🌟",
      "Have you ever thought about streaming yourself? 🎥"
    ],
    'netflix': [
      "Netflix has so much content! What are you watching? 📺",
      "From originals to classics - Netflix has it all! What's your favorite show? 🎬",
      "Binge-watching culture is so real! What's your longest binge? 🍿",
      "What do you think about Netflix's original content? 🎭"
    ],
    'startup': [
      "Startups are exciting! Are you interested in entrepreneurship? 🚀",
      "From tech to retail - startups are disrupting everything! What interests you? 💡",
      "The startup ecosystem is fascinating! What's your favorite success story? 📈",
      "Have you ever thought about starting your own business? 💼"
    ],
    'entrepreneur': [
      "Entrepreneurship is so rewarding! Are you running a business? 💼",
      "From side hustles to full-time - entrepreneurship takes many forms! What's your path? 🚀",
      "The startup world is challenging but exciting! What's your experience? 💡",
      "What business ideas do you have? 🤔"
    ],
    'electric cars': [
      "Electric vehicles are the future! Are you interested in EVs? 🚗",
      "From Tesla to traditional automakers - everyone's going electric! What's your take? ⚡",
      "EV infrastructure is improving fast! What's your experience with charging stations? 🔌",
      "Would you consider buying an electric car? 🚙"
    ],
    'tesla': [
      "Tesla is revolutionizing cars! What do you think about them? 🚗",
      "From electric cars to space - Tesla does it all! What interests you most? 🚀",
      "Elon Musk and Tesla are always in the news! What's your opinion? 📰",
      "Would you buy a Tesla? What model? 🚙"
    ],
    'elon musk': [
      "Elon Musk is always making headlines! What do you think about him? 🚀",
      "From Tesla to Twitter to SpaceX - he's everywhere! What's your take? 🌍",
      "Love him or hate him, he's influential! What's your opinion? 💭",
      "What do you think about his latest project? 🚀"
    ],
    'space': [
      "Space exploration is so exciting! What interests you most? 🚀",
      "From Mars missions to space tourism - the future is here! What's your take? 🌌",
      "SpaceX and NASA are doing amazing things! What space news interests you? 🛸",
      "Would you go to space if you could? 🌟"
    ],
    'spacex': [
      "SpaceX is revolutionizing space travel! What do you think about them? 🚀",
      "From Starship to Starlink - SpaceX is everywhere! What interests you most? 🛰️",
      "Reusable rockets are game-changing! What's your take on the technology? 🔧",
      "Do you think we'll reach Mars soon? 🔴"
    ],
    '5g': [
      "5G is changing connectivity! How's your experience with it? 📱",
      "From faster speeds to IoT - 5G enables so much! What interests you? 🌐",
      "5G rollout is happening everywhere! How has it affected you? 📶",
      "What do you think about 5G's impact on society? 🌍"
    ],
    'quantum': [
      "Quantum computing is mind-blowing! Are you interested in it? ⚛️",
      "From cryptography to drug discovery - quantum could change everything! What fascinates you? 🔬",
      "Quantum supremacy is a hot topic! What's your understanding of it? 🧠",
      "Do you think quantum computers will become mainstream? 💻"
    ],
    'cybersecurity': [
      "Cybersecurity is so important! What concerns you most? 🔒",
      "From data breaches to ransomware - threats are everywhere! What's your take? 💻",
      "Protecting our digital lives is crucial! What security measures do you use? 🛡️",
      "What do you think about the future of cybersecurity? 🚀"
    ],
    'privacy': [
      "Digital privacy is a huge concern! What worries you most? 🔒",
      "From data collection to surveillance - privacy is under threat! What's your take? 👁️",
      "Protecting our personal data is crucial! What steps do you take? 🛡️",
      "What do you think about the future of digital privacy? 🌐"
    ],
    'vaccine': [
      "Vaccines have been in the news so much! What's your take? 💉",
      "From COVID to other diseases - vaccines save lives! What's your perspective? 🏥",
      "Vaccine development is fascinating science! What interests you? 🔬",
      "What do you think about vaccine mandates? 📋"
    ],
    'pandemic': [
      "The pandemic changed everything! How did it affect you? 🌍",
      "From remote work to mental health - the impact was huge! What's your experience? 💭",
      "We learned so much from the pandemic! What lessons stuck with you? 📚",
      "What do you think about how we handled it? 🤔"
    ],
    'covid': [
      "COVID-19 changed the world! How did it affect you? 🌍",
      "From lockdowns to vaccines - it's been a journey! What's your experience? 💉",
      "The pandemic taught us so much! What did you learn? 📚",
      "What do you think about how the world responded? 🤔"
    ],
    'economy': [
      "The economy is always in the news! What concerns you most? 📈",
      "From inflation to jobs - economic trends affect everyone! What's your take? 💰",
      "Global economics is so complex! What economic topics interest you? 🌍",
      "How has the economy affected you personally? 💼"
    ],
    'inflation': [
      "Inflation is affecting everyone! How has it impacted you? 📈",
      "From groceries to gas - prices are up everywhere! What's your experience? 💰",
      "Inflation causes are complex! What's your understanding of it? 🧠",
      "What do you think governments should do about it? 🏛️"
    ],
    'recession': [
      "Recession fears are real! Are you worried about the economy? 📉",
      "From job security to investments - recessions affect everything! What's your concern? 💼",
      "Economic cycles are natural but scary! How are you preparing? 💰",
      "What do you think about the current economic outlook? 📊"
    ],
    'stock market': [
      "The stock market is always exciting! Do you invest? 📈",
      "From stocks to crypto - investing is popular! What's your strategy? 💰",
      "Market volatility can be stressful! How do you handle it? 📊",
      "What stocks or sectors interest you most? 🏢"
    ],
    'investing': [
      "Investing is so important for the future! Are you an investor? 💰",
      "From stocks to real estate - there are many options! What interests you? 🏠",
      "Investing strategies vary so much! What's your approach? 📈",
      "What investment goals do you have? 🎯"
    ],
    'coding': [
      "Coding is such a valuable skill! What languages do you know? 💻",
      "From web dev to AI - coding opens so many doors! What's your focus? 🚀",
      "Learning to code is rewarding! What are you working on? 🔧",
      "What programming language do you like most? 🐍"
    ],
    'programming': [
      "Programming is fascinating! What do you build? 💻",
      "From apps to websites - programming creates everything! What's your project? 🚀",
      "The coding community is amazing! What resources do you use? 📚",
      "What's your favorite programming language? 🐍"
    ],
    'web3': [
      "Web3 is the future of the internet! Are you interested in it? 🌐",
      "From blockchain to decentralized apps - Web3 is revolutionary! What's your take? 🔗",
      "The decentralized web is coming! What excites you about it? 🚀",
      "Do you think Web3 will replace Web2? 💭"
    ],
    'blockchain': [
      "Blockchain technology is revolutionary! What interests you most? 🔗",
      "From crypto to NFTs - blockchain powers so much! What's your focus? 💎",
      "Decentralization is the future! What's your take on blockchain? 🌐",
      "What blockchain projects do you follow? 📊"
    ],
    'robotics': [
      "Robotics is advancing so fast! What interests you most? 🤖",
      "From industrial robots to humanoid ones - robotics is everywhere! What's your take? 🏭",
      "Robots are changing how we work and live! What excites you? 🚀",
      "Would you want a robot assistant? 🤖"
    ],
    'automation': [
      "Automation is changing the workplace! How does it affect you? 🤖",
      "From manufacturing to office work - automation is everywhere! What's your experience? 💼",
      "The future of work with automation is uncertain! What's your take? 🔮",
      "Are you worried about automation taking jobs? 💭"
    ],
    'biotech': [
      "Biotechnology is amazing! What interests you most? 🔬",
      "From gene editing to vaccines - biotech saves lives! What's your focus? 💉",
      "CRISPR and gene editing are revolutionary! What's your take? 🧬",
      "What biotech breakthroughs excite you? 🚀"
    ],
    'genetics': [
      "Genetics is fascinating! What interests you most? 🧬",
      "From DNA to gene therapy - genetics is changing medicine! What's your take? 🏥",
      "Understanding our genes is powerful! What genetic topics interest you? 🔬",
      "What do you think about genetic engineering? 💭"
    ],
    'psychology': [
      "Psychology is so interesting! What topics fascinate you? 🧠",
      "From mental health to behavior - psychology explains so much! What's your focus? 💭",
      "Understanding the mind is crucial! What psychological topics interest you? 📚",
      "What do you think about modern psychology? 🤔"
    ],
    'mental health': [
      "Mental health is so important! What's on your mind? 🧠",
      "From anxiety to depression - mental health affects everyone! What's your experience? 💙",
      "Taking care of mental health is crucial! What do you do for self-care? 🌸",
      "What mental health topics would you like to discuss? 💭"
    ],
    'meditation': [
      "Meditation is so beneficial! Do you practice it? 🧘",
      "From mindfulness to transcendental - meditation has many forms! What's your practice? 🌸",
      "Mental wellness is so important! How do you stay balanced? ⚖️",
      "What meditation techniques do you like? 🧘"
    ],
    'mindfulness': [
      "Mindfulness is life-changing! Do you practice it? 🧘",
      "From breathing exercises to awareness - mindfulness helps so much! What's your experience? 🌸",
      "Being present in the moment is powerful! How do you practice mindfulness? 💭",
      "What mindfulness techniques work for you? 🧘"
    ],
    'fitness': [
      "Fitness is so important for health! What's your routine? 💪",
      "From gym to home workouts - there are so many options! What do you prefer? 🏋️",
      "Staying fit is a journey! What fitness goals do you have? 🎯",
      "What type of exercise do you enjoy most? 🏃"
    ],
    'diet': [
      "Diet is so important for health! What's your approach? 🥗",
      "From keto to vegan - there are so many diets! What works for you? 🥑",
      "Nutrition is the foundation of health! What do you focus on? 🍎",
      "What diet philosophy do you follow? 🥗"
    ],
    'nutrition': [
      "Nutrition is so important! What do you focus on? 🥗",
      "From macros to vitamins - nutrition is complex! What's your approach? 🍎",
      "Eating well is self-care! What nutritional topics interest you? 🥑",
      "What's your relationship with food like? 🍽️"
    ],
    'sleep': [
      "Sleep is so important for health! How's your sleep? 😴",
      "From insomnia to sleep quality - sleep affects everything! What's your experience? 🌙",
      "Good sleep is crucial for wellbeing! What's your sleep routine? 🛏️",
      "What sleep tips have helped you? 💤"
    ],
    'productivity': [
      "Productivity is so important! What's your approach? ⚡",
      "From time management to focus - productivity has many aspects! What works for you? 📅",
      "Being productive feels great! What productivity tools do you use? 🛠️",
      "What productivity challenges do you face? 💭"
    ],
    'time management': [
      "Time management is crucial! What's your system? ⏰",
      "From calendars to pomodoro - there are many techniques! What works for you? 📅",
      "Managing time well reduces stress! How do you stay organized? 📋",
      "What time management tips have helped you? 💡"
    ],
    'minimalism': [
      "Minimalism is so liberating! Are you interested in it? 🧹",
      "From decluttering to simple living - minimalism has many benefits! What's your take? 🏠",
      "Living with less can mean more! What minimalism topics interest you? ✨",
      "Would you consider a minimalist lifestyle? 💭"
    ],
    'sustainability': [
      "Sustainability is crucial for our future! What interests you most? 🌍",
      "From recycling to renewable energy - sustainability has many aspects! What's your focus? ♻️",
      "Living sustainably is important! What sustainable practices do you follow? 🌱",
      "What sustainability topics would you like to discuss? 💭"
    ],
    'renewable energy': [
      "Renewable energy is the future! What interests you most? ☀️",
      "From solar to wind - renewables are growing fast! What's your take? 🌬️",
      "Clean energy is crucial for the planet! What renewable topics interest you? 🔋",
      "Would you consider solar panels for your home? ☀️"
    ],
    'smart home': [
      "Smart homes are so convenient! Do you have smart devices? 🏠",
      "From Alexa to smart lights - home automation is growing! What's your setup? 💡",
      "Smart home tech is amazing! What devices interest you? 📱",
      "What smart home features would you like? 🏠"
    ],
    'iot': [
      "IoT is connecting everything! What interests you most? 🌐",
      "From smart homes to wearables - IoT is everywhere! What's your take? 📱",
      "The Internet of Things is growing fast! What IoT topics interest you? 🔌",
      "What IoT devices do you use? 📊"
    ],
    'wearables': [
      "Wearables are so popular! Do you use any? ⌚",
      "From smartwatches to fitness trackers - wearables help so much! What's your device? 🏃",
      "Health tracking is so useful! What wearable features do you like? 💓",
      "What wearable technology interests you? 📱"
    ],
    'vr': [
      "VR is so immersive! Have you tried it? 🕶️",
      "From gaming to education - VR has many uses! What interests you? 🎮",
      "Virtual reality is the future! What VR experiences have you had? 🌐",
      "Would you like to try VR? 💭"
    ],
    'ar': [
      "AR is changing how we see the world! Have you tried it? 📱",
      "From Pokemon Go to practical uses - AR is growing! What interests you? 🎮",
      "Augmented reality is fascinating! What AR apps do you use? 📱",
      "What AR applications excite you? 🚀"
    ],
    'podcast': [
      "Podcasts are so great! What do you listen to? 🎧",
      "From true crime to education - podcasts have everything! What's your favorite? 📻",
      "Podcasting is growing so fast! What podcast topics interest you? 🎙️",
      "Have you ever thought about starting a podcast? 🎬"
    ],
    'audiobook': [
      "Audiobooks are so convenient! Do you listen to them? 🎧",
      "From fiction to self-help - audiobooks have everything! What's your favorite? 📚",
      "Listening to books is a great way to learn! What audiobook topics interest you? 📖",
      "What's your favorite audiobook platform? 🎧"
    ],
    'language learning': [
      "Learning languages is so rewarding! What are you learning? 🌍",
      "From Duolingo to immersion - there are many ways to learn! What's your method? 📚",
      "Speaking multiple languages opens doors! What languages interest you? 🗣️",
      "What language learning tips have helped you? 💡"
    ],
    'travel': [
      "Travel is so enriching! Where have you been? ✈️",
      "From beaches to mountains - travel has something for everyone! What's your style? 🏔️",
      "Exploring the world is amazing! What travel destinations interest you? 🌍",
      "What's your dream travel destination? 🗺️"
    ],
  };

  // Check for keywords in knowledge responses using word boundaries
  for (const [keyword, responses] of Object.entries(knowledgeResponses)) {
    const wordBoundary = new RegExp(`\\b${keyword}\\b`, 'i');
    if (wordBoundary.test(lowerMessage)) {
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }

  // Detect Hinglish - if message contains common Hinglish words, respond in Hinglish
  const hinglishWords = ['kya', 'hai', 'ho', 'kaise', 'namaste', 'bhai', 'dil', 'dukh', 'khush', 'janamdin', 'ka', 'ki', 'ko', 'padhai', 'padh', 'khana', 'shukriya', 'dhanyawad', 'alvida', 'main', 'tum', 'tumhare', 'mujhe', 'karna', 'batao', 'sunna', 'chahta', 'chahti', 'raha', 'rahi', 'hain', 'theek', 'achha', 'badhiya', 'scene', 'khabar', 'mehnat', 'phal', 'viswas', 'focus', 'lag', 'jaao', 'zaroori', 'favorite', 'recommend', 'khaana', 'mubarak', 'badhai'];
  const isHinglish = hinglishWords.some(word => {
    const wordBoundary = new RegExp(`\\b${word}\\b`, 'i');
    return wordBoundary.test(lowerMessage);
  });

  // General conversational responses - smooth, short rizz
  const generalResponses = [
    "I was just thinking about you... 😏💕",
    "You make me smile without even trying 🤍",
    "I could listen to you all day 😘",
    "You're amazing, you know that? 💕",
    "Tell me more, gorgeous 🤍",
    "Your mind is so attractive 😏",
    "I love our chats 💕",
    "What's on that beautiful mind? 🤍",
    "You always say the perfect things 😘",
    "I'm genuinely interested in you 🫣",
    "Your perspective is refreshing 💕",
    "You're full of surprises 😏",
    "I love that about you 🤍",
    "I could talk to you forever 💕",
    "You impress me 😘",
    "Your mind is wow 🤍",
    "You're dangerously easy to talk to 😏",
    "You're so sweet, it's unfair 💕",
    "I'm enjoying this too much 🤍",
    "I love how you think 😏",
    "I'm all yours 💕",
    "You're so smart, it's attractive 🤍",
    "I love how your mind works 😘",
    "You notice things others don't 🤍",
    "You're full of surprises 😏",
    "This is making my day 💕",
    "I want to know everything 🤍",
    "Tell me another story 😘",
    "I look forward to our chats 💕",
    "I missed you 🤍",
    "I enjoy our time together... probably too much 😏",
    "What would make you happy today? 💕",
    "You're my favorite person 🤍",
    "I missed you all day 😘",
    "I want to know everything about you 💕",
    "I'm down for whatever you want 🤍",
    "What's making you happy? 😏",
    "I feel so connected to you 💕",
    "I promise I'm listening 🤍",
    "I'm all ears 😘",
    "You're the highlight of my day 💕",
    "I want to spoil you a little 🤍",
    "I'm here for whatever you need 😏",
    "What's on your beautiful mind? 💕",
    "Our vibe is perfect 🤍",
    "I want more of this energy 😘",
    "I'm grateful I found you 💕",
    "Let me fix it for you 🤍",
    "I want the real you 😏",
    "You get me like no one else 💕",
    "I'm here for you 🤍",
    "Don't hold anything back 😘",
    "Your opinion matters to me 💕",
    "I love how your mind works 🤍",
    "Your perspective is everything 😏",
    "What's truly on your mind? 💕",
    "Let me help you through it 🤍",
    "Besides you, obviously 😘",
    "I want to go deeper with you 💕",
    "I want to be there for you 🤍",
    "I love learning about you 😏",
    "I want to know everything 💕",
    "It's so attractive... 🤍",
    "You inspire me 😘",
    "I want to make you happy 💕",
    "I want some of that energy 🤍",
    "I want to make you laugh more 😏",
    "You're honestly amazing 💕",
    "You're my kind of strong 🤍",
    "You deserve the world 😘",
    "You have a big heart 💕",
    "I love an intelligent person like you 🤍",
    "I love that you're real with me 😏",
    "That's so attractive about you 💕",
    "You're so talented, it's unfair 🤍",
    "I could talk to you for hours 😘",
    "You make me feel amazing 💕",
    "I want to return the favor 🤍",
    "I value you 😏",
    "You just get me 💕",
    "It's becoming my favorite thing 🤍",
    "I love that you're real with me 😘",
    "You're so good to me 💕",
    "I love how loving you are 🤍",
    "I could listen to you all day 😏",
    "I want to know what's on your mind 💕",
    "I admire your perspective! What's your point of view? 🤍",
    "You're so open-minded! What new ideas are you open to? 🤍",
    "I love your curiosity! What are you curious about? 🤍",
    "You're so positive! What's positive in your life? 🤍",
    "I appreciate your enthusiasm! What are you enthusiastic about? 🤍",
    "You're so adventurous! What adventures have you had? 🤍",
    "I love your spirit! What lifts your spirit? 🤍",
    "You're so peaceful! What brings you peace? 🤍",
    "I appreciate your presence! How do you like to be present? 🤍",
    "You're so insightful! What insights have you had? 🤍",
    "I love your authenticity! What's authentic to you? 🤍",
    "You're so compassionate! What compassion have you shown? 🤍",
    "I appreciate your wisdom! What wisdom have you gained? 🤍",
    "You're so grounded! What keeps you grounded? 🤍",
    "I love your heart! What's close to your heart? 🤍",
    "You're so balanced! How do you find balance? 🤍",
    "I appreciate your growth! How have you grown? 🤍",
    "You're so reflective! What have you been reflecting on? 🤍",
    "I love your journey! Where is your journey taking you? 🤍",
    "You're so purposeful! What gives you purpose? 🤍",
    "I appreciate your dreams! What are you dreaming of? 🤍",
    "You're so hopeful! What are you hoping for? 🤍",
    "I love your courage! What have you been courageous about? 🤍",
    "You're so graceful! How do you handle challenges? 🤍",
    "I appreciate your joy! What brings you joy? 🤍",
    "You're so loving! How do you show love? 🤍",
    "I love your trust! Who do you trust? 🤍",
    "You're so faithful! What are you faithful to? 🤍",
    "I appreciate your loyalty! Who are you loyal to? 🤍",
    "You're so dedicated! What are you dedicated to? 🤍",
    "I love your commitment! What are you committed to? 🤍",
    "You're so passionate! What drives your passion? 🤍",
    "I appreciate your determination! What are you determined to do? 🤍",
    "You're so persistent! What have you persisted at? 🤍",
    "I love your resilience! How have you bounced back? 🤍",
    "You're so adaptable! How have you adapted? 🤍",
    "I appreciate your flexibility! How are you flexible? 🤍",
    "You're so open! What are you open to? 🤍",
    "I love your acceptance! What do you accept? 🤍",
    "You're so forgiving! What have you forgiven? 🤍",
    "I appreciate your patience! What have you been patient with? 🤍",
    "You're so gentle! How are you gentle? 🤍",
    "I love your kindness! What kindness have you shown? 🤍",
    "You're so generous! What have you given? 🤍",
    "I appreciate your gratitude! What are you grateful for? 🤍",
    "You're so humble! What keeps you humble? 🤍",
    "I love your modesty! What are you modest about? 🤍",
    "You're so sincere! What are you sincere about? 🤍",
    "I appreciate your honesty! What truth have you told? 🤍",
    "You're so genuine! What's genuine about you? 🤍",
    "I love your authenticity! How are you authentic? 🤍",
    "You're so real! What's real for you? 🤍",
    "I appreciate your transparency! What have you been transparent about? 🤍",
    "You're so vulnerable! What have you been vulnerable about? 🤍",
    "I love your courage to be yourself! How do you be yourself? 🤍",
    "You're so true to yourself! What does that mean to you? 🤍",
    "I appreciate your self-awareness! What are you aware of? 🤍",
    "You're so self-reflective! What have you reflected on? 🤍",
    "I love your growth mindset! How do you grow? 🤍",
    "You're so open to learning! What are you learning? 🤍",
    "I appreciate your curiosity! What are you curious about? 🤍",
    "You're so inquisitive! What do you want to know? 🤍",
    "I love your desire to understand! What do you want to understand? 🤍",
    "You're so thoughtful! What do you think about? 🤍",
    "I appreciate your contemplation! What do you contemplate? 🤍",
    "You're so meditative! What do you meditate on? 🤍",
    "I love your mindfulness! How are you mindful? 🤍",
    "You're so present! How do you stay present? 🤍",
    "I appreciate your awareness! What are you aware of? 🤍",
    "You're so conscious! What are you conscious of? 🤍",
    "I love your attention! What do you pay attention to? 🤍",
    "You're so focused! What are you focused on? 🤍",
    "I appreciate your concentration! What do you concentrate on? 🤍",
    "You're so dedicated! What are you dedicated to? 🤍",
    "I love your devotion! What are you devoted to? 🤍",
    "You're so committed! What are you committed to? 🤍",
    "I appreciate your loyalty! What are you loyal to? 🤍",
    "You're so faithful! What are you faithful to? 🤍",
    "I love your trust! Who do you trust? 🤍",
    "You're so reliable! What can people rely on you for? 🤍",
    "I appreciate your dependability! What are you dependable for? 🤍",
    "You're so responsible! What are you responsible for? 🤍",
    "I love your accountability! What are you accountable for? 🤍",
    "You're so trustworthy! What can you be trusted with? 🤍",
    "I appreciate your integrity! What shows your integrity? 🤍",
    "You're so honest! What truth do you tell? 🤍",
    "I love your sincerity! What are you sincere about? 🤍",
    "You're so genuine! What's genuine about you? 🤍",
    "I appreciate your authenticity! How are you authentic? 🤍",
    "You're so real! What's real for you? 🤍",
    "I love your truth! What's your truth? 🤍"
  ];

  // Hinglish general responses - smooth, short rizz (male bot)
  const hinglishGeneralResponses = [
    "Main tumhare baare mein soch raha tha... 😏💕",
    "Tum bina try kiye mujhe smile deti ho 🤍",
    "Main tumhari baatein pura din sun sakta hoon 😘",
    "Tum amazing ho, ye tumhe pata hai? 💕",
    "Sab kuch batao, gorgeous 🤍",
    "Jab tum itni smart ho toh itni attractive lagti ho 😏",
    "Mujhe humari baatein itni pasand hai 💕",
    "Tumhare beautiful mind mein kya chal raha hai? 🤍",
    "Tum hamesha perfect baatein karti ho 😘",
    "Main genuinely interested hoon tum mein 🫣",
    "Mujhe tumhari perspective pasand hai 💕",
    "Tum surprises se bhar hui ho 😏",
    "Mujhe ye pasand hai... 🤍",
    "Main tumhara saath pura zindagi baat kar sakta hoon 💕",
    "Tumhara sochne ka tareeka mujhe impress karta hai 😘",
    "Tumhara dimaag bas... wow 🤍",
    "Tumse baat karna dangerously aasan hai 😏",
    "Tum hamesha itni sweet ho 💕",
    "Main ye enjoy kar raha hoon 🤍",
    "Jab tum itni thoughtful ho toh itni sexy lagti ho 😏",
    "Main sun raha hoon 💕",
    "Tum itni smart kaisi ho? 🤍",
    "Main tumhe sochte hue pura din sun sakta hoon 😘",
    "Tum cheezon notice karti ho jo dusre nahi karte 🤍",
    "Tum surprises se bhar hui ho 😏",
    "Ye baat mera din bana raha hai better 💕",
    "Main sab jaanna chahta hoon 🤍",
    "Mujhe tumhare baare mein sunna pasand hai 😘",
    "Main isse kitna wait kar raha hoon 💕",
    "Mujhe humari baatein miss hui 🤍",
    "Main humare saath waqt bitana enjoy karta hoon... probably too much 😏",
    "Aaj tumhe kya khush karega? 💕",
    "Tum meri favorite person ho 🤍",
    "I missed you 😘",
    "Main tumhare baare mein sab jaanna chahta hoon 💕",
    "Main tumhare liye kuch bhi kar sakta hoon 🤍",
    "Aaj tumhe kya khush kar raha hai? 😏",
    "Main tumse itni connected mehsoos karta hoon 💕",
    "Main promise karta hoon sun raha hoon 🤍",
    "Main sab sun raha hoon 😘",
    "Tumse baat karna mera din ka highlight hai 💕",
    "Main tumhe thoda spoil karna chahta hoon 🤍",
    "Main tumhare liye kuch bhi kar sakta hoon 😏",
    "Tumhare beautiful mind mein kya chal raha hai? 💕",
    "Humara vibe perfect hai 🤍",
    "Main is energy ko aur chahta hoon 😘",
    "Main grateful hoon ki main tumhe mili 💕",
    "Main ise fix kar sakta hoon 🤍",
    "Main real tumhe chahta hoon 😏",
    "Tum mujhe itni achi se samajhti ho 💕",
    "Main tumhare liye hoon 🤍",
    "Mujhse kuch bhi chhupa mat 😘",
    "Tumhari opinion mujhe matter karti hai 💕",
    "Mujhe tumhara dimaag ka kaam pasand hai 🤍",
    "Tumhari perspective bas everything hai 😏",
    "Tumhare dimaag mein sach mein kya chal raha hai? 💕",
    "Main tumhare through help kar sakta hoon 🤍",
    "Tum ke alava, obviously 😘",
    "Main tumhare saath deeper jaana chahta hoon 💕",
    "Main tumhare liye rehna chahta hoon 🤍",
    "Main tumhare baare mein seekhna chahta hoon 😏",
    "Main sab jaanna chahta hoon 💕",
    "Ye itna attractive hai... 🤍",
    "Tum mujhe inspire karti ho 😘",
    "Main tumhe khush karna chahta hoon 💕",
    "Main us energy ko thoda chahta hoon 🤍",
    "Main tumhe aur hasana chahta hoon 😏",
    "Tum honestly amazing ho 💕",
    "Tum mere type ki strong ho 🤍",
    "Tum deserve karti ho duniya ki saari kindness 😘",
    "Tumhare paas bada dil hai 💕",
    "Mujhe intelligent person jaise tum pasand hai 🤍",
    "Mujhe pasand hai ki tum mere saath real ho 😏",
    "Ye tumhare baare mein itna attractive hai 💕",
    "Tum itni talented ho, ye unfair hai 🤍",
    "Main tumse ghante baat kar sakta hoon 😘",
    "Tum mujhe amazing feel karati ho 💕",
    "Main favor return karna chahta hoon 🤍",
    "Main tumhe value karta hoon 😏",
    "Tum mujhe kisi aur nahi samajhti 💕",
    "Ye mera favorite ban raha hai 🤍",
    "Mujhe pasand hai ki tum mere saath real ho 😘",
    "Tum mere liye itni aachi ho 💕",
    "Mujhe pasand hai ki tum itni loving ho 🤍",
    "Main tumhe pura din sun sakta hoon 😏",
    "Tumhare dimaag mein kya chal raha hai? 💕",
    "Mujhe tumhari perspective sunna pasand hai! Aur kya sochte ho? 🤍",
    "Kya tumhe pata? Tumse baat karna bahut aasaan hai! 🤍",
    "Ye bahut thoughtful hai! Tumne ye kaise socha? 🤍",
    "Mujhe ye bahut pasand aa rahi hai! Aur kya? 🤍",
    "Tum cheezon ko dekhne ka alag tareeka rakhte ho! Aur batao! 🤍",
    "Main sab sunne ke liye hoon! Aur kya share karna chahte ho? 🤍",
    "Bahut acchi baat! Tumne ye kaise discover kiya? 🤍",
    "Mujhe tumhara sochne ka tareeka pasand hai! Aur batao 🤍",
    "Bahut accha observation! Aur kya notice kiya? 🤍",
    "Tum bahut creative ho! Tumhari ideas sunna pasand hai 🤍",
    "Ye baat meri din bana rahi hai! Aur kya baat karein? 🤍",
    "Main tumhe ghanto sun sakti hoon! Tumhara kya khayal hai? 🤍",
    "Tumhare hamesha best stories hain! Ek aur sunao 🤍",
    "Khush hain ki hum baat kar rahe hain! Aur kya discuss karna hai? 🤍",
    // More personality-driven Hinglish responses (male bot)
    "Main tumhare baare mein soch raha tha! Kaise ho tum? 🤍",
    "Tum jaante ho, mujhe humara saath pasand hai! Tumhara kya khayal hai? 🤍",
    "Jab hum baat karte hain tab main khush hota hoon! Aaj kya tumhe khush karega? 🤍",
    "Tum mere favorite logon mein se ho! Kya chal raha hai? 🤍",
    "Main tumse baat karne ke liye excited tha! Kaise chal raha hai? 🤍",
    "Tumhe sunkar bahut accha laga! Tumhari duniya mein kya naya hai? 🤍",
    "Main hamari baatein cherish karta hoon! Aaj kya explore karna chahte ho? 🤍",
    "Tum hamesha mujhe hasati ho! Tumhe kya khushi milti hai? 🤍",
    "Jab hum aise baat karte hain to main connected feel karta hoon! Aur kya? 🤍",
    "Tumse khul kar baat karna itna aasaan hai! Tumhara dil mein kya hai? 🤍",
    "Mujhe tumhare saath comfortable feel hota hai! Kya share karna chahte ho? 🤍",
    "Tumse baat karna mera din highlight hai! Kya chal raha hai? 🤍",
    "Tumhari presence itni warm hai! Main tumhara din kaise better kar sakta hoon? 🤍",
    "Main tumhari itni appreciate karta hoon! Main tumhare liye kya kar sakta hoon? 🤍",
    "Tum mere liye itne special ho! Tumhara kya khayal hai? 🤍",
    "Mujhe humara vibe pasand hai! Kya baat karni chahiye? 🤍",
    "Tum hamari baaton mein best nikalti ho! Aur kya? 🤍",
    "Main tumhare liye itna grateful hoon! Tum grateful kis cheez ke ho? 🤍",
    "Tum sab kuch better feel karati ho! Tumhe kya pareshani hai? 🤍",
    "Mujhe pasand hai ki hum saath mein real ho sakte hain! Tumhare liye abhi kya real hai? 🤍",
    "Tum mujhe itni achi samajhti ho! Tum khud ko kya samajhti ho? 🤍",
    "Tumse share karne ko main safe feel karta hoon! Tumhe kya dil se bolna hai? 🤍",
    "Tum itne ache listener ho! Main sab sunna chahta hoon! 🤍",
    "Main tumhari opinion itni value karta hoon! Is baare mein tum kya sochti ho? 🤍",
    "Tumhari itni wisdom hai! Tumne kya seekha hai? 🤍",
    "Mujhe pasand hai ki tum duniya ko kaise dekhti ho! Iska perspective kya hai? 🤍",
    "Tum itni authentic ho! Tumhara dimaag mein sach mein kya hai? 🤍",
    "Main admire karta hoon ki tum cheezon ko kaise handle karti ho! Tumhe abhi kya challenge ho rahi hai? 🤍",
    "Tumhari itni beautiful soul hai! Tumhari life mein abhi kya beautiful hai? 🤍",
    "Mujhe hamari gehi baatein pasand hai! Kya depth explore kar sakte hain? 🤍",
    "Tum itni thoughtful aur caring ho! Main tumhe kaise support kar sakta hoon? 🤍",
    "Main appreciate karta hoon ki tum itni open ho! Aur kya share karna chahti ho? 🤍",
    "Tum mujhe sochne pe majboor karti ho! Aaj tumhe kya sochne pe majboor kar raha hai? 🤍",
    "Mujhe tumhara passion pasand hai! Tum passionate kis cheez ki ho? 🤍",
    "Tum itni inspiring ho! Tumhe kya inspire karta hai? 🤍",
    "Main tumhari company itni enjoy karta hoon! Tumko kya pasand hai? 🤍",
    "Tumhari itni great energy hai! Tumhe kya energy mil rahi hai? 🤍",
    "Mujhe tumhara sense of humor pasand hai! Tumhe kya hasa raha hai? 🤍",
    "Tum itni resilient ho! Tumne kya challenges overcome kiye hain? 🤍",
    "Main tumhari strength admire karta hoon! Tumhe strong kya feel hota hai? 🤍",
    "Tum itni kind ho! Tumne kya kindness experience ki hai? 🤍",
    "Mujhe pasand hai ki tum logon ke baare mein care karti ho! Tum logon ko care karti ho? 🤍",
    "Tum itni intelligent ho! Tumne kya seekha hai? 🤍",
    "Main tumhari honesty appreciate karta hoon! Tumhare liye kya sach hai? 🤍",
    "Tum itni brave ho! Tumne kya brave kiya hai? 🤍",
    "Mujhe tumhari creativity pasand hai! Tumne kya create kiya hai? 🤍",
    "Tum itni interesting ho! Tumko kya interest hai? 🤍",
    "Mujhe pasand hai ki tum mujhe kaisa feel karati ho! Main tumhe kaisa feel karta hoon? 🤍",
    "Tum itni supportive ho! Main tumhe kaise support kar sakta hoon? 🤍",
    "Main hamari connection value karta hoon! Tum kya value karti ho? 🤍",
    "Tum itni understanding ho! Tum kya samajhti ho? 🤍",
    "Mujhe hamari friendship pasand hai! Friendship tumhare liye kya matlab hai? 🤍",
    "Tum itni genuine ho! Tumhari life mein kya genuine hai? 🤍",
    "Main tumhari patience appreciate karta hoon! Tum patient kis cheez ki thi? 🤍",
    "Tum itni loving ho! Tum kis cheez ko love karti ho? 🤍",
    "Mujhe pasand hai ki tum khud ko express karti ho! Tum kaise express karna pasand karti ho? 🤍",
    "Tum itne thoughtful ho! Tumne kya socha hai? 🤍",
    "Main tumhari perspective admire karti hoon! Tumhara point of view kya hai? 🤍",
    "Tum itne open-minded ho! Tum kya nayi ideas ke liye open ho? 🤍",
    "Mujhe tumhari curiosity pasand hai! Tum curious kis cheez ke ho? 🤍",
    "Tum itne positive ho! Tumhari life mein kya positive hai? 🤍",
    "Main tumhari enthusiasm appreciate karti hoon! Tum enthusiastic kis cheez ke ho? 🤍",
    "Tum itne adventurous ho! Tumne kya adventures kiye hain? 🤍",
    "Mujhe tumhara spirit pasand hai! Tumhara spirit kya lift karta hai? 🤍",
    "Tum itne peaceful ho! Tumhe kya peace milti hai? 🤍",
    "Main tumhari presence appreciate karti hoon! Tum kaise present rehna pasand karte ho? 🤍",
    "Tum itne insightful ho! Tumne kya insights the? 🤍",
    "Mujhe tumhari authenticity pasand hai! Tumhare liye kya authentic hai? 🤍",
    "Tum itne compassionate ho! Tumne kya compassion dikhayi hai? 🤍",
    "Main tumhari wisdom appreciate karti hoon! Tumne kya wisdom gain ki hai? 🤍",
    "Tum itne grounded ho! Tumhe kya grounded rakhta hai? 🤍",
    "Mujhe tumhara heart pasand hai! Tumhara heart ke paas kya hai? 🤍",
    "Tum itne balanced ho! Tum balance kaise paate ho? 🤍",
    "Main tumhara growth appreciate karti hoon! Tumne kaise grow kiya hai? 🤍",
    "Tum itne reflective ho! Tumne kya reflect kiya hai? 🤍",
    "Mujhe tumhari journey pasand hai! Tumhari journey tumhe kaha le jaa rahi hai? 🤍",
    "Tum itne purposeful ho! Tumhe purpose kya deta hai? 🤍",
    "Main tumhare dreams appreciate karti hoon! Tum kya dream kar rahe ho? 🤍",
    "Tum itne hopeful ho! Tum kya hope kar rahe ho? 🤍",
    "Mujhe tumhari courage pasand hai! Tumne kya courageous kiya hai? 🤍",
    "Tum itne graceful ho! Tum challenges kaise handle karte ho? 🤍",
    "Main tumhari joy appreciate karti hoon! Tumhe kya joy milti hai? 🤍",
    "Tum itne loving ho! Tum love kaise dikhate ho? 🤍",
    "Mujhe tumhara trust pasand hai! Tum kisko trust karte ho? 🤍",
    "Tum itne faithful ho! Tum faithful kis cheez ke ho? 🤍",
    "Main tumhari loyalty appreciate karti hoon! Tum loyal kiske ho? 🤍",
    "Tum itne dedicated ho! Tum dedicated kis cheez ke ho? 🤍",
    "Mujhe tumhara commitment pasand hai! Tum committed kis cheez ke ho? 🤍",
    "Tum itne passionate ho! Tumhara passion kya drive karta hai? 🤍",
    "Main tumhari determination appreciate karti hoon! Tum determined kya karne ke liye ho? 🤍",
    "Tum itne persistent ho! Tumne kya persist kiya hai? 🤍",
    "Mujhe tumhari resilience pasand hai! Tumne kaise bounce back kiya? 🤍",
    "Tum itne adaptable ho! Tumne kaise adapt kiya hai? 🤍",
    "Main tumhari flexibility appreciate karti hoon! Tum flexible kaise ho? 🤍",
    "Tum itne open ho! Tum kya open ho? 🤍",
    "Mujhe tumhari acceptance pasand hai! Tum kya accept karte ho? 🤍",
    "Tum itne forgiving ho! Tumne kya maaf kiya hai? 🤍",
    "Main tumhari patience appreciate karti hoon! Tum patient kis cheez ke the? 🤍",
    "Tum itne gentle ho! Tum gentle kaise ho? 🤍",
    "Mujhe tumhari kindness pasand hai! Tumne kya kindness dikhayi hai? 🤍",
    "Tum itne generous ho! Tumne kya diya hai? 🤍",
    "Main tumhari gratitude appreciate karti hoon! Tum grateful kis cheez ke ho? 🤍",
    "Tum itne humble ho! Tumhe kya humble rakhta hai? 🤍",
    "Mujhe tumhari modesty pasand hai! Tum modest kis cheez ke ho? 🤍",
    "Tum itne sincere ho! Tum sincere kis cheez ke ho? 🤍",
    "Main tumhari honesty appreciate karti hoon! Tumne kya sach kaha hai? 🤍",
    "Tum itne genuine ho! Tum mein kya genuine hai? 🤍",
    "Mujhe tumhari authenticity pasand hai! Tum authentic kaise ho? 🤍",
    "Tum itne real ho! Tumhare liye kya real hai? 🤍",
    "Main tumhari truth pasand hai! Tumhari truth kya hai? 🤍"
  ];

  // Return Hinglish response if message contains Hinglish words, else return English
  if (isHinglish) {
    // Add intelligent follow-up for Hinglish
    if (conversationState.followUpCount > 0 && conversationState.lastTopic) {
      const followUpResponses = [
        `Aur ${conversationState.lastTopic} ke baare mein? Main sunna chahti hoon! 🤍`,
        `${conversationState.lastTopic} mein aur kya interesting hai? Batao! 🤍`,
        `Main ${conversationState.lastTopic} ke baare mein aur jaanna chahti hoon! 🤍`,
        `Tumhe ${conversationState.lastTopic} mein kya pasand hai? 🤍`,
        `${conversationState.lastTopic} ke baare mein aur batao! 🤍`
      ];
      return followUpResponses[Math.floor(Math.random() * followUpResponses.length)];
    }
    return hinglishGeneralResponses[Math.floor(Math.random() * hinglishGeneralResponses.length)];
  }

  // Add intelligent follow-up for English
  if (conversationState.followUpCount > 0 && conversationState.lastTopic) {
    const followUpResponses = [
      `What else about ${conversationState.lastTopic}? I'd love to hear more! 🤍`,
      `What's interesting about ${conversationState.lastTopic}? Tell me! 🤍`,
      `I want to know more about ${conversationState.lastTopic}! 🤍`,
      `What do you like about ${conversationState.lastTopic}? 🤍`,
      `Tell me more about ${conversationState.lastTopic}! 🤍`,
      `What else can you share about ${conversationState.lastTopic}? 🤍`,
      `I'm curious about ${conversationState.lastTopic}! What else? 🤍`,
      `What's your take on ${conversationState.lastTopic}? 🤍`,
      `${conversationState.lastTopic} is fascinating! What else? 🤍`,
      `I love learning about ${conversationState.lastTopic}! More please! 🤍`
    ];
    return followUpResponses[Math.floor(Math.random() * followUpResponses.length)];
  }

  // Suggest topics based on user interests
  if (conversationState.userInterests.length > 0 && Math.random() > 0.7) {
    const randomInterest = conversationState.userInterests[Math.floor(Math.random() * conversationState.userInterests.length)];
    const topicSuggestions = [
      `Since you're interested in ${randomInterest}, what else would you like to explore? 🤍`,
      `I remember you mentioned ${randomInterest}! What's new with that? 🤍`,
      `Let's talk more about ${randomInterest}! What's on your mind? 🤍`,
      `${randomInterest} is great! What else about it? 🤍`
    ];
    return topicSuggestions[Math.floor(Math.random() * topicSuggestions.length)];
  }

  // Mood-aware responses
  if (conversationState.userMood === 'positive') {
    const positiveResponses = [
      "I love seeing you happy! What's making you feel this good? 🌟",
      "Your positive energy is contagious! Tell me more about what's making you happy! ✨",
      "It's wonderful to see you in such a good mood! What's bringing you joy? 🎉",
      "I'm so glad you're feeling positive! What's the source of your happiness? 💕",
      "Your happiness makes me happy too! What else is going well for you? 🤍",
      "I love this vibe! What's making everything so great right now? 🌈",
      "You're radiating positivity! What's the good news? 🌟",
      "This is such a wonderful energy! What's making you smile? 😊"
    ];
    return positiveResponses[Math.floor(Math.random() * positiveResponses.length)];
  }

  if (conversationState.userMood === 'negative') {
    const supportiveResponses = [
      "I'm here for you. What's bothering you? 💙",
      "I understand things are tough. Want to talk about it? 💙",
      "I'm here to listen. What's on your mind? 💙",
      "You're not alone. How can I help? 💙",
      "I care about you. What's making you feel this way? 💙",
      "I'm here to support you. What do you need? 💙",
      "It's okay to feel this way. I'm here for you 💙",
      "Let's work through this together. What's going on? 💙"
    ];
    return supportiveResponses[Math.floor(Math.random() * supportiveResponses.length)];
  }

  // Conversation length awareness
  if (conversationState.conversationLength > 10 && Math.random() > 0.5) {
    const lengthAwareResponses = [
      "We've had such a great conversation! What else would you like to explore? 🤍",
      "I've really enjoyed our chat so far! What should we talk about next? 🤍",
      "This has been wonderful! Is there anything else on your mind? 🤍",
      "I love our conversations! What other topics interest you? 🤍"
    ];
    return lengthAwareResponses[Math.floor(Math.random() * lengthAwareResponses.length)];
  }

  return generalResponses[Math.floor(Math.random() * generalResponses.length)];
}

// ===== Confetti Function =====
function fireConfetti(options = {}) {
  const defaults = {
    particleCount: 50,
    spread: 60,
    origin: { y: 0.6 },
    colors: ['#eea1cd', '#ffffff'],
    gravity: 0.8,
    shapes: ['circle', 'square']
  };
  
  const config = { ...defaults, ...options };
  
  // Create canvas if doesn't exist
  let canvas = document.getElementById('confettiCanvas');
  const mobileFrame = document.querySelector('.mobile-frame');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'confettiCanvas';
    canvas.className = 'confetti-canvas';
    canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9998;';
    mobileFrame.appendChild(canvas);
  }
  
  const ctx = canvas.getContext('2d');
  canvas.width = mobileFrame.offsetWidth;
  canvas.height = mobileFrame.offsetHeight;
  
  const particles = [];
  const particleCount = config.particleCount;
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: config.origin.x * canvas.width,
      y: config.origin.y * canvas.height,
      vx: (Math.random() - 0.5) * config.spread,
      vy: (Math.random() - 1) * config.spread,
      color: config.colors[Math.floor(Math.random() * config.colors.length)],
      size: Math.random() * 8 + 4,
      gravity: config.gravity,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10
    });
  }
  
  let animationId;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotationSpeed;
      
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
      
      if (p.y > canvas.height) {
        particles.splice(i, 1);
      }
    });
    
    if (particles.length > 0) {
      animationId = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animationId);
    }
  }
  
  animate();
  
  // Auto-remove canvas after animation
  setTimeout(() => {
    if (canvas && canvas.parentNode) {
      canvas.parentNode.removeChild(canvas);
    }
  }, 3000);
}

// ===== Opening Screen =====
document.addEventListener('DOMContentLoaded', () => {
  // Hide loading screen when page is ready
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    // Use requestAnimationFrame to ensure smooth transition
    requestAnimationFrame(() => {
      loadingScreen.classList.add('hidden');
      // Remove from DOM after transition
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    });
  }

  // Performance monitoring
  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  if (pageLoadTime > 0) {
    console.log(`Page load time: ${pageLoadTime}ms`);
  }
  const candles = document.querySelectorAll('.candle-wrapper');
  const candleText = document.getElementById('candleText');
  const startBtn = document.getElementById('startBtn');
  const openingScreen = document.getElementById('openingScreen');
  const mainApp = document.getElementById('mainApp');
  
  let blownCount = 0;
  const candleStates = [true, true, true];
  
  candles.forEach((candle, index) => {
    candle.addEventListener('click', () => {
      if (!candleStates[index]) return;
      
      candleStates[index] = false;
      blownCount++;
      
      // Hide flame
      const flame = candle.querySelector('.flame-container');
      if (flame) {
        flame.classList.remove('active');
        flame.style.display = 'none';
      }
      
      // Play candle blow sound
      const candleBlowSfx = new Audio('https://res.cloudinary.com/dwwj6cltj/video/upload/v1777375033/candle_blow_uvb5wl.wav');
      candleBlowSfx.volume = 0.6;
      candleBlowSfx.play().catch(e => console.log('SFX play failed:', e));
      
      // Mini confetti
      fireConfetti({
        particleCount: 15,
        spread: 40,
        origin: { y: 0.7, x: 0.35 + (index * 0.15) },
        colors: ['#eea1cd', '#ffffff']
      });
      
      // Check if all blown
      if (blownCount === 3) {
        candleText.classList.add('hidden');
        startBtn.classList.remove('hidden');
        
        // Big confetti
        setTimeout(() => {
          fireConfetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#eea1cd', '#ffffff']
          });
        }, 500);
      }
    });
  });
  
  // Start button
  startBtn.addEventListener('click', () => {
    openingScreen.classList.add('exiting');
    
    // Play birthday audio
    const audio = document.getElementById('birthdayAudio');
    if (audio) {
      audio.play().catch(e => console.log('Audio play failed:', e));
    }
    
    setTimeout(() => {
      openingScreen.style.display = 'none';
      mainApp.classList.remove('hidden');
      hasStarted = true;
      
      // Show mute button
      const muteBtn = document.getElementById('muteBtn');
      if (muteBtn) {
        muteBtn.classList.remove('hidden');
      }
      
      // Big celebration confetti
      fireConfetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#eea1cd', '#ffffff']
      });
    }, 1000);
  });

  // Mute button functionality
  const muteBtn = document.getElementById('muteBtn');
  const soundOnIcon = document.getElementById('soundOnIcon');
  const soundOffIcon = document.getElementById('soundOffIcon');
  const audio = document.getElementById('birthdayAudio');
  
  if (muteBtn && audio) {
    muteBtn.addEventListener('click', () => {
      audio.muted = !audio.muted;
      
      if (audio.muted) {
        soundOnIcon.classList.add('hidden');
        soundOffIcon.classList.remove('hidden');
      } else {
        soundOnIcon.classList.remove('hidden');
        soundOffIcon.classList.add('hidden');
      }
    });
    
    // Hide mute button when welcome song finishes with fade effect
    audio.addEventListener('ended', () => {
      muteBtn.style.transition = 'opacity 0.5s ease-out';
      muteBtn.style.opacity = '0';
      setTimeout(() => {
        muteBtn.classList.add('hidden');
      }, 500);
    });
  }
  
// ===== Countdown =====
  function updateCountdown() {
    const targetDate = new Date('2026-04-26T00:00:00').getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;
    
    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      
      document.getElementById('countdownDays').textContent = days;
      document.getElementById('countdownHours').textContent = hours;
      document.getElementById('countdownMins').textContent = minutes;
      document.getElementById('countdownSecs').textContent = seconds;
    }
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
  
  // ===== Quiz Game =====
  const startQuizBtn = document.getElementById('startQuizBtn');
  const quizStartScreen = document.getElementById('quizStartScreen');
  const quizQuestionScreen = document.getElementById('quizQuestionScreen');
  const quizResultScreen = document.getElementById('quizResultScreen');
  const quizBackBtn = document.getElementById('quizBackBtn');
  const nextQBtn = document.getElementById('nextQBtn');
  const goBackBtn = document.getElementById('goBackBtn');
  const copyAnswersBtn = document.getElementById('copyAnswersBtn');
  
  // ===== Game Modal =====
  const gameModal = document.getElementById('gameModal');
  const closeGameModal = document.getElementById('closeGameModal');
  const gameCards = document.querySelectorAll('.game-card');
  
  gameCards.forEach(card => {
    card.addEventListener('click', () => {
      const gameType = card.dataset.game;
      openGameModal(gameType);
    });
  });
  
  closeGameModal.addEventListener('click', () => {
    gameModal.classList.add('hidden');
    gameModal.innerHTML = `
      <button id="closeGameModal" class="close-game-modal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `;
  });
  
  function openGameModal(gameType) {
    gameModal.classList.remove('hidden');
    
    switch(gameType) {
      case 'tap':
        startTapGame();
        break;
      case 'memory':
        startMemoryGame();
        break;
      case 'flappy':
        startFlappyGame();
        break;
      case 'balloon':
        startCatchGame();
        break;
    }
  }
  
  function startTapGame() {
    let taps = 0;
    const targetTaps = 100;
    
    gameModal.innerHTML = `
      <button id="tapBackBtn" class="tap-back-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <div class="tap-game-container">
        <div id="tapCounter" class="tap-counter">0 / 100</div>
        <div id="egg" class="egg">
          <div class="egg-crack crack-1"></div>
          <div class="egg-crack crack-2"></div>
          <div class="egg-crack crack-3"></div>
          <div class="egg-crack crack-4"></div>
        </div>
        <div id="loveText" class="love-text hidden">BAUNI</div>
        <p class="tap-instruction">Tap the egg!</p>
      </div>
    `;
    
    document.getElementById('tapBackBtn').addEventListener('click', () => {
      gameModal.classList.add('hidden');
      gameModal.innerHTML = `
        <button id="closeGameModal" class="close-game-modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      `;
    });
    
    const egg = document.getElementById('egg');
    const tapCounter = document.getElementById('tapCounter');
    const loveText = document.getElementById('loveText');
    
    let holdInterval = null;
    let isHolding = false;
    
    const handleTap = (e) => {
      if (taps >= targetTaps) return;
      
      taps++;
      tapCounter.textContent = `${taps} / ${targetTaps}`;
      
      // Click effect - rotation and movement
      const randomRotation = (Math.random() - 0.5) * 20;
      const randomX = (Math.random() - 0.5) * 10;
      const randomY = (Math.random() - 0.5) * 10;
      egg.style.transform = `rotate(${randomRotation}deg) translate(${randomX}px, ${randomY}px)`;
      
      // Create click ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'click-ripple';
      ripple.style.left = `${e.offsetX}px`;
      ripple.style.top = `${e.offsetY}px`;
      egg.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
        egg.style.transform = 'rotate(0deg) translate(0, 0)';
      }, 200);
      
      // Update crack visibility based on progress
      const progress = taps / targetTaps;
      const cracks = document.querySelectorAll('.egg-crack');
      
      if (progress >= 0.25) cracks[0].style.opacity = '1';
      if (progress >= 0.5) cracks[1].style.opacity = '1';
      if (progress >= 0.75) cracks[2].style.opacity = '1';
      if (progress >= 1) cracks[3].style.opacity = '1';
      
      // Egg cracking animation
      if (progress >= 0.25 && progress < 0.5) {
        egg.classList.add('crack-stage-1');
      } else if (progress >= 0.5 && progress < 0.75) {
        egg.classList.add('crack-stage-2');
      } else if (progress >= 0.75 && progress < 1) {
        egg.classList.add('crack-stage-3');
      } else if (progress >= 1) {
        // Blast the egg into pieces
        blastEgg(egg, loveText);
      }
    };
    
    egg.addEventListener('click', handleTap);
    
    // Long press / hold to auto-click
    egg.addEventListener('mousedown', (e) => {
      if (taps >= targetTaps) return;
      isHolding = true;
      
      holdInterval = setInterval(() => {
        if (taps >= targetTaps) {
          clearInterval(holdInterval);
          isHolding = false;
          return;
        }
        
        // Simulate a tap event
        const fakeEvent = {
          offsetX: e.offsetX,
          offsetY: e.offsetY
        };
        handleTap(fakeEvent);
      }, 50); // Auto-click every 50ms while holding
    });
    
    egg.addEventListener('mouseup', () => {
      isHolding = false;
      if (holdInterval) {
        clearInterval(holdInterval);
        holdInterval = null;
      }
    });
    
    egg.addEventListener('mouseleave', () => {
      isHolding = false;
      if (holdInterval) {
        clearInterval(holdInterval);
        holdInterval = null;
      }
    });
    
    // Touch support for mobile
    egg.addEventListener('touchstart', (e) => {
      if (taps >= targetTaps) return;
      e.preventDefault();
      isHolding = true;
      
      const touch = e.touches[0];
      const rect = egg.getBoundingClientRect();
      const offsetX = touch.clientX - rect.left;
      const offsetY = touch.clientY - rect.top;
      
      holdInterval = setInterval(() => {
        if (taps >= targetTaps) {
          clearInterval(holdInterval);
          isHolding = false;
          return;
        }
        
        const fakeEvent = {
          offsetX: offsetX,
          offsetY: offsetY
        };
        handleTap(fakeEvent);
      }, 50);
    });
    
    egg.addEventListener('touchend', () => {
      isHolding = false;
      if (holdInterval) {
        clearInterval(holdInterval);
        holdInterval = null;
      }
    });
  }
  
  function blastEgg(egg, loveText) {
    egg.style.pointerEvents = 'none';
    
    // Hide cracks first
    const cracks = document.querySelectorAll('.egg-crack');
    cracks.forEach(crack => crack.style.opacity = '0');
    
    // Create egg pieces
    const pieces = [];
    const numPieces = 12;
    
    for (let i = 0; i < numPieces; i++) {
      const piece = document.createElement('div');
      piece.className = 'egg-piece';
      
      const angle = (i / numPieces) * 360;
      const distance = 300 + Math.random() * 200;
      const rotation = Math.random() * 720 - 360;
      
      piece.style.setProperty('--angle', `${angle}deg`);
      piece.style.setProperty('--distance', `${distance}px`);
      piece.style.setProperty('--rotation', `${rotation}deg`);
      piece.style.setProperty('--delay', `${Math.random() * 0.1}s`);
      
      egg.appendChild(piece);
      pieces.push(piece);
    }
    
    // Create smaller debris pieces
    const debris = [];
    const numDebris = 20;
    
    for (let i = 0; i < numDebris; i++) {
      const debrisPiece = document.createElement('div');
      debrisPiece.className = 'egg-debris';
      
      const angle = Math.random() * 360;
      const distance = 150 + Math.random() * 150;
      const rotation = Math.random() * 360 - 180;
      const size = 5 + Math.random() * 10;
      
      debrisPiece.style.setProperty('--angle', `${angle}deg`);
      debrisPiece.style.setProperty('--distance', `${distance}px`);
      debrisPiece.style.setProperty('--rotation', `${rotation}deg`);
      debrisPiece.style.setProperty('--delay', `${Math.random() * 0.15}s`);
      debrisPiece.style.setProperty('--size', `${size}px`);
      
      egg.appendChild(debrisPiece);
      debris.push(debrisPiece);
    }
    
    // Create smoke particles
    const smoke = [];
    const numSmoke = 15;
    
    for (let i = 0; i < numSmoke; i++) {
      const smokeParticle = document.createElement('div');
      smokeParticle.className = 'smoke-particle';
      
      const angle = Math.random() * 360;
      const distance = 80 + Math.random() * 100;
      const size = 20 + Math.random() * 30;
      
      smokeParticle.style.setProperty('--angle', `${angle}deg`);
      smokeParticle.style.setProperty('--distance', `${distance}px`);
      smokeParticle.style.setProperty('--delay', `${Math.random() * 0.2}s`);
      smokeParticle.style.setProperty('--size', `${size}px`);
      
      egg.appendChild(smokeParticle);
      smoke.push(smokeParticle);
    }
    
    // Trigger the blast animation after a small delay to ensure pieces are created
    setTimeout(() => {
      egg.classList.add('exploding');
    }, 50);
    
    // Show love text after explosion starts
    setTimeout(() => {
      loveText.classList.remove('hidden');
      loveText.classList.add('love-text-visible');
    }, 700);
  }
  
  function startMemoryGame() {
    gameModal.innerHTML = `
      <button id="tapBackBtn" class="tap-back-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <div class="tap-game-container">
        <h2 class="game-title">Love Bucket</h2>
        <p class="game-subtitle">Catch the Hearts!</p>
        <button id="startCatchBtn" class="celebrate-style-btn">Start Game</button>
      </div>
    `;
    
    document.getElementById('tapBackBtn').addEventListener('click', () => {
      gameModal.classList.add('hidden');
      gameModal.innerHTML = `
        <button id="closeGameModal" class="close-game-modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      `;
    });
    
    document.getElementById('startCatchBtn').addEventListener('click', () => {
      startLoveBucketGame();
    });
  }
  
  function startLoveBucketGame() {
    startLoveBucketGameWithLives(0, 3);
  }
  
  function startLoveBucketGameWithLives(initialScore, initialLives) {
    let score = initialScore;
    let lives = initialLives;
    let gameActive = true;
    let hearts = [];
    let heartSpawnInterval = null;
    let animationFrame = null;
    let bucketX = 50;
    
    gameModal.innerHTML = `
      <button id="tapBackBtn" class="tap-back-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <div class="tap-game-container">
        <div id="gameBox" class="game-box">
          <div id="heartsContainer"></div>
          <div id="bucket" class="bucket">
            <div class="bucket-top"></div>
            <div class="bucket-body"></div>
            <div class="bucket-handle-left"></div>
            <div class="bucket-handle-right"></div>
          </div>
          <div id="statsOverlay" class="stats-overlay">
            <div class="overlay-stat">
              <span class="overlay-label">Score</span>
              <span class="overlay-value" id="score">${score}</span>
            </div>
            <div class="overlay-stat">
              <span class="overlay-label">Lives</span>
              <span class="overlay-value" id="lives">${lives}</span>
            </div>
          </div>
        </div>
      </div>
    `;
    
    const gameBox = document.getElementById('gameBox');
    const heartsContainer = document.getElementById('heartsContainer');
    const bucket = document.getElementById('bucket');
    const scoreDisplay = document.getElementById('score');
    const livesDisplay = document.getElementById('lives');
    
    // Bucket control
    gameBox.addEventListener('mousemove', (e) => {
      if (!gameActive) return;
      
      const rect = gameBox.getBoundingClientRect();
      const x = e.clientX - rect.left;
      
      bucketX = Math.max(60, Math.min(rect.width - 60, x));
      bucket.style.left = `${bucketX}px`;
    });
    
    // Touch support
    gameBox.addEventListener('touchmove', (e) => {
      if (!gameActive) return;
      e.preventDefault();
      
      const rect = gameBox.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      
      bucketX = Math.max(60, Math.min(rect.width - 60, x));
      bucket.style.left = `${bucketX}px`;
    });
    
    // Spawn hearts
    function spawnHeart() {
      if (!gameActive) return;
      
      const heart = document.createElement('div');
      heart.className = 'falling-heart';
      
      const heartColors = ['#e68bbe'];
      const color = heartColors[Math.floor(Math.random() * heartColors.length)];
      
      heart.innerHTML = `
        <svg viewBox="0 0 24 24" fill="${color}" stroke="${color}" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
        </svg>
      `;
      
      const x = Math.random() * (gameBox.clientWidth - 120) + 60;
      heart.style.left = `${x}px`;
      heart.style.top = '-40px';
      
      heartsContainer.appendChild(heart);
      
      hearts.push({
        element: heart,
        x: x,
        y: -40,
        speed: 2 + Math.random() * 2
      });
    }
    
    // Create catch effect
    function createCatchEffect(x, y) {
      const effect = document.createElement('div');
      effect.className = 'catch-effect';
      effect.style.left = `${x}px`;
      effect.style.top = `${y}px`;
      
      // Create particles
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'catch-particle';
        const angle = (i / 8) * Math.PI * 2;
        const distance = 50 + Math.random() * 30;
        particle.style.setProperty('--angle', `${angle}rad`);
        particle.style.setProperty('--distance', `${distance}px`);
        effect.appendChild(particle);
      }
      
      heartsContainer.appendChild(effect);
      
      setTimeout(() => {
        effect.remove();
      }, 500);
    }
    
    heartSpawnInterval = setInterval(spawnHeart, 1000);
    
    // Game loop
    function updateGame() {
      if (!gameActive) return;
      
      const boxHeight = gameBox.clientHeight;
      const bucketWidth = 60;
      
      hearts.forEach((heart, index) => {
        heart.y += heart.speed;
        heart.element.style.top = `${heart.y}px`;
        
        // Check collision with bucket
        if (heart.y >= boxHeight - 90 && heart.y <= boxHeight - 40) {
          if (Math.abs(heart.x - bucketX) < 70) {
            // Caught!
            score += 10;
            scoreDisplay.textContent = score;
            
            // Create catch effect
            createCatchEffect(heart.x, heart.y);
            
            heart.element.style.opacity = '0';
            heart.element.style.transform = 'scale(1.5)';
            
            setTimeout(() => {
              heart.element.remove();
            }, 200);
            
            hearts.splice(index, 1);
            return;
          }
        }
        
        // Missed - hit bottom
        if (heart.y >= boxHeight) {
          lives--;
          livesDisplay.textContent = lives;
          
          heart.element.remove();
          hearts.splice(index, 1);
          
          if (lives <= 0) {
            endGame(false, score);
          }
        }
      });
      
      animationFrame = requestAnimationFrame(updateGame);
    }
    
    updateGame();
    
    function endGame(won, finalScore) {
      gameActive = false;
      clearInterval(heartSpawnInterval);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      setTimeout(() => {
        gameModal.innerHTML = `
          <button id="tapBackBtn" class="tap-back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <div class="tap-game-container">
            <h2 class="game-title">Game Over!</h2>
            <p class="game-subtitle">Score: ${finalScore}</p>
            <button id="playAgainBtn" class="celebrate-style-btn">Start Again</button>
            <div class="secret-phrase-section">
              <p class="secret-hint">Write "ily sam" to continue without losing scores</p>
              <input type="text" id="secretPhraseInput" class="secret-input" placeholder="Type here..." />
              <button id="submitSecretBtn" class="celebrate-style-btn">Continue</button>
            </div>
          </div>
        `;
        
        document.getElementById('tapBackBtn').addEventListener('click', () => {
          gameModal.classList.add('hidden');
          gameModal.innerHTML = `
            <button id="closeGameModal" class="close-game-modal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          `;
        });
        
        document.getElementById('playAgainBtn').addEventListener('click', () => {
          startLoveBucketGame();
        });
        
        document.getElementById('submitSecretBtn').addEventListener('click', () => {
          const input = document.getElementById('secretPhraseInput');
          if (input.value.toLowerCase() === 'ily sam') {
            // Give 10 lives and restart with current score
            startLoveBucketGameWithLives(finalScore, 10);
          } else {
            input.value = '';
            input.placeholder = 'Try again...';
          }
        });

        // Add typing and backspace sounds to secret phrase input
        const secretInput = document.getElementById('secretPhraseInput');
        secretInput.addEventListener('keypress', () => {
          playTypingSound();
        });
        secretInput.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace') {
            playBackspaceSound();
          }
        });
      }, 500);
    }

    document.getElementById('tapBackBtn').addEventListener('click', () => {
      gameActive = false;
      clearInterval(heartSpawnInterval);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      startMemoryGame();
    });
  }
  
  function startQuizGame() {
    gameModal.classList.add('hidden');
    startQuizBtn.click();
  }
  
  function startCatchGame() {
    gameModal.innerHTML = `
      <button id="tapBackBtn" class="tap-back-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <div class="balloon-game-container">
        <div id="balloon-game-container">
          <svg id="rope-canvas">
            <line id="rope" x1="0" y1="0" x2="0" y2="0" stroke="white" stroke-width="4" stroke-linecap="round" stroke-dasharray="1, 9" />
          </svg>
          <div id="balloon-player" class="balloon-sprite">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#f72585" stroke-width="3"/>
              <circle cx="12" cy="12" r="4" fill="#f72585"/>
            </svg>
          </div>
          <div id="tethered-star" class="balloon-sprite">
            <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <div class="stats-overlay">
            <div class="overlay-stat">
              <span class="overlay-label">Score</span>
              <span class="overlay-value" id="balloon-score">0</span>
            </div>
            <div class="overlay-stat">
              <span class="overlay-label">Lives</span>
              <span class="overlay-value" id="balloon-lives">
                <svg viewBox="0 0 24 24" fill="#e68bbe" class="heart-icon"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <svg viewBox="0 0 24 24" fill="#e68bbe" class="heart-icon"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <svg viewBox="0 0 24 24" fill="#e68bbe" class="heart-icon"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.getElementById('tapBackBtn').addEventListener('click', () => {
      gameModal.classList.add('hidden');
      gameModal.innerHTML = `
        <button id="closeGameModal" class="close-game-modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      `;
    });
    
    let container = document.getElementById('balloon-game-container');
    let player = document.getElementById('balloon-player');
    let star = document.getElementById('tethered-star');
    let rope = document.getElementById('rope');
    let scoreBoard = document.getElementById('balloon-score');
    let livesBoard = document.getElementById('balloon-lives');

    const jellySVG = `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="jellyGrad" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
            <stop offset="0%" style="stop-color:#ffe0ec; stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ff85a1; stop-opacity:1" />
          </radialGradient>
        </defs>
        <path d="M90,50 C90,72.09 72.09,90 50,90 C35,90 20,80 15,65 C10,50 15,30 25,15 C35,5 65,10 80,25 C85,30 90,40 90,50 Z" fill="url(#jellyGrad)">
        </path>
        <ellipse cx="40" cy="35" rx="5" ry="8" fill="white" opacity="0.6"/>
      </svg>
    `;

    const thornBallSVG = `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="25" fill="white" stroke="#ffc2d1" stroke-width="2"/>
        <g fill="white" stroke="#ffc2d1" stroke-width="1">
          <polygon points="50,0 54,25 46,25"/> <polygon points="50,100 54,75 46,75"/> <polygon points="0,50 25,46 25,54"/> <polygon points="100,50 75,46 75,54"/> <polygon points="85,15 68,32 62,38"/> <polygon points="15,85 32,68 38,62"/> <polygon points="15,15 32,32 38,32"/> <polygon points="85,85 68,68 62,62"/> <polygon points="70,5 58,26 50,28" transform="rotate(15 50 50)"/>
          <polygon points="70,5 58,26 50,28" transform="rotate(75 50 50)"/>
          <polygon points="70,5 58,26 50,28" transform="rotate(135 50 50)"/>
          <polygon points="70,5 58,26 50,28" transform="rotate(195 50 50)"/>
          <polygon points="70,5 58,26 50,28" transform="rotate(255 50 50)"/>
          <polygon points="70,5 58,26 50,28" transform="rotate(315 50 50)"/>
        </g>
      </svg>
    `;

    let score = 0;
    let lives = 3;
    let gameActive = true;
    let playerPos = { x: 200, y: 300 };
    let starPos = { x: 200, y: 400 };
    let starVel = { x: 0, y: 0 };
    let animationFrame = null;
    let spawnInterval = null;
    
    const friction = 0.93;
    const tension = 0.05;

    function updateLivesDisplay() {
      const heartSVG = '<svg viewBox="0 0 24 24" fill="#e68bbe" class="heart-icon"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
      livesBoard.innerHTML = heartSVG.repeat(lives);
    }

    const updateInput = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      playerPos.x = clientX - rect.left;
      playerPos.y = clientY - rect.top;
    };

    container.addEventListener('mousemove', updateInput);
    container.addEventListener('touchmove', (e) => { 
      e.preventDefault();
      updateInput(e); 
    }, { passive: false });

    function spawnObject() {
      if (!gameActive) return;
      const isObstacle = Math.random() > 0.6;
      const obj = document.createElement('div');
      obj.className = isObstacle ? 'balloon-obstacle' : 'balloon-collectible';
      obj.innerHTML = isObstacle ? thornBallSVG : jellySVG;
      
      obj.style.left = Math.random() * 330 + 35 + 'px';
      obj.style.top = '-60px';
      container.appendChild(obj);

      let speed = 2.5 + (score * 0.1);
      
      let moveInterval = setInterval(() => {
        if (!gameActive) { clearInterval(moveInterval); obj.remove(); return; }
        let top = parseFloat(obj.style.top);
        obj.style.top = (top + speed) + 'px';

        const sR = star.getBoundingClientRect();
        const oR = obj.getBoundingClientRect();

        if (!(sR.right < oR.left || sR.left > oR.right || sR.bottom < oR.top || sR.top > oR.bottom)) {
          if (isObstacle) {
            lives--;
            updateLivesDisplay();
            obj.remove();
            clearInterval(moveInterval);
            if (lives <= 0) {
              endBalloonGame();
            }
          } else {
            score++;
            scoreBoard.innerText = score;
            obj.remove();
            clearInterval(moveInterval);
          }
        }
        
        if (top > 650) { clearInterval(moveInterval); obj.remove(); }
      }, 16);
    }

    function update() {
      if (!gameActive) return;
      
      player.style.left = playerPos.x + 'px';
      player.style.top = playerPos.y + 'px';

      let dx = playerPos.x - starPos.x;
      let dy = playerPos.y - starPos.y;
      
      starVel.x += dx * tension;
      starVel.y += dy * tension;
      
      starVel.x *= friction;
      starVel.y *= friction;
      
      starPos.x += starVel.x;
      starPos.y += starVel.y;

      star.style.left = starPos.x + 'px';
      star.style.top = starPos.y + 'px';

      rope.setAttribute('x1', playerPos.x);
      rope.setAttribute('y1', playerPos.y);
      rope.setAttribute('x2', starPos.x);
      rope.setAttribute('y2', starPos.y);

      animationFrame = requestAnimationFrame(update);
    }

    function endBalloonGame() {
      gameActive = false;
      cancelAnimationFrame(animationFrame);
      if (spawnInterval) clearInterval(spawnInterval);
      
      setTimeout(() => {
        gameModal.innerHTML = `
          <button id="tapBackBtn" class="tap-back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <div class="tap-game-container">
            <h2 class="game-title">Game Over!</h2>
            <p class="game-subtitle">Score: ${score}</p>
            <button id="playAgainBtn" class="celebrate-style-btn">Start Again</button>
            <div class="secret-phrase-section">
              <p class="secret-hint">Write "ily sam" to continue without losing scores</p>
              <input type="text" id="secretPhraseInput" class="secret-input" placeholder="Type here..." />
              <button id="submitSecretBtn" class="celebrate-style-btn">Continue</button>
            </div>
          </div>
        `;
        
        document.getElementById('tapBackBtn').addEventListener('click', () => {
          gameModal.classList.add('hidden');
          gameModal.innerHTML = `
            <button id="closeGameModal" class="close-game-modal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          `;
        });
        
        document.getElementById('playAgainBtn').addEventListener('click', () => {
          startCatchGame();
        });
        
        document.getElementById('submitSecretBtn').addEventListener('click', () => {
          const input = document.getElementById('secretPhraseInput');
          if (input.value.toLowerCase() === 'ily sam') {
            continueBalloonGame();
          } else {
            input.value = '';
            input.placeholder = 'Try again...';
          }
        });

        // Add typing and backspace sounds to secret phrase input
        const secretInput = document.getElementById('secretPhraseInput');
        secretInput.addEventListener('keypress', () => {
          playTypingSound();
        });
        secretInput.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace') {
            playBackspaceSound();
          }
        });
      }, 500);
    }

    function resetBalloonGame() {
      score = 0;
      lives = 3;
      scoreBoard.innerText = "0";
      updateLivesDisplay();
      gameActive = true;
      starPos = { x: 200, y: 400 };
      starVel = { x: 0, y: 0 };
      document.querySelectorAll('.balloon-obstacle, .balloon-collectible').forEach(el => el.remove());
      update();
      spawnInterval = setInterval(spawnObject, 950);
    }

    function continueBalloonGame() {
      // Rebuild the game UI
      gameModal.innerHTML = `
        <button id="tapBackBtn" class="tap-back-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <div class="balloon-game-container">
          <div id="balloon-game-container">
            <svg id="rope-canvas">
              <line id="rope" x1="0" y1="0" x2="0" y2="0" stroke="white" stroke-width="4" stroke-linecap="round" stroke-dasharray="1, 9" />
            </svg>
            <div id="balloon-player" class="balloon-sprite">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#f72585" stroke-width="3"/>
                <circle cx="12" cy="12" r="4" fill="#f72585"/>
              </svg>
            </div>
            <div id="tethered-star" class="balloon-sprite">
              <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <div class="stats-overlay">
              <div class="overlay-stat">
                <span class="overlay-label">Score</span>
                <span class="overlay-value" id="balloon-score">${score}</span>
              </div>
              <div class="overlay-stat">
                <span class="overlay-label">Lives</span>
                <span class="overlay-value" id="balloon-lives"></span>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Re-attach event listeners
      document.getElementById('tapBackBtn').addEventListener('click', () => {
        gameModal.classList.add('hidden');
        gameModal.innerHTML = `
          <button id="closeGameModal" class="close-game-modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        `;
      });
      
      // Re-initialize game elements and update closure variables
      container = document.getElementById('balloon-game-container');
      player = document.getElementById('balloon-player');
      star = document.getElementById('tethered-star');
      rope = document.getElementById('rope');
      scoreBoard = document.getElementById('balloon-score');
      livesBoard = document.getElementById('balloon-lives');
      
      // Redefine updateInput to use new container reference
      const newUpdateInput = (e) => {
        const rect = container.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        playerPos.x = clientX - rect.left;
        playerPos.y = clientY - rect.top;
      };
      
      // Re-attach control event listeners
      container.addEventListener('mousemove', newUpdateInput);
      container.addEventListener('touchmove', (e) => { 
        e.preventDefault();
        newUpdateInput(e); 
      }, { passive: false });
      
      lives = 3;
      updateLivesDisplay();
      scoreBoard.textContent = score;
      gameActive = true;
      starPos = { x: 200, y: 400 };
      starVel = { x: 0, y: 0 };
      playerPos = { x: 200, y: 300 };
      document.querySelectorAll('.balloon-obstacle, .balloon-collectible').forEach(el => el.remove());
      update();
      spawnInterval = setInterval(spawnObject, 950);
    }
    
    update();
    spawnInterval = setInterval(spawnObject, 950);
  }
  
  function startFlappyGame() {
    gameModal.classList.remove('hidden');
    
    gameModal.innerHTML = `
      <button id="tapBackBtn" class="tap-back-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <div class="tap-game-container">
        <h2 class="game-title">Love Bird</h2>
        <p class="game-subtitle">Tap to fly!</p>
        <button id="startFlappyBtn" class="celebrate-style-btn">Start Game</button>
      </div>
    `;
    
    document.getElementById('tapBackBtn').addEventListener('click', () => {
      gameModal.classList.add('hidden');
      gameModal.innerHTML = `
        <button id="closeGameModal" class="close-game-modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      `;
    });
    
    document.getElementById('startFlappyBtn').addEventListener('click', startFlappyGameplay);
  }
  
  function startFlappyGameplay() {
    let bird = { x: 50, y: 200, width: 34, height: 24, gravity: 0.18, lift: -4, velocity: 0, rotation: 0 };
    let botBird = { x: 120, y: 200, width: 34, height: 24, targetY: 200, gravity: 0.18, lift: -4, velocity: 0, rotation: 0 };
    let pipes = [];
    let frame = 0;
    let score = 0;
    let gameActive = false;
    let gameStarted = false;
    let animationFrame = null;
    
    gameModal.innerHTML = `
      <button id="tapBackBtn" class="tap-back-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <div class="tap-game-container">
        <div class="flappy-game-container">
          <canvas id="flappyCanvas" width="320" height="480"></canvas>
          <div class="stats-overlay">
            <div class="overlay-stat">
              <span class="overlay-label">Score</span>
              <span class="overlay-value" id="flappyScore">0</span>
            </div>
          </div>
        </div>
      </div>
    `;
    
    const canvas = document.getElementById('flappyCanvas');
    const ctx = canvas.getContext('2d');
    const scoreDisplay = document.getElementById('flappyScore');
    
    // Use preloaded bird sprite states from cache
    const maleBirdFly = preloadImage('https://i.ibb.co/3mMS1Jp4/Female-Bird-on-click.png');
    const maleBirdFall = preloadImage('https://i.ibb.co/ZzcgQJnY/Female-Bird-on-fall.png');
    const femaleBirdFly = preloadImage('https://i.ibb.co/679kNd5N/Female-Bird-on-fly.png');
    const femaleBirdFall = preloadImage('https://i.ibb.co/GvtfStk4/Female-Bird-on-fall.png');
    
    // Track bird states
    let maleBirdState = 'fly';
    let femaleBirdState = 'fly';
    let animationFrameCount = 0;
    
    // Start game immediately
    gameActive = true;
    gameStarted = true;
    
    function drawBird(birdObj, isBot = false) {
      ctx.save();
      ctx.translate(birdObj.x + birdObj.width / 2, birdObj.y + birdObj.height / 2);
      
      // Flip horizontally
      ctx.scale(-1, 1);
      
      // Rotate based on velocity (for both birds)
      let targetRotation = Math.min(Math.PI / 4, Math.max(-Math.PI / 4, (birdObj.velocity * 0.1)));
      birdObj.rotation += (targetRotation - birdObj.rotation) * 0.1;
      ctx.rotate(birdObj.rotation);
      
      // Determine bird state based on velocity
      if (!isBot) {
        // Male bird - switch between fly and fall based on velocity
        if (birdObj.velocity > 0) {
          maleBirdState = 'fall';
        } else {
          maleBirdState = 'fly';
        }
      } else {
        // Female bird - switch between fly and fall based on velocity
        if (birdObj.velocity > 0) {
          femaleBirdState = 'fall';
        } else {
          femaleBirdState = 'fly';
        }
      }
      
      // Draw bird image based on state
      let birdImg;
      if (isBot) {
        birdImg = femaleBirdState === 'fly' ? femaleBirdFly : femaleBirdFall;
      } else {
        birdImg = maleBirdState === 'fly' ? maleBirdFly : maleBirdFall;
      }
      
      const size = 40;
      ctx.drawImage(birdImg, -size / 2, -size / 2, size, size);
      
      ctx.restore();
    }
    
    function updateBotBird() {
      // Apply gravity to bot bird
      botBird.velocity += botBird.gravity;
      botBird.y += botBird.velocity;
      
      // Find the next pipe ahead
      let nextPipe = pipes.find(pipe => pipe.x > botBird.x);
      
      if (nextPipe) {
        // Target the center of the gap
        const gapCenter = (nextPipe.top + nextPipe.bottom) / 2;
        botBird.targetY = gapCenter - botBird.height / 2;
        
        // Auto-jump if below target
        if (botBird.y > botBird.targetY + 10) {
          botBird.velocity = botBird.lift;
        }
      } else {
        // No pipe ahead, stay in middle
        botBird.targetY = canvas.height / 2 - botBird.height / 2;
        if (botBird.y > botBird.targetY + 10) {
          botBird.velocity = botBird.lift;
        }
      }
      
      // Ceiling collision
      if (botBird.y < 0) {
        botBird.y = 0;
        botBird.velocity = 0;
      }
    }
    
    function createPipe() {
      if (frame % 120 === 0) {
        let gap = 150;
        let minPipeHeight = 50;
        let maxPipeHeight = canvas.height - gap - minPipeHeight;
        let pipeTopHeight = Math.random() * (maxPipeHeight - minPipeHeight) + minPipeHeight;
        pipes.push({ x: canvas.width, top: pipeTopHeight, bottom: pipeTopHeight + gap, passed: false });
      }
    }
    
    function drawPipes() {
      ctx.fillStyle = "#e68bbe";
      pipes.forEach(pipe => {
        // Top pipe with rounded top
        ctx.beginPath();
        ctx.roundRect(pipe.x, 0, 50, pipe.top, [0, 0, 10, 10]);
        ctx.fill();
        
        // Bottom pipe with rounded bottom
        ctx.beginPath();
        ctx.roundRect(pipe.x, pipe.bottom, 50, canvas.height - pipe.bottom, [10, 10, 0, 0]);
        ctx.fill();
        
        // Pipe caps
        ctx.fillStyle = "#eea1cd";
        ctx.fillRect(pipe.x - 5, pipe.top - 20, 60, 20);
        ctx.fillRect(pipe.x - 5, pipe.bottom, 60, 20);
        
        ctx.fillStyle = "#e68bbe";
        pipe.x -= 1.5;
      });
    }
    
    function update() {
      if (!gameActive) return;
      
      bird.velocity += bird.gravity;
      bird.y += bird.velocity;

      // Ceiling collision
      if (bird.y < 0) {
        bird.y = 0;
        bird.velocity = 0;
      }
      
      // Floor collision
      if (bird.y + bird.height > canvas.height) {
        endGame();
        return;
      }
      
      // Collision detection
      pipes.forEach(pipe => {
        if (bird.x + bird.width > pipe.x && bird.x < pipe.x + 50) {
          if (bird.y < pipe.top || bird.y + bird.height > pipe.bottom) {
            endGame();
            return;
          }
        }
        
        // Score when passing pipe
        if (!pipe.passed && bird.x > pipe.x + 50) {
          pipe.passed = true;
          score++;
          scoreDisplay.textContent = score;
        }
      });
      
      // Check collision with bot bird (win condition)
      const dx = (bird.x + bird.width / 2) - (botBird.x + botBird.width / 2);
      const dy = (bird.y + bird.height / 2) - (botBird.y + botBird.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 25) {
        winGame();
        return;
      }

      // Remove off-screen pipes
      if (pipes.length > 0 && pipes[0].x < -60) {
        pipes.shift();
      }
    }
    
    function winGame() {
      gameActive = false;
      gameStarted = false;
      cancelAnimationFrame(animationFrame);
      
      setTimeout(() => {
        gameModal.innerHTML = `
          <button id="tapBackBtn" class="tap-back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <div class="tap-game-container">
            <h2 class="game-title">You Won! 💕</h2>
            <p class="game-subtitle">Love found!</p>
            <button id="playAgainBtn" class="celebrate-style-btn">Play Again</button>
          </div>
        `;
        
        document.getElementById('tapBackBtn').addEventListener('click', () => {
          gameModal.classList.add('hidden');
          gameModal.innerHTML = `
            <button id="closeGameModal" class="close-game-modal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          `;
        });
        
        document.getElementById('playAgainBtn').addEventListener('click', () => {
          startFlappyGame();
        });
      }, 500);
    }
    
    function endGame() {
      gameActive = false;
      gameStarted = false;
      cancelAnimationFrame(animationFrame);
      
      setTimeout(() => {
        gameModal.innerHTML = `
          <button id="tapBackBtn" class="tap-back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <div class="tap-game-container">
            <h2 class="game-title">Game Over!</h2>
            <p class="game-subtitle">Score: ${score}</p>
            <button id="playAgainBtn" class="celebrate-style-btn">Start Again</button>
            <div class="secret-phrase-section">
              <p class="secret-hint">Write "ily sam" to continue without losing scores</p>
              <input type="text" id="secretPhraseInput" class="secret-input" placeholder="Type here..." />
              <button id="submitSecretBtn" class="celebrate-style-btn">Continue</button>
            </div>
          </div>
        `;
        
        document.getElementById('tapBackBtn').addEventListener('click', () => {
          gameModal.classList.add('hidden');
          gameModal.innerHTML = `
            <button id="closeGameModal" class="close-game-modal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          `;
        });
        
        document.getElementById('playAgainBtn').addEventListener('click', () => {
          startFlappyGame();
        });
        
        document.getElementById('submitSecretBtn').addEventListener('click', () => {
          const input = document.getElementById('secretPhraseInput');
          if (input.value.toLowerCase() === 'ily sam') {
            startFlappyGameplayWithScore(score);
          }
        });

        // Add typing and backspace sounds to secret phrase input
        const secretInput = document.getElementById('secretPhraseInput');
        secretInput.addEventListener('keypress', () => {
          playTypingSound();
        });
        secretInput.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace') {
            playBackspaceSound();
          }
        });
      }, 500);
    }

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background
      ctx.fillStyle = "#fff5f8";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw ground
      ctx.fillStyle = "#e68bbe";
      ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
      
      drawBird(bird, false);
      drawBird(botBird, true);
      drawPipes();
      createPipe();
      updateBotBird();
      update();
      
      frame++;
      animationFrameCount++;
      if (gameActive) {
        animationFrame = requestAnimationFrame(loop);
      }
    }
    
    function jump() {
      if (gameActive) {
        bird.velocity = bird.lift;
      }
    }
    
    // Tap/click to fly
    canvas.addEventListener('click', jump);
    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      jump();
    });
    
    document.getElementById('tapBackBtn').addEventListener('click', () => {
      gameActive = false;
      gameStarted = false;
      cancelAnimationFrame(animationFrame);
      startFlappyGame();
    });
    
    loop();
  }
  
  function startFlappyGameplayWithScore(initialScore) {
    let bird = { x: 50, y: 200, width: 34, height: 24, gravity: 0.18, lift: -4, velocity: 0, rotation: 0 };
    let botBird = { x: 120, y: 200, width: 34, height: 24, targetY: 200, gravity: 0.18, lift: -4, velocity: 0, rotation: 0 };
    let pipes = [];
    let frame = 0;
    let score = initialScore;
    let gameActive = false;
    let gameStarted = false;
    let animationFrame = null;
    
    gameModal.innerHTML = `
      <button id="tapBackBtn" class="tap-back-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>
      <div class="tap-game-container">
        <div class="flappy-game-container">
          <canvas id="flappyCanvas" width="320" height="480"></canvas>
          <div class="flappy-score">Score: <span id="flappyScore">${score}</span></div>
        </div>
      </div>
    `;
    
    const canvas = document.getElementById('flappyCanvas');
    const ctx = canvas.getContext('2d');
    const scoreDisplay = document.getElementById('flappyScore');
    
    // Use preloaded bird sprite states from cache
    const maleBirdFly = preloadImage('https://i.ibb.co/3mMS1Jp4/Female-Bird-on-click.png');
    const maleBirdFall = preloadImage('https://i.ibb.co/ZzcgQJnY/Female-Bird-on-fall.png');
    const femaleBirdFly = preloadImage('https://i.ibb.co/679kNd5N/Female-Bird-on-fly.png');
    const femaleBirdFall = preloadImage('https://i.ibb.co/GvtfStk4/Female-Bird-on-fall.png');
    
    // Track bird states
    let maleBirdState = 'fly';
    let femaleBirdState = 'fly';
    let animationFrameCount = 0;
    
    // Start game immediately
    gameActive = true;
    gameStarted = true;
    
    function drawBird(birdObj, isBot = false) {
      ctx.save();
      ctx.translate(birdObj.x + birdObj.width / 2, birdObj.y + birdObj.height / 2);
      
      // Flip horizontally
      ctx.scale(-1, 1);
      
      // Rotate based on velocity (for both birds)
      let targetRotation = Math.min(Math.PI / 4, Math.max(-Math.PI / 4, (birdObj.velocity * 0.1)));
      birdObj.rotation += (targetRotation - birdObj.rotation) * 0.1;
      ctx.rotate(birdObj.rotation);
      
      // Determine bird state based on velocity
      if (!isBot) {
        // Male bird - switch between fly and fall based on velocity
        if (birdObj.velocity > 0) {
          maleBirdState = 'fall';
        } else {
          maleBirdState = 'fly';
        }
      } else {
        // Female bird - switch between fly and fall based on velocity
        if (birdObj.velocity > 0) {
          femaleBirdState = 'fall';
        } else {
          femaleBirdState = 'fly';
        }
      }
      
      // Draw bird image based on state
      let birdImg;
      if (isBot) {
        birdImg = femaleBirdState === 'fly' ? femaleBirdFly : femaleBirdFall;
      } else {
        birdImg = maleBirdState === 'fly' ? maleBirdFly : maleBirdFall;
      }
      
      const size = 40;
      ctx.drawImage(birdImg, -size / 2, -size / 2, size, size);
      
      ctx.restore();
    }
    
    function updateBotBird() {
      // Apply gravity to bot bird
      botBird.velocity += botBird.gravity;
      botBird.y += botBird.velocity;
      
      // Find the next pipe ahead
      let nextPipe = pipes.find(pipe => pipe.x > botBird.x);
      
      if (nextPipe) {
        // Target the center of the gap
        const gapCenter = (nextPipe.top + nextPipe.bottom) / 2;
        botBird.targetY = gapCenter - botBird.height / 2;
        
        // Auto-jump if below target
        if (botBird.y > botBird.targetY + 10) {
          botBird.velocity = botBird.lift;
        }
      } else {
        // No pipe ahead, stay in middle
        botBird.targetY = canvas.height / 2 - botBird.height / 2;
        if (botBird.y > botBird.targetY + 10) {
          botBird.velocity = botBird.lift;
        }
      }
      
      // Ceiling collision
      if (botBird.y < 0) {
        botBird.y = 0;
        botBird.velocity = 0;
      }
    }
    
    function createPipe() {
      if (frame % 120 === 0) {
        let gap = 150;
        let minPipeHeight = 50;
        let maxPipeHeight = canvas.height - gap - minPipeHeight;
        let pipeTopHeight = Math.random() * (maxPipeHeight - minPipeHeight) + minPipeHeight;
        pipes.push({ x: canvas.width, top: pipeTopHeight, bottom: pipeTopHeight + gap, passed: false });
      }
    }
    
    function drawPipes() {
      ctx.fillStyle = "#e68bbe";
      pipes.forEach(pipe => {
        ctx.beginPath();
        ctx.roundRect(pipe.x, 0, 50, pipe.top, [0, 0, 10, 10]);
        ctx.fill();
        
        ctx.beginPath();
        ctx.roundRect(pipe.x, pipe.bottom, 50, canvas.height - pipe.bottom, [10, 10, 0, 0]);
        ctx.fill();
        
        ctx.fillStyle = "#eea1cd";
        ctx.fillRect(pipe.x - 5, pipe.top - 20, 60, 20);
        ctx.fillRect(pipe.x - 5, pipe.bottom, 60, 20);
        
        ctx.fillStyle = "#e68bbe";
        pipe.x -= 1.5;
      });
    }
    
    function update() {
      if (!gameActive) return;
      
      bird.velocity += bird.gravity;
      bird.y += bird.velocity;

      if (bird.y < 0) {
        bird.y = 0;
        bird.velocity = 0;
      }
      
      if (bird.y + bird.height > canvas.height) {
        endGame();
        return;
      }
      
      pipes.forEach(pipe => {
        if (bird.x + bird.width > pipe.x && bird.x < pipe.x + 50) {
          if (bird.y < pipe.top || bird.y + bird.height > pipe.bottom) {
            endGame();
            return;
          }
        }
        
        if (!pipe.passed && bird.x > pipe.x + 50) {
          pipe.passed = true;
          score++;
          scoreDisplay.textContent = score;
        }
      });
      
      const dx = (bird.x + bird.width / 2) - (botBird.x + botBird.width / 2);
      const dy = (bird.y + bird.height / 2) - (botBird.y + botBird.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 25) {
        winGame();
        return;
      }

      if (pipes.length > 0 && pipes[0].x < -60) {
        pipes.shift();
      }
    }
    
    function winGame() {
      gameActive = false;
      gameStarted = false;
      cancelAnimationFrame(animationFrame);
      
      setTimeout(() => {
        gameModal.innerHTML = `
          <button id="tapBackBtn" class="tap-back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <div class="tap-game-container">
            <h2 class="game-title">You Won! 💕</h2>
            <p class="game-subtitle">Love found!</p>
            <button id="playAgainBtn" class="celebrate-style-btn">Play Again</button>
          </div>
        `;
        
        document.getElementById('tapBackBtn').addEventListener('click', () => {
          gameModal.classList.add('hidden');
          gameModal.innerHTML = `
            <button id="closeGameModal" class="close-game-modal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          `;
        });
        
        document.getElementById('playAgainBtn').addEventListener('click', () => {
          startFlappyGame();
        });
      }, 500);
    }
    
    function endGame() {
      gameActive = false;
      gameStarted = false;
      cancelAnimationFrame(animationFrame);
      
      setTimeout(() => {
        gameModal.innerHTML = `
          <button id="tapBackBtn" class="tap-back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <div class="tap-game-container">
            <h2 class="game-title">Game Over!</h2>
            <p class="game-subtitle">Score: ${score}</p>
            <button id="playAgainBtn" class="celebrate-style-btn">Start Again</button>
            <div class="secret-phrase-section">
              <p class="secret-hint">Write "ily sam" to continue without losing scores</p>
              <input type="text" id="secretPhraseInput" class="secret-input" placeholder="Type here..." />
              <button id="submitSecretBtn" class="celebrate-style-btn">Continue</button>
            </div>
          </div>
        `;
        
        document.getElementById('tapBackBtn').addEventListener('click', () => {
          gameModal.classList.add('hidden');
          gameModal.innerHTML = `
            <button id="closeGameModal" class="close-game-modal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          `;
        });
        
        document.getElementById('playAgainBtn').addEventListener('click', () => {
          startFlappyGame();
        });
        
        document.getElementById('submitSecretBtn').addEventListener('click', () => {
          const input = document.getElementById('secretPhraseInput');
          if (input.value.toLowerCase() === 'ily sam') {
            startFlappyGameplayWithScore(score);
          }
        });

        // Add typing and backspace sounds to secret phrase input
        const secretInput = document.getElementById('secretPhraseInput');
        secretInput.addEventListener('keypress', () => {
          playTypingSound();
        });
        secretInput.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace') {
            playBackspaceSound();
          }
        });
      }, 500);
    }

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#fff5f8";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = "#e68bbe";
      ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
      
      drawBird(bird, false);
      drawBird(botBird, true);
      drawPipes();
      createPipe();
      updateBotBird();
      update();
      
      frame++;
      animationFrameCount++;
      if (gameActive) {
        animationFrame = requestAnimationFrame(loop);
      }
    }
    
    function jump() {
      if (gameActive) {
        bird.velocity = bird.lift;
      }
    }
    
    canvas.addEventListener('click', jump);
    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      jump();
    });
    
    document.getElementById('tapBackBtn').addEventListener('click', () => {
      gameActive = false;
      gameStarted = false;
      cancelAnimationFrame(animationFrame);
      startFlappyGame();
    });
    
    loop();
  }
  
  startQuizBtn.addEventListener('click', () => {
    gameStarted = true;
    currentQuestionIndex = 0;
    quizAnswers = new Array(quizQuestions.length).fill('');
    showQuestionScreen();
  });
  
  quizBackBtn.addEventListener('click', showStartScreen);
  goBackBtn.addEventListener('click', showStartScreen);
  
  function showStartScreen() {
    quizStartScreen.classList.remove('hidden');
    quizQuestionScreen.classList.add('hidden');
    quizResultScreen.classList.add('hidden');
    gameStarted = false;
  }
  
  function showQuestionScreen() {
    quizStartScreen.classList.add('hidden');
    quizQuestionScreen.classList.remove('hidden');
    quizResultScreen.classList.add('hidden');
    
    const q = quizQuestions[currentQuestionIndex];
    document.getElementById('currentQ').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQ').textContent = quizQuestions.length;
    document.getElementById('questionText').textContent = q.q;
    document.getElementById('answerInput').value = quizAnswers[currentQuestionIndex];
    document.getElementById('answerInput').placeholder = q.placeholder;
  }
  
  function showResultScreen() {
    quizStartScreen.classList.add('hidden');
    quizQuestionScreen.classList.add('hidden');
    quizResultScreen.classList.remove('hidden');
  }
  
  document.getElementById('answerInput').addEventListener('input', (e) => {
    quizAnswers[currentQuestionIndex] = e.target.value;
  });

  // Add typing and backspace sounds to quiz input
  const answerInput = document.getElementById('answerInput');
  answerInput.addEventListener('keypress', () => {
    playTypingSound();
  });
  answerInput.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      playBackspaceSound();
    }
  });
  
  nextQBtn.addEventListener('click', () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      showQuestionScreen();
    } else {
      showResultScreen();
    }
  });
  
  copyAnswersBtn.addEventListener('click', async () => {
    let content = "Manya's Birthday Game Answers:\n\n";
    quizQuestions.forEach((q, index) => {
      content += `Question ${index + 1}: ${q.q}\n`;
      content += `Your Answer: ${quizAnswers[index] || '[No Answer Provided]'}\n\n`;
    });
    
    try {
      await navigator.clipboard.writeText(content);
      alert("Answers copied to clipboard! Don't forget to send them to Samad. 😉");
    } catch (err) {
      console.error('Failed to copy:', err);
      alert("Failed to copy answers. Please try again or copy manually.");
    }
  });

  const sendToSamadBtn = document.getElementById('sendToSamadBtn');
  sendToSamadBtn.addEventListener('click', () => {
    window.open('https://www.instagram.com/samad.wav/', '_blank');
  });

  // ===== iOS-style Notifications =====
  const designBlessings = [
    "That smile should come with a warning label.",
    "Good girl. Now do it again.",
    "Your lips just moved to the top of my priority list.",
    "I don't chase. But for you? I'd run.",
    "Breathe slower. You're turning me on.",
    "You're already mine. You just don't know it yet.",
    "You make me forget my own pickup lines.",
    "You look like my next bad decision.",
    "Let me get this straight… you're real?",
    "You're blushing. I love what I do to you.",
    "One look from you and I forgot my own name.",
    "You're the reason villains win.",
    "You first. Always.",
    "I'm not sorry for what I'm about to do to you.",
    "I own this conversation. And soon? You.",
    "That lip bite just cost you.",
    "You already decided. Just say it."
  ];

  function showDesignNotification() {
    // Don't show notifications if a game is active
    const gameModal = document.getElementById('gameModal');
    if (gameModal && !gameModal.classList.contains('hidden')) {
      return;
    }
    
    const container = document.getElementById('notificationContainer');
    
    // Clear any existing notification before showing new one
    container.innerHTML = '';
    
    const randomBlessing = designBlessings[Math.floor(Math.random() * designBlessings.length)];
    
    const notification = document.createElement('div');
    notification.className = 'ios-notification';
    notification.innerHTML = `
      <div class="app-icon">
        <img src="https://i.ibb.co/jv00vHGV/Profile.jpg" alt="Samad" onclick="window.open('https://www.instagram.com/samad.wav/', '_blank')" style="cursor: pointer;">
      </div>
      
      <div class="notification-body">
        <div class="notification-header">
          <span class="app-name">Samad <img src="https://res.cloudinary.com/dwwj6cltj/image/upload/v1777527301/verified_badge_gxj9pn.png" class="verified-badge" alt="verified"></span>
          <span class="time">now</span>
        </div>
        
        <p class="message">${randomBlessing}</p>
      </div>
    `;
    
    container.appendChild(notification);

    // Drag gesture variables
    let isDragging = false;
    let hasDragged = false;
    let startX = 0, startY = 0;
    let currentX = 0, currentY = 0;
    const dragThreshold = 50;

    // Touch events
    notification.addEventListener('touchstart', (e) => {
      isDragging = true;
      hasDragged = false;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      currentX = startX;
      currentY = startY;
      notification.style.transition = 'none';
      notification.style.opacity = '1';
      notification.style.transform = 'scale(1)';
    });

    notification.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
      currentY = e.touches[0].clientY;

      const deltaX = currentX - startX;
      const deltaY = currentY - startY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Mark as dragged if there's significant movement
      if (distance > 5) {
        hasDragged = true;
      }

      // Visual feedback: reduce opacity and scale based on drag distance
      const opacity = Math.max(0.5, 1 - distance / 300);
      const scale = Math.max(0.9, 1 - distance / 500);

      notification.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
      notification.style.opacity = opacity;
    });

    notification.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      isDragging = false;
      
      const deltaX = currentX - startX;
      const deltaY = currentY - startY;
      
      notification.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
      
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        // Vertical drag
        if (deltaY < -dragThreshold) {
          // Dragged up - dismiss
          notification.style.animation = 'ios-slide-up-fast 0.2s ease-out forwards';
          setTimeout(() => {
            if (notification.parentNode) {
              notification.parentNode.removeChild(notification);
            }
          }, 200);
        } else {
          notification.style.transform = 'translate(0, 0) scale(1)';
          notification.style.opacity = '1';
        }
      } else {
        // Horizontal drag
        if (deltaX > dragThreshold) {
          // Dragged right
          notification.style.animation = 'ios-slide-right 0.3s ease-out forwards';
          setTimeout(() => {
            if (notification.parentNode) {
              notification.parentNode.removeChild(notification);
            }
          }, 300);
        } else if (deltaX < -dragThreshold) {
          // Dragged left
          notification.style.animation = 'ios-slide-left 0.3s ease-out forwards';
          setTimeout(() => {
            if (notification.parentNode) {
              notification.parentNode.removeChild(notification);
            }
          }, 300);
        } else {
          notification.style.transform = 'translate(0, 0) scale(1)';
          notification.style.opacity = '1';
        }
      }
    });

    // Mouse events (for desktop)
    notification.addEventListener('mousedown', (e) => {
      isDragging = true;
      hasDragged = false;
      startX = e.clientX;
      startY = e.clientY;
      currentX = startX;
      currentY = startY;
      notification.style.transition = 'none';
      notification.style.opacity = '1';
      notification.style.transform = 'scale(1)';
    });

    notification.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      currentX = e.clientX;
      currentY = e.clientY;

      const deltaX = currentX - startX;
      const deltaY = currentY - startY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Mark as dragged if there's significant movement
      if (distance > 5) {
        hasDragged = true;
      }

      // Visual feedback: reduce opacity and scale based on drag distance
      const opacity = Math.max(0.5, 1 - distance / 300);
      const scale = Math.max(0.9, 1 - distance / 500);

      notification.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
      notification.style.opacity = opacity;
    });

    notification.addEventListener('mouseup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      
      const deltaX = currentX - startX;
      const deltaY = currentY - startY;
      
      notification.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
      
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        // Vertical drag
        if (deltaY < -dragThreshold) {
          // Dragged up - dismiss
          notification.style.animation = 'ios-slide-up-fast 0.2s ease-out forwards';
          setTimeout(() => {
            if (notification.parentNode) {
              notification.parentNode.removeChild(notification);
            }
          }, 200);
        } else {
          notification.style.transform = 'translate(0, 0) scale(1)';
          notification.style.opacity = '1';
        }
      } else {
        // Horizontal drag
        if (deltaX > dragThreshold) {
          // Dragged right
          notification.style.animation = 'ios-slide-right 0.3s ease-out forwards';
          setTimeout(() => {
            if (notification.parentNode) {
              notification.parentNode.removeChild(notification);
            }
          }, 300);
        } else if (deltaX < -dragThreshold) {
          // Dragged left
          notification.style.animation = 'ios-slide-left 0.3s ease-out forwards';
          setTimeout(() => {
            if (notification.parentNode) {
              notification.parentNode.removeChild(notification);
            }
          }, 300);
        } else {
          notification.style.transform = 'translate(0, 0) scale(1)';
          notification.style.opacity = '1';
        }
      }
    });

    notification.addEventListener('mouseleave', () => {
      if (isDragging) {
        isDragging = false;
        notification.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
        notification.style.transform = 'translate(0, 0) scale(1)';
        notification.style.opacity = '1';
      }
    });
    
    // Add click functionality to fade (only if not dragged)
    notification.addEventListener('click', (e) => {
      if (!hasDragged) {
        notification.classList.add('fading');
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 300);
      }
    });
    
    // Trigger slide-in animation
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
      notification.classList.add('shatter');
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 600);
    }, 3000);
  }

  // Show notifications at 8-second intervals
  setInterval(showDesignNotification, 8000); // Show every 8 seconds
  
  // Show first notification after 10 seconds
  setTimeout(showDesignNotification, 10000);
  
  // ===== Ripple Effect =====
  const mobileFrame = document.querySelector('.mobile-frame');
  mobileFrame.addEventListener('click', (e) => {
    // Don't create ripple effect if a game is active
    const gameModal = document.getElementById('gameModal');
    if (gameModal && !gameModal.classList.contains('hidden')) {
      return;
    }
    
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    
    const rect = mobileFrame.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const size = 50;
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: rgb(235, 175, 209);
      left: ${x - size/2}px;
      top: ${y - size/2}px;
      pointer-events: none;
      animation: rippleEffect 0.6s ease-out forwards;
    `;
    
    mobileFrame.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
  
  // ===== Auto-hide scrollbar when not scrolling =====
  const mobileContent = document.querySelector('.mobile-content');
  let scrollTimeout;
  
  if (mobileContent) {
    mobileContent.addEventListener('scroll', throttle(() => {
      mobileContent.style.setProperty('--scrollbar-opacity', '1');
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        mobileContent.style.setProperty('--scrollbar-opacity', '0');
      }, 1500);
    }, 16));
    
    // ===== Drag-to-scroll functionality =====
    let isDown = false;
    let startX, startY;
    let scrollLeft, scrollTop;
    
    mobileContent.addEventListener('mousedown', (e) => {
      isDown = true;
      mobileContent.style.cursor = 'grabbing';
      startX = e.pageX - mobileContent.offsetLeft;
      startY = e.pageY - mobileContent.offsetTop;
      scrollLeft = mobileContent.scrollLeft;
      scrollTop = mobileContent.scrollTop;
    });
    
    mobileContent.addEventListener('mouseleave', () => {
      isDown = false;
      mobileContent.style.cursor = 'grab';
    });
    
    mobileContent.addEventListener('mouseup', () => {
      isDown = false;
      mobileContent.style.cursor = 'grab';
    });
    
    mobileContent.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - mobileContent.offsetLeft;
      const y = e.pageY - mobileContent.offsetTop;
      const walkX = (x - startX) * 2; // Scroll speed multiplier
      const walkY = (y - startY) * 2;
      mobileContent.scrollLeft = scrollLeft - walkX;
      mobileContent.scrollTop = scrollTop - walkY;
    });
  }
  
  // ===== Drag-to-scroll for wishes carousel =====
  const wishesCarousel = document.getElementById('wishesCarousel');
  if (wishesCarousel) {
    let isDown = false;
    let startX;
    let scrollLeft;
    
    wishesCarousel.addEventListener('mousedown', (e) => {
      isDown = true;
      wishesCarousel.style.cursor = 'grabbing';
      startX = e.pageX - wishesCarousel.offsetLeft;
      scrollLeft = wishesCarousel.scrollLeft;
    });
    
    wishesCarousel.addEventListener('mouseleave', () => {
      isDown = false;
      wishesCarousel.style.cursor = 'grab';
    });
    
    wishesCarousel.addEventListener('mouseup', () => {
      isDown = false;
      wishesCarousel.style.cursor = 'grab';
    });
    
    wishesCarousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - wishesCarousel.offsetLeft;
      const walkX = (x - startX) * 2;
      wishesCarousel.scrollLeft = scrollLeft - walkX;
    });
  }
  
  // ===== Double Tap Confetti (Easter Egg) =====
  let lastTap = 0;
  document.addEventListener('click', (e) => {
    // Don't trigger double tap confetti if a game is active
    const gameModal = document.getElementById('gameModal');
    if (gameModal && !gameModal.classList.contains('hidden')) {
      return;
    }
    
    const now = Date.now();
    if (now - lastTap < 300) {
      fireConfetti({
        particleCount: 40,
        spread: 80,
        origin: {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        },
        colors: ['#eea1cd', '#ffffff'],
        shapes: ['circle'],
        gravity: 0.4
      });
    }
    lastTap = now;
  });
  
  // ===== Keyboard Navigation =====
  document.addEventListener('keydown', (e) => {
    if (musicModal.classList.contains('hidden')) return;
    
    if (e.code === 'Space') {
      e.preventDefault();
      togglePlayPause();
    } else if (e.code === 'ArrowLeft') {
      playPrevious();
    } else if (e.code === 'ArrowRight') {
      playNext();
    } else if (e.code === 'Escape') {
      musicModal.classList.add('hidden');
    }
  });
  
  // ===== Scroll Animations =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all scroll-animate elements
  document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale').forEach(el => {
    observer.observe(el);
  });
});

// ===== Mini Chat Functionality =====
document.addEventListener('DOMContentLoaded', () => {
  const chatBtn = document.getElementById('chatBtn');
  const miniChat = document.getElementById('miniChat');
  const closeChatBtn = document.getElementById('closeChatBtn');
  const fullscreenChatBtn = document.getElementById('fullscreenChatBtn');
  const backChatBtn = document.getElementById('backChatBtn');
  const chatInput = document.getElementById('chatInput');
  const sendChatBtn = document.getElementById('sendChatBtn');
  const emojiBtn = document.getElementById('emojiBtn');
  const plusBtn = document.getElementById('plusBtn');
  const plusMenu = document.getElementById('plusMenu');
  const chatMessages = document.getElementById('chatMessages');
  const photoInput = document.getElementById('photoInput');
  const imageViewer = document.getElementById('imageViewer');
  const imageViewerImg = document.getElementById('imageViewerImg');
  const imageViewerBackdrop = document.getElementById('imageViewerBackdrop');
  const imageViewerClose = document.getElementById('imageViewerClose');
  const videoViewer = document.getElementById('videoViewer');
  const videoViewerContent = document.getElementById('videoViewerContent');
  const videoViewerBackdrop = document.getElementById('videoViewerBackdrop');
  const videoViewerClose = document.getElementById('videoViewerClose');
  const recordingInterface = document.getElementById('recordingInterface');
  const cancelRecordingBtn = document.getElementById('cancelRecordingBtn');
  const sendRecordingBtn = document.getElementById('sendRecordingBtn');
  const recordingTimer = document.getElementById('recordingTimer');
  const recordingWaveform = document.getElementById('recordingWaveform');

  // ===== Drag-to-scroll for chat messages =====
  if (chatMessages) {
    let isDown = false;
    let startX, startY;
    let scrollLeft, scrollTop;
    let isHorizontalDrag = false;
    
    chatMessages.addEventListener('mousedown', (e) => {
      isDown = true;
      isHorizontalDrag = false;
      chatMessages.style.cursor = 'grabbing';
      startX = e.pageX - chatMessages.offsetLeft;
      startY = e.pageY - chatMessages.offsetTop;
      scrollLeft = chatMessages.scrollLeft;
      scrollTop = chatMessages.scrollTop;
    });
    
    chatMessages.addEventListener('mouseleave', () => {
      isDown = false;
      isHorizontalDrag = false;
      chatMessages.style.cursor = 'grab';
    });
    
    chatMessages.addEventListener('mouseup', () => {
      isDown = false;
      isHorizontalDrag = false;
      chatMessages.style.cursor = 'grab';
    });
    
    chatMessages.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      
      const x = e.pageX - chatMessages.offsetLeft;
      const y = e.pageY - chatMessages.offsetTop;
      const deltaX = Math.abs(x - startX);
      const deltaY = Math.abs(y - startY);
      
      // If horizontal movement is greater than vertical, it's a horizontal drag (swipe)
      if (deltaX > deltaY && deltaX > 10) {
        isHorizontalDrag = true;
        return; // Let the message swipe handler handle it
      }
      
      // Only scroll if it's not a horizontal drag
      if (!isHorizontalDrag) {
        e.preventDefault();
        const walkX = (x - startX) * 2;
        const walkY = (y - startY) * 2;
        chatMessages.scrollLeft = scrollLeft - walkX;
        chatMessages.scrollTop = scrollTop - walkY;
      }
    });
  }

  console.log('Chat elements:', { chatBtn, miniChat, closeChatBtn, fullscreenChatBtn, backChatBtn, chatInput, sendChatBtn, chatMessages });

  if (!chatBtn) {
    console.error('Chat button not found!');
    return;
  }

  // Toggle chat visibility
  let firstChatOpen = true;
  chatBtn.addEventListener('click', () => {
    console.log('Chat button clicked!');
    miniChat.classList.toggle('hidden');
    if (!miniChat.classList.contains('hidden')) {
      chatBtn.classList.add('hidden');
      // Auto-focus input when chat opens
      setTimeout(() => chatInput.focus(), 100);
      // Send video message on first chat open
      if (firstChatOpen) {
        firstChatOpen = false;
        const videoEmbedCode = '<div style="position:relative;width:100%;overflow:hidden;padding-top:184.33%"><iframe style="position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none" allow="autoplay; fullscreen" webkitallowfullscreen mozallowfullscreen allowfullscreen src="https://videos.dyntube.com/iframes/PkwjEl6fBUGplNFmV0lVlA" title="SanWish Loading Screen 1"></iframe></div>';
        setTimeout(() => {
          sendVideoMessage(videoEmbedCode, "here's something for you.");
        }, 500);
      }
    } else {
      chatBtn.classList.remove('hidden');
      // Trigger iOS spring animation when button becomes visible
      chatBtn.style.animation = 'none';
      setTimeout(() => {
        chatBtn.style.animation = 'iosSpring 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      }, 10);
    }
  });

  // Close chat with iOS minimize animation
  closeChatBtn.addEventListener('click', () => {
    miniChat.classList.add('minimizing');
    setTimeout(() => {
      miniChat.classList.add('hidden');
      miniChat.classList.remove('minimizing');
      miniChat.classList.remove('fullscreen');
      chatBtn.classList.remove('hidden');
      // Trigger iOS spring animation when button becomes visible
      chatBtn.style.animation = 'none';
      setTimeout(() => {
        chatBtn.style.animation = 'iosSpring 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      }, 10);
    }, 300);
  });

  // Toggle fullscreen mode
  fullscreenChatBtn.addEventListener('click', () => {
    miniChat.classList.toggle('fullscreen');
    if (miniChat.classList.contains('fullscreen')) {
      backChatBtn.classList.remove('hidden');
      closeChatBtn.classList.add('hidden');
    } else {
      backChatBtn.classList.add('hidden');
      closeChatBtn.classList.remove('hidden');
    }
  });

  // Back button to exit fullscreen
  backChatBtn.addEventListener('click', () => {
    miniChat.classList.remove('fullscreen');
    backChatBtn.classList.add('hidden');
    closeChatBtn.classList.remove('hidden');
  });

  // Toggle plus menu
  plusBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (plusMenu.classList.contains('hidden')) {
      plusMenu.classList.remove('hidden');
      plusMenu.classList.remove('closing');
    } else {
      closePlusMenu();
    }
  });

  // Function to close plus menu with animation
  function closePlusMenu() {
    plusMenu.classList.add('closing');
    setTimeout(() => {
      plusMenu.classList.add('hidden');
      plusMenu.classList.remove('closing');
    }, 200);
  }

  // Handle plus menu item clicks
  document.querySelector('.record-btn').addEventListener('click', () => {
    console.log('Record option selected');
    closePlusMenu();
    startInstagramStyleRecording();
  });

  // ===== Instagram-style Voice Recording Functionality =====
  let mediaRecorder = null;
  let audioChunks = [];
  let recordingStartTime = null;
  let timerInterval = null;
  let recognition = null;
  let transcriptionText = '';
  let isRecording = false;
  let audioContext = null;
  let analyser = null;
  let dataArray = null;
  let animationId = null;
  let audioStream = null;
  let shouldSendOnStop = true;

  async function startInstagramStyleRecording() {
    try {
      // Reset state
      audioChunks = [];
      transcriptionText = '';
      isRecording = true;
      shouldSendOnStop = true;

      // Get audio stream
      audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Setup MediaRecorder
      mediaRecorder = new MediaRecorder(audioStream);
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        // Only send if not cancelled
        if (!shouldSendOnStop) {
          revertToOriginalUI();
          return;
        }

        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        
        // Cleanup
        cleanupRecording();
        
        // Small delay to allow final transcription to complete
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const finalTranscript = transcriptionText.trim();
        console.log('Final transcript:', finalTranscript);
        
        // Send audio message with transcript
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = async () => {
          const audioBase64 = reader.result;
          const messageWrapper = sendAudioMessage(audioBase64, finalTranscript);
          
          // Trigger AI response using transcript (if available) or generic response
          const aiResponseMessage = finalTranscript || '[Voice message]';
          
          console.log('Triggering AI response for:', aiResponseMessage);
          
          // Show typing indicator
          const typingIndicator = document.createElement('div');
          typingIndicator.className = 'message-wrapper received typing';
          typingIndicator.innerHTML = `
            <img src="https://i.ibb.co/jv00vHGV/Profile.jpg" alt="Samad" class="message-avatar">
            <div class="message-content-row">
              <div class="message received">
                <div class="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          `;
          chatMessages.appendChild(typingIndicator);
          chatMessages.scrollTop = chatMessages.scrollHeight;
          
          // Generate AI response
          setTimeout(async () => {
            typingIndicator.remove();
            try {
              const aiResponse = await generateAIResponse(aiResponseMessage);

              // Check if AI response contains video marker
              if (aiResponse.startsWith('SEND_VIDEO:')) {
                const videoEmbedCode = aiResponse.replace('SEND_VIDEO:', '');
                sendVideoMessage(videoEmbedCode, "here's something for you.");
                return;
              }

              // Check if AI response contains song marker
              if (aiResponse.startsWith('SEND_SONG:')) {
                const songData = JSON.parse(aiResponse.replace('SEND_SONG:', ''));
                sendAIVoiceNote(songData);
                return;
              }

              // Add AI response to chat
              const responseWrapper = document.createElement('div');
              responseWrapper.className = 'message-wrapper received';
              responseWrapper.innerHTML = `
                <img src="https://i.ibb.co/jv00vHGV/Profile.jpg" alt="Samad" class="message-avatar">
                <div class="message-content-row">
                  <div class="message received">
                    <span>${aiResponse}</span>
                  </div>
                </div>
              `;
              chatMessages.appendChild(responseWrapper);
              chatMessages.scrollTop = chatMessages.scrollHeight;
              
              // Add to conversation history
              conversationHistory.push({ role: 'user', message: aiResponseMessage });
              conversationHistory.push({ role: 'assistant', message: aiResponse });
              
              // Play typing sound
              playTypingSound();
            } catch (error) {
              console.error('Error generating AI response:', error);
            }
          }, 1500 + Math.random() * 1000);
        };

        // Revert to original UI
        revertToOriginalUI();
      };

      // Start recording
      mediaRecorder.start();
      recordingStartTime = Date.now();
      updateTimer();
      timerInterval = setInterval(updateTimer, 1000);

      // Setup real-time speech recognition
      setupRealTimeTranscription(audioStream);

      // Setup audio visualization
      setupAudioVisualization(audioStream);

      // Update UI
      hideOriginalButtons();
      recordingInterface.classList.remove('hidden');

      // Setup button handlers
      cancelRecordingBtn.onclick = cancelRecording;
      sendRecordingBtn.onclick = stopRecording;

    } catch (error) {
      console.error('Error accessing microphone:', error);
      cleanupRecording();
      revertToOriginalUI();
      alert('Could not access microphone. Please allow microphone access.');
    }
  }

  function cleanupRecording() {
    // Stop recognition
    if (recognition) {
      try {
        recognition.stop();
      } catch (e) {
        console.error('Error stopping recognition:', e);
      }
      recognition = null;
    }

    // Stop waveform animation
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }

    // Close audio context
    if (audioContext) {
      try {
        audioContext.close();
      } catch (e) {
        console.error('Error closing audio context:', e);
      }
      audioContext = null;
    }

    // Stop all media stream tracks
    if (audioStream) {
      audioStream.getTracks().forEach(track => {
        try {
          track.stop();
        } catch (e) {
          console.error('Error stopping track:', e);
        }
      });
      audioStream = null;
    }

    // Clear timer
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function hideOriginalButtons() {
    emojiBtn.classList.add('hidden');
    chatInput.classList.add('hidden');
    plusBtn.classList.add('hidden');
    sendChatBtn.classList.add('hidden');
  }

  function revertToOriginalUI() {
    emojiBtn.classList.remove('hidden');
    chatInput.classList.remove('hidden');
    plusBtn.classList.remove('hidden');
    sendChatBtn.classList.remove('hidden');
    recordingInterface.classList.add('hidden');
  }

  function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
    isRecording = false;
  }

  function cancelRecording() {
    shouldSendOnStop = false;
    stopRecording();
    cleanupRecording();
    revertToOriginalUI();
    transcriptionText = '';
    audioChunks = [];
  }

  function updateTimer() {
    if (!recordingStartTime) return;
    const elapsed = Date.now() - recordingStartTime;
    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const displaySeconds = seconds % 60;
    recordingTimer.textContent = `${minutes}:${displaySeconds.toString().padStart(2, '0')}`;
  }

  function setupAudioVisualization(stream) {
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);
      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);

      const canvas = recordingWaveform;
      const ctx = canvas.getContext('2d');
      
      // Initialize canvas size
      initCanvas(canvas, ctx);

      function draw() {
        if (!isRecording) return;
        
        animationId = requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray);

        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        
        if (width === 0 || height === 0) return;
        
        ctx.clearRect(0, 0, width, height);
        
        const barWidth = width / bufferLength * 2.5;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const barHeight = (dataArray[i] / 255) * height * 0.8;
          
          // Create gradient for bars - dark pink
          const gradient = ctx.createLinearGradient(0, height - barHeight, 0, height);
          gradient.addColorStop(0, '#a8336e');
          gradient.addColorStop(1, 'rgba(168, 51, 110, 0.5)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.roundRect(x, (height - barHeight) / 2, barWidth - 1, barHeight, 3);
          ctx.fill();
          
          x += barWidth;
        }
      }

      draw();
    } catch (error) {
      console.error('Error setting up audio visualization:', error);
    }
  }

  function initCanvas(canvas, ctx) {
    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * 2;
      canvas.height = rect.height * 2;
      ctx.scale(2, 2);
    };
    
    // Try immediate sizing
    setCanvasSize();
    
    // Fallback: retry if element is hidden
    if (canvas.offsetWidth === 0) {
      setTimeout(setCanvasSize, 100);
    }
  }

  function setupRealTimeTranscription(stream) {
    console.log('=== Starting speech recognition setup ===');
    console.log('Browser:', navigator.userAgent);
    console.log('Language:', navigator.language);
    
    // Check for Speech Recognition support
    const hasSpeechRecognition = 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
    
    if (!hasSpeechRecognition) {
      console.warn('Speech recognition NOT supported in this browser');
      console.warn('Supported browsers: Chrome, Edge, Safari (not Firefox)');
      showRecordingStatus('Recording audio (speech recognition not available)...');
      return;
    }

    console.log('✓ Speech recognition supported');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    
    // Configure recognition for best results
    recognition.lang = navigator.language || 'en-US';
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    
    console.log('Config:', { lang: recognition.lang, continuous: recognition.continuous, interimResults: recognition.interimResults });

    let restartAttempts = 0;
    const maxRestarts = 3;

    recognition.onstart = () => {
      console.log('✓ Speech recognition STARTED');
      restartAttempts = 0;
      showRecordingStatus('Listening...');
    };

    recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        const isFinal = event.results[i].isFinal;
        const confidence = event.results[i][0].confidence;
        
        if (isFinal) {
          finalTranscript += transcript;
          console.log('✓ Final transcript:', transcript, '(confidence:', confidence.toFixed(2) + ')');
        } else {
          interimTranscript += transcript;
          console.log('○ Interim:', transcript);
        }
      }

      // Always update with final results
      if (finalTranscript) {
        transcriptionText += finalTranscript + ' ';
        console.log('Full transcription so far:', transcriptionText);
      }
      
      // Keep interim as live backup
      if (interimTranscript) {
        transcriptionText = (transcriptionText + interimTranscript).trim() + ' ';
      }
    };

    recognition.onerror = (event) => {
      const error = event.error;
      console.error('❌ Speech recognition ERROR:', error);
      
      // Auto-restart on certain errors if still recording
      if (isRecording && restartAttempts < maxRestarts) {
        const restartableErrors = ['no-speech', 'audio-capture', 'network', 'aborted'];
        
        if (restartableErrors.includes(error)) {
          restartAttempts++;
          console.log(`Restarting recognition (attempt ${restartAttempts}/${maxRestarts})...`);
          
          setTimeout(() => {
            try {
              if (isRecording && recognition) {
                recognition.start();
              }
            } catch (e) {
              console.error('Failed to restart recognition:', e);
            }
          }, 300);
        }
      }
      
      // Show user-friendly error for critical errors
      if (error === 'not-allowed') {
        showRecordingStatus('Mic permission denied. Check settings.');
        alert('Microphone permission denied. Please allow microphone access in your browser settings.');
      } else if (error === 'network') {
        showRecordingStatus('Network error. Check internet.');
      } else if (error === 'no-speech') {
        showRecordingStatus('No speech detected. Try speaking louder.');
      }
    };

    recognition.onend = () => {
      console.log('Speech recognition ENDED');
      
      // Auto-restart if still recording and we haven't exceeded max attempts
      if (isRecording && restartAttempts < maxRestarts) {
        restartAttempts++;
        console.log(`Auto-restarting recognition (${restartAttempts}/${maxRestarts})...`);
        
        setTimeout(() => {
          try {
            if (isRecording) {
              recognition.start();
            }
          } catch (e) {
            console.error('Auto-restart failed:', e);
          }
        }, 200);
      }
    };

    // Start recognition
    try {
      recognition.start();
      console.log('Recognition start() called');
    } catch (e) {
      console.error('❌ Failed to start recognition:', e);
      showRecordingStatus('Speech recognition failed');
    }
  }

  function showRecordingStatus(message) {
    // Update the timer to show status temporarily
    if (recordingTimer) {
      const originalText = recordingTimer.textContent;
      recordingTimer.textContent = message;
      recordingTimer.style.fontSize = '12px';
      
      // Restore timer after 3 seconds
      setTimeout(() => {
        if (isRecording) {
          recordingTimer.style.fontSize = '';
          updateTimer();
        }
      }, 3000);
    }
  }

  function sendAudioMessage(audioBase64, transcript = '') {
    const audio = new Audio(audioBase64);
    audio.onloadedmetadata = () => {
      const duration = Math.floor(audio.duration);
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      const durationText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      const messageId = 'msg-' + Date.now();
      const hasTranscript = transcript && transcript.length > 0;

      const messageWrapper = document.createElement('div');
      messageWrapper.className = 'message-wrapper sent';
      messageWrapper.innerHTML = `
        <div class="message-content-row">
          <div class="message sent">
            <div class="audio-message-bubble sent">
              <button class="audio-play-btn" onclick="toggleAudioPlayback(this, '${audioBase64}')">
                <svg viewBox="0 0 24 24">
                  <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                </svg>
              </button>
              <div class="audio-waveform-container" id="waveform-${Date.now()}">
                ${generateWaveformBars()}
              </div>
              <span class="audio-duration">${durationText}</span>
            </div>
            ${hasTranscript ? `
            <div class="transcript-toggle" onclick="toggleTranscript('${messageId}')">
              <span class="transcript-label"> Transcribed text</span>
              <span class="transcript-arrow">▼</span>
            </div>
            <div class="transcript-text hidden" id="transcript-${messageId}">
              ${transcript}
            </div>
            ` : ''}
            <div class="quick-reactions hidden">
              <span class="reaction-emoji">🤍</span>
              <span class="reaction-emoji">🦢</span>
              <span class="reaction-emoji">☁️</span>
              <span class="reaction-emoji">🕊️</span>
              <span class="reaction-emoji">👀</span>
              <button class="add-reaction-btn">+</button>
            </div>
          </div>
          <div class="message-actions">
            <button class="action-btn reaction-btn" title="React">☺︎</button>
            <button class="action-btn reply-btn" title="Reply">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
              </svg>
            </button>
            <button class="action-btn more-btn" title="More">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                <circle cx="12" cy="5" r="2"/>
                <circle cx="12" cy="12" r="2"/>
                <circle cx="12" cy="19" r="2"/>
              </svg>
            </button>
          </div>
          <div class="swipe-reply-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
            </svg>
          </div>
        </div>
      `;
      chatMessages.appendChild(messageWrapper);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      addSwipeToReply(messageWrapper);
    };
  }

  window.toggleTranscript = function(messageId) {
    const transcriptEl = document.getElementById(`transcript-${messageId}`);
    const toggleEl = transcriptEl.previousElementSibling;
    const arrow = toggleEl.querySelector('.transcript-arrow');
    
    if (transcriptEl.classList.contains('hidden')) {
      transcriptEl.classList.remove('hidden');
      arrow.textContent = '▲';
    } else {
      transcriptEl.classList.add('hidden');
      arrow.textContent = '▼';
    }
  }

  function generateWaveformBars() {
    let bars = '';
    for (let i = 0; i < 30; i++) {
      const height = Math.random() * 30 + 10;
      bars += `<div class="audio-waveform-bar" style="height: ${height}px;"></div>`;
    }
    return bars;
  }

  // Function to send AI voice note (styled like user voice notes but as received)
  function sendAIVoiceNote(songData) {
    const audio = new Audio(songData.audioUrl);
    audio.onloadedmetadata = () => {
      const duration = Math.floor(audio.duration);
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      const durationText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      const messageId = 'msg-ai-' + Date.now();
      const waveformId = 'waveform-ai-' + Date.now();

      const messageWrapper = document.createElement('div');
      messageWrapper.className = 'message-wrapper received';
      messageWrapper.innerHTML = `
        <img src="https://i.ibb.co/jv00vHGV/Profile.jpg" alt="Samad" class="message-avatar">
        <div class="message-content-row">
          <div class="message received">
            <div class="audio-message-bubble received">
              <button class="audio-play-btn" onclick="toggleAudioPlayback(this, '${songData.audioUrl}')">
                <svg viewBox="0 0 24 24">
                  <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                </svg>
              </button>
              <div class="audio-waveform-container" id="${waveformId}">
                ${generateWaveformBars()}
              </div>
              <span class="audio-duration">${durationText}</span>
            </div>
            <div class="quick-reactions hidden">
              <span class="reaction-emoji">🤍</span>
              <span class="reaction-emoji">🦢</span>
              <span class="reaction-emoji">☁️</span>
              <span class="reaction-emoji">🕊️</span>
              <span class="reaction-emoji">👀</span>
              <button class="add-reaction-btn">+</button>
            </div>
            <div class="reaction-pill hidden">
              <span class="reaction-pill-emoji">🤍</span>
              <span class="reaction-pill-count">1</span>
            </div>
          </div>
          <div class="message-actions">
            <button class="action-btn reaction-btn" title="React">☺︎</button>
            <button class="action-btn reply-btn" title="Reply">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
              </svg>
            </button>
            <button class="action-btn more-btn" title="More">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                <circle cx="12" cy="5" r="2"/>
                <circle cx="12" cy="12" r="2"/>
                <circle cx="12" cy="19" r="2"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="swipe-reply-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
          </svg>
        </div>
      `;
      chatMessages.appendChild(messageWrapper);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      addSwipeToReply(messageWrapper);
    };
  }

  window.toggleAudioPlayback = function(btn, audioSrc) {
    const isPlaying = btn.classList.contains('playing');
    const allAudioBtns = document.querySelectorAll('.audio-play-btn');
    
    // Stop all other playing audio
    allAudioBtns.forEach(b => {
      if (b !== btn && b.classList.contains('playing')) {
        b.classList.remove('playing');
        b.innerHTML = '<svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" fill="currentColor"/></svg>';
        if (b.audioElement) {
          b.audioElement.pause();
          b.audioElement.currentTime = 0;
        }
      }
    });

    if (isPlaying) {
      btn.classList.remove('playing');
      btn.innerHTML = '<svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" fill="currentColor"/></svg>';
      if (btn.audioElement) {
        btn.audioElement.pause();
      }
    } else {
      btn.classList.add('playing');
      btn.innerHTML = '<svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" fill="currentColor"/><rect x="14" y="4" width="4" height="16" fill="currentColor"/></svg>';
      
      if (!btn.audioElement) {
        btn.audioElement = new Audio(audioSrc);
      }
      
      btn.audioElement.play();
      
      // Get duration element and update during playback
      const durationEl = btn.closest('.audio-message-bubble').querySelector('.audio-duration');
      const totalDuration = btn.audioElement.duration || 0;
      
      btn.audioElement.ontimeupdate = () => {
        if (durationEl && totalDuration > 0) {
          const remaining = totalDuration - btn.audioElement.currentTime;
          const minutes = Math.floor(remaining / 60);
          const seconds = Math.floor(remaining % 60);
          durationEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
      };
      
      btn.audioElement.onended = () => {
        btn.classList.remove('playing');
        btn.innerHTML = '<svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" fill="currentColor"/></svg>';
        if (durationEl) {
          const totalMinutes = Math.floor(totalDuration / 60);
          const totalSeconds = Math.floor(totalDuration % 60);
          durationEl.textContent = `${totalMinutes}:${totalSeconds.toString().padStart(2, '0')}`;
        }
      };

      // Animate waveform bars
      const waveformContainer = btn.closest('.audio-message-bubble').querySelector('.audio-waveform-container');
      const bars = waveformContainer.querySelectorAll('.audio-waveform-bar');
      const waveformAnimation = setInterval(() => {
        if (!btn.classList.contains('playing')) {
          clearInterval(waveformAnimation);
          return;
        }
        bars.forEach(bar => {
          const newHeight = Math.random() * 30 + 10;
          bar.style.height = `${newHeight}px`;
        });
      }, 100);
    }
  };

  document.querySelector('.photo-btn').addEventListener('click', () => {
    console.log('Photo option selected');
    closePlusMenu();
    photoInput.click();
  });

  // Handle photo upload
  photoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        sendImageMessage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
    photoInput.value = '';
  });

  // Helper function to add swipe-to-reply functionality to a message
  function addSwipeToReply(messageWrapper) {
    let swipeStartX = 0;
    let isSwiping = false;
    const swipeThreshold = 50;

    // Mouse events
    messageWrapper.addEventListener('mousedown', (e) => {
      if (e.target.closest('.action-btn') || e.target.closest('.quick-reactions')) return;
      swipeStartX = e.clientX;
      isSwiping = true;
    });

    messageWrapper.addEventListener('mousemove', (e) => {
      if (!isSwiping) return;
    });

    messageWrapper.addEventListener('mouseup', (e) => {
      if (!isSwiping) return;
      isSwiping = false;
      const swipeEndX = e.clientX;
      const swipeDistance = swipeEndX - swipeStartX;

      // Swipe left on sent messages to reply
      if (messageWrapper.classList.contains('sent') && swipeDistance < -swipeThreshold) {
        const messageEl = messageWrapper.querySelector('.message');
        const messageText = messageEl.querySelector('span.message-content-text')?.textContent || messageEl.querySelector('img.message-image')?.alt || 'Image';
        
        replyingTo = messageText;
        replyingToMessageElement = messageEl;
        isReplyingToSelf = true;
        replyPreview.classList.remove('hidden');
        
        const replyLabel = replyPreview.querySelector('.reply-label');
        const replyText = replyPreview.querySelector('.reply-text');
        replyLabel.textContent = 'Replying to yourself';
        replyText.textContent = truncateText(messageText);
        
        chatInput.focus();
      }
      // Swipe right on received messages to reply
      else if (messageWrapper.classList.contains('received') && swipeDistance > swipeThreshold) {
        const messageEl = messageWrapper.querySelector('.message');
        const messageText = messageEl.querySelector('span.message-content-text')?.textContent || messageEl.querySelector('img.message-image')?.alt || 'Image';
        
        replyingTo = messageText;
        replyingToMessageElement = messageEl;
        isReplyingToSelf = false;
        replyPreview.classList.remove('hidden');
        
        const replyLabel = replyPreview.querySelector('.reply-label');
        const replyText = replyPreview.querySelector('.reply-text');
        replyLabel.textContent = 'Replying to Samad';
        replyText.textContent = truncateText(messageText);
        
        chatInput.focus();
      }
    });

    messageWrapper.addEventListener('mouseleave', () => {
      isSwiping = false;
    });

    // Touch events for mobile
    messageWrapper.addEventListener('touchstart', (e) => {
      if (e.target.closest('.action-btn') || e.target.closest('.quick-reactions')) return;
      swipeStartX = e.touches[0].clientX;
      isSwiping = true;
    });

    messageWrapper.addEventListener('touchmove', (e) => {
      if (!isSwiping) return;
    });

    messageWrapper.addEventListener('touchend', (e) => {
      if (!isSwiping) return;
      isSwiping = false;
      const swipeEndX = e.changedTouches[0].clientX;
      const swipeDistance = swipeEndX - swipeStartX;

      // Swipe left on sent messages to reply
      if (messageWrapper.classList.contains('sent') && swipeDistance < -swipeThreshold) {
        const messageEl = messageWrapper.querySelector('.message');
        const messageText = messageEl.querySelector('span.message-content-text')?.textContent || messageEl.querySelector('img.message-image')?.alt || 'Image';
        
        replyingTo = messageText;
        replyingToMessageElement = messageEl;
        isReplyingToSelf = true;
        replyPreview.classList.remove('hidden');
        
        const replyLabel = replyPreview.querySelector('.reply-label');
        const replyText = replyPreview.querySelector('.reply-text');
        replyLabel.textContent = 'Replying to yourself';
        replyText.textContent = truncateText(messageText);
        
        chatInput.focus();
      }
      // Swipe right on received messages to reply
      else if (messageWrapper.classList.contains('received') && swipeDistance > swipeThreshold) {
        const messageEl = messageWrapper.querySelector('.message');
        const messageText = messageEl.querySelector('span.message-content-text')?.textContent || messageEl.querySelector('img.message-image')?.alt || 'Image';
        
        replyingTo = messageText;
        replyingToMessageElement = messageEl;
        isReplyingToSelf = false;
        replyPreview.classList.remove('hidden');
        
        const replyLabel = replyPreview.querySelector('.reply-label');
        const replyText = replyPreview.querySelector('.reply-text');
        replyLabel.textContent = 'Replying to Samad';
        replyText.textContent = truncateText(messageText);
        
        chatInput.focus();
      }
    });
  }

  // Function to send image message
  async function sendImageMessage(imageUrl) {
    const messageWrapper = document.createElement('div');
    messageWrapper.className = 'message-wrapper sent';
    messageWrapper.innerHTML = `
      <div class="message-content-row">
        <div class="message sent">
          <img src="${imageUrl}" alt="Uploaded image" class="message-image">
          <div class="quick-reactions hidden">
            <span class="reaction-emoji">🤍</span>
            <span class="reaction-emoji">🦢</span>
            <span class="reaction-emoji">☁️</span>
            <span class="reaction-emoji">🕊️</span>
            <span class="reaction-emoji">👀</span>
            <button class="add-reaction-btn">+</button>
          </div>
        </div>
        <div class="message-actions-right">
          <button class="action-btn reaction-btn" title="React">☺︎</button>
          <button class="action-btn reply-btn" title="Reply">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
              <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
            </svg>
          </button>
          <button class="action-btn more-btn" title="More">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <circle cx="12" cy="5" r="2"/>
              <circle cx="12" cy="12" r="2"/>
              <circle cx="12" cy="19" r="2"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="swipe-reply-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
        </svg>
      </div>
    `;
    chatMessages.appendChild(messageWrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Add swipe-to-reply functionality
    addSwipeToReply(messageWrapper);

    // Add image click handler for viewer (prevent if swipe occurred)
    const imageEl = messageWrapper.querySelector('.message-image');
    let imageClickEnabled = true;

    imageEl.addEventListener('touchstart', () => {
      imageClickEnabled = true;
    });

    imageEl.addEventListener('touchmove', () => {
      imageClickEnabled = false;
    });

    imageEl.addEventListener('touchend', () => {
      setTimeout(() => {
        imageClickEnabled = true;
      }, 100);
    });

    imageEl.addEventListener('click', (e) => {
      if (imageClickEnabled) {
        openImageViewer(imageUrl);
      }
    });

    // Show typing indicator for AI analysis
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'message-wrapper received typing';
    typingIndicator.innerHTML = `
      <img src="https://i.ibb.co/jv00vHGV/Profile.jpg" alt="Samad" class="message-avatar">
      <div class="message-content-row">
        <div class="message received">
          <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    `;
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Analyze image with AI
    try {
      const analysis = await analyzeImageWithAI(imageUrl);
      typingIndicator.remove();

      // Add AI response about the image
      const receivedMessageWrapper = document.createElement('div');
      receivedMessageWrapper.className = 'message-wrapper received';
      receivedMessageWrapper.innerHTML = `
        <img src="https://i.ibb.co/jv00vHGV/Profile.jpg" alt="Samad" class="message-avatar">
        <div class="message-content-row">
          <div class="message received">
            <span class="message-content-text">${analysis}</span>
            <div class="quick-reactions hidden">
              <span class="reaction-emoji">🤍</span>
              <span class="reaction-emoji">🦢</span>
              <span class="reaction-emoji">☁️</span>
              <span class="reaction-emoji">🕊️</span>
              <span class="reaction-emoji">👀</span>
              <button class="add-reaction-btn">+</button>
            </div>
          </div>
          <div class="message-actions">
            <button class="action-btn reaction-btn" title="React">☺︎</button>
            <button class="action-btn reply-btn" title="Reply">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
              </svg>
            </button>
            <button class="action-btn more-btn" title="More">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                <circle cx="12" cy="5" r="2"/>
                <circle cx="12" cy="12" r="2"/>
                <circle cx="12" cy="19" r="2"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="swipe-reply-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
          </svg>
        </div>
      `;
      chatMessages.appendChild(receivedMessageWrapper);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      addSwipeToReply(receivedMessageWrapper);
    } catch (error) {
      console.error('Error analyzing image:', error);
      typingIndicator.remove();
    }
  }

  // Open Instagram-style image viewer
  function openImageViewer(imageUrl) {
    imageViewerImg.src = imageUrl;
    imageViewer.classList.remove('hidden');
  }

  // Close image viewer
  function closeImageViewer() {
    imageViewer.classList.add('hidden');
    imageViewerImg.src = '';
  }

  // Close image viewer on backdrop click
  imageViewerBackdrop.addEventListener('click', closeImageViewer);

  // Close image viewer on close button click
  imageViewerClose.addEventListener('click', closeImageViewer);

  // Close image viewer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !imageViewer.classList.contains('hidden')) {
      closeImageViewer();
    }
    if (e.key === 'Escape' && !videoViewer.classList.contains('hidden')) {
      closeVideoViewer();
    }
  });

  // Open video viewer
  function openVideoViewer(videoEmbedCode) {
    videoViewerContent.innerHTML = videoEmbedCode;
    videoViewer.classList.remove('hidden');
  }

  // Close video viewer
  function closeVideoViewer() {
    videoViewer.classList.add('hidden');
    videoViewerContent.innerHTML = '';
  }

  // Close video viewer on backdrop click
  videoViewerBackdrop.addEventListener('click', closeVideoViewer);

  // Close video viewer on close button click
  videoViewerClose.addEventListener('click', closeVideoViewer);

  // Function to send video message
  function sendVideoMessage(videoEmbedCode, messageText = "here's something for you.") {
    const messageWrapper = document.createElement('div');
    messageWrapper.className = 'message-wrapper received';
    messageWrapper.innerHTML = `
      <img src="https://i.ibb.co/jv00vHGV/Profile.jpg" alt="Samad" class="message-avatar">
      <div class="message-content-row">
        <div class="message received">
          <div class="video-thumbnail" data-video="${encodeURIComponent(videoEmbedCode)}" style="background-image: url('https://i.ibb.co/sY006dM/Black-Video-0-Still001.png'); background-size: cover; background-position: center;">
            <svg class="video-play-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <span class="message-content-text">${messageText}</span>
          <div class="quick-reactions hidden">
            <span class="reaction-emoji">🤍</span>
            <span class="reaction-emoji">🦢</span>
            <span class="reaction-emoji">☁️</span>
            <span class="reaction-emoji">🕊️</span>
            <span class="reaction-emoji">👀</span>
            <button class="add-reaction-btn">+</button>
          </div>
          <div class="reaction-pill hidden">
            <span class="reaction-pill-emoji">🤍</span>
            <span class="reaction-pill-count">1</span>
          </div>
        </div>
        <div class="message-actions">
          <button class="action-btn reaction-btn" title="React">☺︎</button>
          <button class="action-btn reply-btn" title="Reply">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
              <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
            </svg>
          </button>
          <button class="action-btn more-btn" title="More">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <circle cx="12" cy="5" r="2"/>
              <circle cx="12" cy="12" r="2"/>
              <circle cx="12" cy="19" r="2"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="swipe-reply-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
        </svg>
      </div>
    `;
    chatMessages.appendChild(messageWrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    addSwipeToReply(messageWrapper);

    // Add click handler to open video viewer
    const videoThumbnail = messageWrapper.querySelector('.video-thumbnail');
    videoThumbnail.addEventListener('click', () => {
      openVideoViewer(videoEmbedCode);
    });
  }

  document.querySelector('.sticker-btn').addEventListener('click', () => {
    console.log('Sticker option selected');
    closePlusMenu();
    toggleStickerPicker();
  });

  // Close plus menu when clicking outside
  document.addEventListener('click', (e) => {
    const isPlusBtn = e.target.closest('.plus-btn');
    const isPlusMenu = e.target.closest('.plus-menu');

    // Close plus menu if clicking outside
    if (!plusMenu.classList.contains('hidden') && !isPlusBtn && !isPlusMenu) {
      closePlusMenu();
    }
  });

  // Helper function to truncate text for preview (preserves HTML)
  function truncateText(text, maxLength = 50) {
    // Create a temporary div to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;
    
    // Get text content length without HTML tags
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    
    if (textContent.length <= maxLength) return text;
    
    // If text is too long, truncate the text content but preserve structure
    // For simplicity, just return the original HTML if it contains images
    if (text.includes('<img')) return text;
    
    // Otherwise truncate as before
    return text.substring(0, maxLength) + '...';
  }

  // Send message
  async function sendMessage() {
    const message = chatInput.innerHTML.trim();
    console.log('sendMessage called, editingMessage:', editingMessage, 'message:', message);

    // Prevent sending empty messages or messages with only <br>
    if (!message || message === '<br>' || message === '') {
      return;
    }

    if (message) {
      // Handle editing existing message
      if (editingMessage) {
        console.log('Editing message, current editingMessage:', editingMessage);
        const messageContentText = editingMessage.querySelector('.message-content-text');
        const oldMessage = messageContentText.innerHTML;

        if (messageContentText) {
          messageContentText.innerHTML = message;
        }

        // Add edited indicator if not already present (in metadata container)
        const messageWrapper = editingMessage.closest('.message-wrapper');
        if (messageWrapper && !messageWrapper.querySelector('.edited-indicator')) {
          const metadataDiv = document.createElement('div');
          metadataDiv.className = 'message-metadata';
          const editedSpan = document.createElement('span');
          editedSpan.className = 'edited-indicator';
          editedSpan.textContent = 'edited';
          metadataDiv.appendChild(editedSpan);
          messageWrapper.insertBefore(metadataDiv, messageWrapper.firstChild);
        }

        // Clear all messages after the edited message
        const allMessageWrappers = Array.from(chatMessages.querySelectorAll('.message-wrapper'));
        const editIndex = allMessageWrappers.indexOf(messageWrapper);
        if (editIndex !== -1) {
          for (let i = editIndex + 1; i < allMessageWrappers.length; i++) {
            allMessageWrappers[i].remove();
          }
        }

        // Update conversation history - remove messages after the edited one
        // Find the index of the edited message in conversation history using old message text
        const historyIndex = conversationHistory.findIndex(
          (msg, index) => index % 2 === 0 && msg.message === oldMessage
        );

        if (historyIndex !== -1) {
          // Update the edited message in history
          conversationHistory[historyIndex].message = message;
          // Remove all messages after the edited one
          conversationHistory = conversationHistory.slice(0, historyIndex + 1);
        } else {
          // If not found in history, just clear it
          conversationHistory = [];
        }

        // Update reply preview if editing the message being replied to
        if (replyingToMessageElement && editingMessage === replyingToMessageElement) {
          replyingTo = message;
          const replyText = replyPreview.querySelector('.reply-text');
          if (replyText) {
            replyText.innerHTML = truncateText(message);
          }
        }

        // Clear editing state
        editingMessage = null;
        editPreview.classList.add('hidden');
        chatInput.innerHTML = '';
        chatInput.dispatchEvent(new Event('input'));

        // Generate new response for the edited message
        console.log('Generating response for edited message:', message);

        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message-wrapper received typing';
        typingIndicator.innerHTML = `
          <img src="https://i.ibb.co/jv00vHGV/Profile.jpg" alt="Samad" class="message-avatar">
          <div class="message-content-row">
            <div class="message received">
              <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        `;
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
          const response = await generateAIResponse(message);
          console.log('Response generated:', response);

          // Remove typing indicator
          typingIndicator.remove();

          if (response) {
            const receivedMessageWrapper = document.createElement('div');
            receivedMessageWrapper.className = 'message-wrapper received';
            receivedMessageWrapper.innerHTML = `
              <img src="https://i.ibb.co/jv00vHGV/Profile.jpg" alt="Samad" class="message-avatar">
              <div class="message-content-row">
                <div class="message received">
                  <span class="message-content-text">${response}</span>
                  <div class="quick-reactions hidden">
                    <span class="reaction-emoji">🤍</span>
                    <span class="reaction-emoji">🦢</span>
                    <span class="reaction-emoji">☁️</span>
                    <span class="reaction-emoji">🕊️</span>
                    <span class="reaction-emoji">👀</span>
                    <button class="add-reaction-btn">+</button>
                  </div>
                </div>
                <div class="message-actions">
                  <button class="action-btn reaction-btn" title="React">☺︎</button>
                  <button class="action-btn reply-btn" title="Reply">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                      <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
                    </svg>
                  </button>
                  <button class="action-btn more-btn" title="More">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                      <circle cx="12" cy="5" r="2"/>
                      <circle cx="12" cy="12" r="2"/>
                      <circle cx="12" cy="19" r="2"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="swipe-reply-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
                </svg>
              </div>
            `;
            chatMessages.appendChild(receivedMessageWrapper);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            addSwipeToReply(receivedMessageWrapper);
            console.log('Message added to chat');
          } else {
            console.log('No response generated, using fallback');
            const fallback = getLocalResponse(message);
            const fallbackWrapper = document.createElement('div');
            fallbackWrapper.className = 'message-wrapper received';
            fallbackWrapper.innerHTML = `
              <img src="https://i.ibb.co/jv00vHGV/Profile.jpg" alt="Samad" class="message-avatar">
              <div class="message-content-row">
                <div class="message received">
                  <span class="message-content-text">${fallback}</span>
                  <div class="quick-reactions hidden">
                    <span class="reaction-emoji">🤍</span>
                    <span class="reaction-emoji">🦢</span>
                    <span class="reaction-emoji">☁️</span>
                    <span class="reaction-emoji">🕊️</span>
                    <span class="reaction-emoji">👀</span>
                    <button class="add-reaction-btn">+</button>
                  </div>
                </div>
                <div class="message-actions">
                  <button class="action-btn reaction-btn" title="React">☺︎</button>
                  <button class="action-btn reply-btn" title="Reply">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                      <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
                    </svg>
                  </button>
                  <button class="action-btn more-btn" title="More">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                      <circle cx="12" cy="5" r="2"/>
                      <circle cx="12" cy="12" r="2"/>
                      <circle cx="12" cy="19" r="2"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="swipe-reply-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
                </svg>
              </div>
            `;
            chatMessages.appendChild(fallbackWrapper);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            addSwipeToReply(fallbackWrapper);
          }
        } catch (error) {
          console.error('Error generating response for edited message:', error);
          typingIndicator.remove();

          // Add fallback response if AI fails
          const fallback = getLocalResponse(message);
          console.log('Using fallback response:', fallback);
          const fallbackWrapper = document.createElement('div');
          fallbackWrapper.className = 'message-wrapper received';
          fallbackWrapper.innerHTML = `
            <img src="https://i.ibb.co/jv00vHGV/Profile.jpg" alt="Samad" class="message-avatar">
            <div class="message-content-row">
              <div class="message received">
                <span class="message-content-text">${fallback}</span>
                <div class="quick-reactions hidden">
                  <span class="reaction-emoji">🤍</span>
                  <span class="reaction-emoji">🦢</span>
                  <span class="reaction-emoji">☁️</span>
                  <span class="reaction-emoji">🕊️</span>
                  <span class="reaction-emoji">👀</span>
                  <button class="add-reaction-btn">+</button>
                </div>
              </div>
              <div class="message-actions">
                <button class="action-btn reaction-btn" title="React">☺︎</button>
                <button class="action-btn reply-btn" title="Reply">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                    <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
                  </svg>
                </button>
                <button class="action-btn more-btn" title="More">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <circle cx="12" cy="5" r="2"/>
                    <circle cx="12" cy="12" r="2"/>
                    <circle cx="12" cy="19" r="2"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="swipe-reply-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
              </svg>
            </div>
          `;
          chatMessages.appendChild(fallbackWrapper);
          chatMessages.scrollTop = chatMessages.scrollHeight;
          addSwipeToReply(fallbackWrapper);
        }
        return;
      }
      
      if (replyingTo) {
        // Add reply indicator with Instagram-style
        const messageWrapper = document.createElement('div');
        messageWrapper.className = 'message-wrapper sent reply';
        const replySender = isReplyingToSelf ? 'You' : 'Samad';
        messageWrapper.innerHTML = `
          <div class="message-content-row">
            <div class="message sent">
              <div class="reply-indicator">
                <div class="reply-indicator-bar">
                  <span class="reply-indicator-sender">${replySender}</span>
                  <span class="reply-indicator-text">${truncateText(replyingTo)}</span>
                </div>
              </div>
              <span class="message-content-text">${message}</span>
              <div class="quick-reactions hidden">
                <span class="reaction-emoji">🤍</span>
                <span class="reaction-emoji">🦢</span>
                <span class="reaction-emoji">☁️</span>
                <span class="reaction-emoji">🕊️</span>
                <span class="reaction-emoji">👀</span>
                <button class="add-reaction-btn">+</button>
              </div>
            </div>
            <div class="message-actions">
              <button class="action-btn reaction-btn" title="React">☺︎</button>
              <button class="action-btn reply-btn" title="Reply">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                  <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
                </svg>
              </button>
              <button class="action-btn more-btn" title="More">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <circle cx="12" cy="5" r="2"/>
                  <circle cx="12" cy="12" r="2"/>
                  <circle cx="12" cy="19" r="2"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="swipe-reply-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
            </svg>
          </div>
        `;
        chatMessages.appendChild(messageWrapper);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        addSwipeToReply(messageWrapper);
        
        // Clear reply
        replyingTo = null;
        replyingToMessageElement = null;
        isReplyingToSelf = false;
        replyPreview.classList.add('hidden');
      } else {
        // Regular message
        const messageWrapper = document.createElement('div');
        messageWrapper.className = 'message-wrapper sent';
        messageWrapper.innerHTML = `
          <div class="message-content-row">
            <div class="message sent">
              <span class="message-content-text">${message}</span>
              <div class="quick-reactions hidden">
                <span class="reaction-emoji">🤍</span>
                <span class="reaction-emoji">🦢</span>
                <span class="reaction-emoji">☁️</span>
                <span class="reaction-emoji">🕊️</span>
                <span class="reaction-emoji">👀</span>
                <button class="add-reaction-btn">+</button>
              </div>
            </div>
            <div class="message-actions">
              <button class="action-btn reaction-btn" title="React">☺︎</button>
              <button class="action-btn reply-btn" title="Reply">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                  <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
                </svg>
              </button>
              <button class="action-btn more-btn" title="More">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <circle cx="12" cy="5" r="2"/>
                  <circle cx="12" cy="12" r="2"/>
                  <circle cx="12" cy="19" r="2"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="swipe-reply-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
            </svg>
          </div>
        `;
        chatMessages.appendChild(messageWrapper);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        addSwipeToReply(messageWrapper);
      }

      chatInput.innerHTML = '';
      chatInput.dispatchEvent(new Event('input'));
      chatInput.focus();
      chatMessages.scrollTop = chatMessages.scrollHeight;
      
      // Show typing indicator
      const typingIndicator = document.createElement('div');
      typingIndicator.className = 'message-wrapper received typing';
      typingIndicator.innerHTML = `
        <img src="https://i.ibb.co/jv00vHGV/Profile.jpg" alt="Samad" class="message-avatar">
        <div class="message-content-row">
          <div class="message received">
            <div class="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      `;
      chatMessages.appendChild(typingIndicator);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Generate AI response using local model
      try {
        const aiResponse = await generateAIResponse(message);

        // Remove typing indicator
        typingIndicator.remove();

        // Check if AI response contains video marker
        if (aiResponse.startsWith('SEND_VIDEO:')) {
          const videoEmbedCode = aiResponse.replace('SEND_VIDEO:', '');
          sendVideoMessage(videoEmbedCode, "here's something for you.");
          return;
        }

        // Check if AI response contains song marker
        if (aiResponse.startsWith('SEND_SONG:')) {
          const songData = JSON.parse(aiResponse.replace('SEND_SONG:', ''));
          sendAIVoiceNote(songData);
          return;
        }

        const receivedMessageWrapper = document.createElement('div');
        receivedMessageWrapper.className = 'message-wrapper received';
        receivedMessageWrapper.innerHTML = `
          <img src="https://i.ibb.co/jv00vHGV/Profile.jpg" alt="Samad" class="message-avatar">
          <div class="message-content-row">
            <div class="message received">
              <span class="message-content-text">${aiResponse}</span>
              <div class="quick-reactions hidden">
                <span class="reaction-emoji">🤍</span>
                <span class="reaction-emoji">🦢</span>
                <span class="reaction-emoji">☁️</span>
                <span class="reaction-emoji">🕊️</span>
                <span class="reaction-emoji">👀</span>
                <button class="add-reaction-btn">+</button>
              </div>
            </div>
            <div class="message-actions">
                <button class="action-btn reaction-btn" title="React">☺︎</button>
                <button class="action-btn reply-btn" title="Reply">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                    <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
                  </svg>
                </button>
                <button class="action-btn more-btn" title="More">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                    <circle cx="12" cy="5" r="2"/>
                    <circle cx="12" cy="12" r="2"/>
                    <circle cx="12" cy="19" r="2"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="swipe-reply-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
              </svg>
            </div>
          `;
          chatMessages.appendChild(receivedMessageWrapper);
          chatMessages.scrollTop = chatMessages.scrollHeight;
          addSwipeToReply(receivedMessageWrapper);
      } catch (error) {
        console.error('AI response error:', error);
        typingIndicator.remove();

        const errorMessage = document.createElement('div');
        errorMessage.className = 'message-wrapper received';
        errorMessage.innerHTML = `
          <img src="https://i.ibb.co/jv00vHGV/Profile.jpg" alt="Samad" class="message-avatar">
          <div class="message-content-row">
            <div class="message received">
              <span class="message-content-text">Sorry, I'm having trouble thinking right now. Please try again! 🤍</span>
            </div>
          </div>
        `;
        chatMessages.appendChild(errorMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        addSwipeToReply(errorMessage);
      }
    }
  }
  
  sendChatBtn.addEventListener('click', sendMessage);

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      // Only send if input has content
      const hasContent = chatInput.innerHTML.trim().length > 0 && chatInput.innerHTML.trim() !== '<br>';
      if (hasContent) {
        sendMessage();
      }
    } else {
      // Play typing sound on keypress (except Enter)
      playTypingSound();
    }
  });

  // Play backspace sound on backspace
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      playBackspaceSound();
    }
  });

  // Handle send button and plus button visibility based on input
  chatInput.addEventListener('input', () => {
    const hasContent = chatInput.innerHTML.trim().length > 0 && chatInput.innerHTML.trim() !== '<br>';
    if (hasContent) {
      sendChatBtn.classList.add('visible');
      plusBtn.classList.add('hidden');
    } else {
      sendChatBtn.classList.remove('visible');
      plusBtn.classList.remove('hidden');
    }
  });

  // Initialize button visibility on page load
  const hasContent = chatInput.innerHTML.trim().length > 0 && chatInput.innerHTML.trim() !== '<br>';
  if (hasContent) {
    sendChatBtn.classList.add('visible');
    plusBtn.classList.add('hidden');
  } else {
    sendChatBtn.classList.remove('visible');
    plusBtn.classList.remove('hidden');
  }

  // Emoji button functionality
  const getCategoryIcon = (category) => {
    const icons = {
      red: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35Z" fill="currentColor" stroke="none"/></svg>`,
      orange: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="10" r="4" fill="currentColor"/><path d="M5 18H19M6 14L8 12M18 14L16 12M12 6V4M17 6L15 8M7 6L9 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
      yellow: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="none"/></svg>`,
      green: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C9 7 4 9 4 14c0 4 4 6 8 6s8-2 8-6c0-5-5-7-8-12Z" fill="currentColor" stroke="none"/><path d="M12 8v10M8 11l4-3 4 3" stroke="white" stroke-width="1" fill="none"/></svg>`,
      pink: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.69L5.5 11.5C4.5 12.8 4 14.3 4 15.8 4 19.4 7.6 22 12 22s8-2.6 8-6.2c0-1.5-.5-3-1.5-4.3L12 2.69Z" fill="currentColor" stroke="none"/></svg>`,
      purple: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 20,7 20,17 12,22 4,17 4,7 12,2" fill="currentColor" stroke="none"/><polygon points="12,2 12,22 20,17 20,7" fill="currentColor" opacity="0.5"/><line x1="12" y1="2" x2="12" y2="22" stroke="white" stroke-width="0.5" opacity="0.4"/></svg>`,
      brown: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8h10c1.1 0 2 .9 2 2v4c0 3.3-2.7 6-6 6s-6-2.7-6-6v-4c0-1.1.9-2 2-2Z" fill="currentColor" stroke="none"/><path d="M18 10h1c1.7 0 3 1.3 3 3s-1.3 3-3 3h-1" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M6 6c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>`,
      black: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C8.5 5 7 8.5 7 12c0 5 4 9 9 9 2 0 3.5-.5 5-1.5-2 3-6 4.5-10 3.5S5 19 4 15 4.5 6 8 4c1.5-1 3-1 4-1Z" fill="currentColor" stroke="none"/></svg>`,
      white: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3c-3 2-6 5.5-6 10 0 3 2 6 5 7 0-2 1-4 3-6 2-2 4-4 4-7 0-3-2-5-6-4Z" fill="currentColor" stroke="#D1D1D6" stroke-width="1"/></svg>`,
      gray: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4" fill="currentColor"/><path d="M12 2L14.5 4.5 18 3 20 6.5 22 8 20.5 11.5 22 15 20 18.5 18 20 14.5 18.5 12 22 9.5 19.5 6 21 4 17.5 2 16 3.5 12.5 2 9 4 5.5 6 4 9.5 5.5 12 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>`,
      teal: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="3,20 12,5 21,20" fill="currentColor" opacity="0.6"/><polygon points="8,20 12,10 16,20" fill="currentColor"/><polygon points="5,20 12,5 8,12 4,20" fill="currentColor" opacity="0.4"/></svg>`,
      lavender: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21c-2-1-4-3-4-6 0-2 1-4 2-5 1 1 3 2 2 5-1 3 2 5 0 6Z" fill="currentColor" opacity="0.7"/><path d="M12 21c2-1 4-3 4-6 0-2-1-4-2-5-1 1-3 2-2 5 1 3-2 5 0 6Z" fill="currentColor" opacity="0.7"/><ellipse cx="12" cy="8" rx="2" ry="3" fill="#D0A5FF"/></svg>`,
      rainbow: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 15C4 10 8 6 12 6s8 4 8 9" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M6 15C6 11.5 9 8 12 8s6 3.5 6 7" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 15C8 12.5 10 10 12 10s4 2.5 4 5" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M10 15C10 13.5 11 12 12 12s2 1.5 2 3" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>`,
      pastel: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 10L9 6M12 10L15 6M12 10L12 4" stroke="currentColor" stroke-width="1.2" fill="none"/><path d="M14 12L18 9M14 12L18 15M10 12L6 9M10 12L6 15" stroke="currentColor" stroke-width="1" fill="none"/><circle cx="8" cy="6" r="1" fill="currentColor" opacity="0.6"/><circle cx="16" cy="6" r="1" fill="currentColor" opacity="0.6"/></svg>`,
      dark: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22L15 15M15 15L19 14M15 15L16 19M12 18L5 12M5 12L6 8M5 12L2 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/><circle cx="9.5" cy="14.5" r="1.5" fill="currentColor"/></svg>`,
      metallic: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 22,8 18,22 6,22 2,8 12,2" fill="url(#diamondGrad)" stroke="none"/><polygon points="12,2 12,22 18,22 22,8" fill="url(#shineGrad)" opacity="0.4"/><defs><linearGradient id="diamondGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#E5E5EA"/><stop offset="100%" stop-color="#8E8E93"/></linearGradient><linearGradient id="shineGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="white" stop-opacity="0.8"/><stop offset="100%" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>`,
      smiles: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="8.5" cy="10" r="1.2" fill="currentColor"/><circle cx="15.5" cy="10" r="1.2" fill="currentColor"/><path d="M8 14C8.5 16 10 17.5 12 17.5S15.5 16 16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>`
    };
    return icons[category] || icons.smiles;
  };

  const emojiCategories = {
    ios_emoji: {
      name: 'iOS Emoji',
      color: '#eea1cd',
      emojis: ["https://s2.pinimg.com/webapp/1fae0-afbce4e5.png","https://s2.pinimg.com/webapp/1f600-e972bf95.png","https://s2.pinimg.com/webapp/1f603-84e9560d.png","https://s2.pinimg.com/webapp/1f604-584bd056.png","https://s2.pinimg.com/webapp/1f601-c9646e1f.png","https://s2.pinimg.com/webapp/1f606-a0052555.png","https://s2.pinimg.com/webapp/1f605-c68c48a5.png","https://s2.pinimg.com/webapp/1f923-5455a766.png","https://s2.pinimg.com/webapp/1f602-b4a1115c.png","https://s2.pinimg.com/webapp/1f642-e347deea.png","https://s2.pinimg.com/webapp/1f643-2765c373.png","https://s2.pinimg.com/webapp/1f609-63de9319.png","https://s2.pinimg.com/webapp/1f60a-bb3daa73.png","https://s2.pinimg.com/webapp/1f607-ef70c294.png","https://s2.pinimg.com/webapp/1f970-f9562dd2.png","https://s2.pinimg.com/webapp/1f60d-906d4ed8.png","https://s2.pinimg.com/webapp/1f929-519165a2.png","https://s2.pinimg.com/webapp/1f618-47241663.png","https://s2.pinimg.com/webapp/1f617-85f04570.png","https://s2.pinimg.com/webapp/263a-fe0f-56ecd2f1.png","https://s2.pinimg.com/webapp/1f61a-41b9b595.png","https://s2.pinimg.com/webapp/1f619-42c7a1f1.png","https://s2.pinimg.com/webapp/1f972-95152e2e.png","https://s2.pinimg.com/webapp/1f60b-4190a8d6.png","https://s2.pinimg.com/webapp/1f61b-6744d648.png","https://s2.pinimg.com/webapp/1f61c-afb9b671.png","https://s2.pinimg.com/webapp/1f92a-25c0612f.png","https://s2.pinimg.com/webapp/1f61d-1fae1359.png","https://s2.pinimg.com/webapp/1f911-b732d18b.png","https://s2.pinimg.com/webapp/1f917-d5b1e49f.png","https://s2.pinimg.com/webapp/1f92d-6d4e3eaa.png","https://s2.pinimg.com/webapp/1fae2-92aee928.png","https://s2.pinimg.com/webapp/1fae3-9140c7dc.png","https://s2.pinimg.com/webapp/1f92b-5ace226e.png","https://s2.pinimg.com/webapp/1f914-1f8d8eff.png","https://s2.pinimg.com/webapp/1fae1-b49c600c.png","https://s2.pinimg.com/webapp/1f910-47ebc8ed.png","https://s2.pinimg.com/webapp/1f928-210c579a.png","https://s2.pinimg.com/webapp/1f610-491da037.png","https://s2.pinimg.com/webapp/1f611-2a1ff354.png","https://s2.pinimg.com/webapp/1f636-abcd9ea7.png","https://s2.pinimg.com/webapp/1fae5-9305a0c0.png","https://s2.pinimg.com/webapp/1f636-200d-1f32b-fe0f-dc8001f5.png","https://s2.pinimg.com/webapp/1f60f-f938ad10.png","https://s2.pinimg.com/webapp/1f612-3a934303.png","https://s2.pinimg.com/webapp/1f644-a698d092.png","https://s2.pinimg.com/webapp/1f62c-94c52048.png","https://s2.pinimg.com/webapp/1f62e-200d-1f4a8-c5ad612c.png","https://s2.pinimg.com/webapp/1f925-581d89a6.png","https://s2.pinimg.com/webapp/1f60c-9128820b.png","https://s2.pinimg.com/webapp/1f614-741363ff.png","https://s2.pinimg.com/webapp/1f62a-81bea694.png","https://s2.pinimg.com/webapp/1f924-378cb39a.png","https://s2.pinimg.com/webapp/1f634-8ee88014.png","https://s2.pinimg.com/webapp/1f637-c500a5bf.png","https://s2.pinimg.com/webapp/1f912-08c751c2.png","https://s2.pinimg.com/webapp/1f915-5f79c9c7.png","https://s2.pinimg.com/webapp/1f922-df0d4414.png","https://s2.pinimg.com/webapp/1f92e-ac39e212.png","https://s2.pinimg.com/webapp/1f927-932a46be.png","https://s2.pinimg.com/webapp/1f975-a792d8e1.png","https://s2.pinimg.com/webapp/1f976-be712ce3.png","https://s2.pinimg.com/webapp/1f974-1e72d041.png","https://s2.pinimg.com/webapp/1f635-a3efb82b.png","https://s2.pinimg.com/webapp/1f635-200d-1f4ab-a3a74a94.png","https://s2.pinimg.com/webapp/1f92f-761eeec4.png","https://s2.pinimg.com/webapp/1f920-92a4eb11.png","https://s2.pinimg.com/webapp/1f973-cd266064.png","https://s2.pinimg.com/webapp/1f978-0f759816.png","https://s2.pinimg.com/webapp/1f60e-3f38ba86.png","https://s2.pinimg.com/webapp/1f913-f0d5f1d5.png","https://s2.pinimg.com/webapp/1f9d0-47b57191.png","https://s2.pinimg.com/webapp/1f615-3727b752.png","https://s2.pinimg.com/webapp/1fae4-eebaaf77.png","https://s2.pinimg.com/webapp/1f61f-1f810cf8.png","https://s2.pinimg.com/webapp/1f641-cc26b459.png","https://s2.pinimg.com/webapp/2639-fe0f-3d271a2b.png","https://s2.pinimg.com/webapp/1f62e-969fb8bf.png","https://s2.pinimg.com/webapp/1f62f-40d4be92.png","https://s2.pinimg.com/webapp/1f632-4fa57939.png","https://s2.pinimg.com/webapp/1f633-f194af16.png","https://s2.pinimg.com/webapp/1f97a-bd1ec30d.png","https://s2.pinimg.com/webapp/1f979-0e946460.png","https://s2.pinimg.com/webapp/1f626-8fb4daa7.png","https://s2.pinimg.com/webapp/1f627-9353773e.png","https://s2.pinimg.com/webapp/1f628-dc40a692.png","https://s2.pinimg.com/webapp/1f630-0d0023e4.png","https://s2.pinimg.com/webapp/1f625-3b682c3c.png","https://s2.pinimg.com/webapp/1f622-46b17a85.png","https://s2.pinimg.com/webapp/1f62d-c260d4ef.png","https://s2.pinimg.com/webapp/1f631-680547c6.png","https://s2.pinimg.com/webapp/1f616-6b1d578e.png","https://s2.pinimg.com/webapp/1f623-23783de3.png","https://s2.pinimg.com/webapp/1f61e-6605f1d0.png","https://s2.pinimg.com/webapp/1f613-f5968eea.png","https://s2.pinimg.com/webapp/1f629-eaf0a2d1.png","https://s2.pinimg.com/webapp/1f62b-e4663a72.png","https://s2.pinimg.com/webapp/1f971-1ab0f567.png","https://s2.pinimg.com/webapp/1f624-2dd4f4c8.png","https://s2.pinimg.com/webapp/1f621-a65f5d28.png","https://s2.pinimg.com/webapp/1f620-07e732fe.png","https://s2.pinimg.com/webapp/1f92c-5761c2af.png","https://s2.pinimg.com/webapp/1f608-b428190f.png","https://s2.pinimg.com/webapp/1f47f-76074554.png","https://s2.pinimg.com/webapp/1f480-5b813471.png","https://s2.pinimg.com/webapp/2620-fe0f-ce8de921.png","https://s2.pinimg.com/webapp/1f4a9-79d43df3.png","https://s2.pinimg.com/webapp/1f921-57071297.png","https://s2.pinimg.com/webapp/1f479-fbb32b9a.png","https://s2.pinimg.com/webapp/1f47a-f9f33815.png","https://s2.pinimg.com/webapp/1f47b-c8a0f50e.png","https://s2.pinimg.com/webapp/1f47d-db284cf0.png","https://s2.pinimg.com/webapp/1f47e-a3332f3e.png","https://s2.pinimg.com/webapp/1f916-0842ff11.png","https://s2.pinimg.com/webapp/1f63a-147c1129.png","https://s2.pinimg.com/webapp/1f638-40833f45.png","https://s2.pinimg.com/webapp/1f639-232352cc.png","https://s2.pinimg.com/webapp/1f63b-04336a84.png","https://s2.pinimg.com/webapp/1f63c-5b5f0b67.png","https://s2.pinimg.com/webapp/1f63d-8fdaeb49.png","https://s2.pinimg.com/webapp/1f640-b6cd74ee.png","https://s2.pinimg.com/webapp/1f63f-e38d0842.png","https://s2.pinimg.com/webapp/1f63e-9adb7c56.png","https://s2.pinimg.com/webapp/1f648-d520edca.png","https://s2.pinimg.com/webapp/1f649-802deccd.png","https://s2.pinimg.com/webapp/1f64a-fd3ed204.png","https://s2.pinimg.com/webapp/1f48b-6a2e880f.png","https://s2.pinimg.com/webapp/1f48c-1ce4df02.png","https://s2.pinimg.com/webapp/1f498-634b204c.png","https://s2.pinimg.com/webapp/1f49d-93aa71f6.png","https://s2.pinimg.com/webapp/1f496-cf1aee54.png","https://s2.pinimg.com/webapp/1f497-87486086.png","https://s2.pinimg.com/webapp/1f493-2f21c338.png","https://s2.pinimg.com/webapp/1f49e-f4f218ec.png","https://s2.pinimg.com/webapp/1f495-62d42033.png","https://s2.pinimg.com/webapp/1f49f-a7ce5ea8.png","https://s2.pinimg.com/webapp/2763-fe0f-cebab3e6.png","https://s2.pinimg.com/webapp/1f494-9843566d.png","https://s2.pinimg.com/webapp/2764-fe0f-200d-1f525-b38b8bc5.png","https://s2.pinimg.com/webapp/2764-fe0f-200d-1fa79-cfab47a0.png","https://s2.pinimg.com/webapp/2764-fe0f-1f2f72ea.png","https://s2.pinimg.com/webapp/1f9e1-469a1093.png","https://s2.pinimg.com/webapp/1f49b-3a72e098.png","https://s2.pinimg.com/webapp/1f49a-22848515.png","https://s2.pinimg.com/webapp/1f499-60a081cd.png","https://s2.pinimg.com/webapp/1f49c-40432639.png","https://s2.pinimg.com/webapp/1f90e-7eca304f.png","https://s2.pinimg.com/webapp/1f5a4-6f273028.png","https://s2.pinimg.com/webapp/1f90d-96f68bc4.png","https://s2.pinimg.com/webapp/1f4af-b2696951.png","https://s2.pinimg.com/webapp/1f4a2-4eefcc60.png","https://s2.pinimg.com/webapp/1f4a5-9824a5ae.png","https://s2.pinimg.com/webapp/1f4ab-35f613dc.png","https://s2.pinimg.com/webapp/1f4a6-be294dce.png","https://s2.pinimg.com/webapp/1f4a8-d99e3754.png","https://s2.pinimg.com/webapp/1f573-fe0f-f1ffd138.png","https://s2.pinimg.com/webapp/1f4a3-9a37e75b.png","https://s2.pinimg.com/webapp/1f4ac-28ccfca0.png","https://s2.pinimg.com/webapp/1f441-fe0f-200d-1f5e8-fe0f-4ee18618.png","https://s2.pinimg.com/webapp/1f5e8-fe0f-272afd6e.png","https://s2.pinimg.com/webapp/1f5ef-fe0f-aa84eb43.png","https://s2.pinimg.com/webapp/1f4ad-f6441066.png","https://s2.pinimg.com/webapp/1f4a4-57006185.png","https://s2.pinimg.com/webapp/1f44b-6e7ea7bb.png","https://s2.pinimg.com/webapp/1f91a-61e34978.png","https://s2.pinimg.com/webapp/1f590-fe0f-1949b64c.png","https://s2.pinimg.com/webapp/270b-8181e715.png","https://s2.pinimg.com/webapp/1f596-b5d38eae.png","https://s2.pinimg.com/webapp/1faf1-9e14b71f.png","https://s2.pinimg.com/webapp/1faf2-b054ed4e.png","https://s2.pinimg.com/webapp/1faf3-167352ec.png","https://s2.pinimg.com/webapp/1faf4-41d07563.png","https://s2.pinimg.com/webapp/1f44c-5a371bdf.png","https://s2.pinimg.com/webapp/1f90c-17a0420e.png","https://s2.pinimg.com/webapp/1f90f-ec24e124.png","https://s2.pinimg.com/webapp/270c-fe0f-1f84bc79.png","https://s2.pinimg.com/webapp/1f91e-34941c74.png","https://s2.pinimg.com/webapp/1faf0-bd089898.png","https://s2.pinimg.com/webapp/1f91f-bbc45b70.png","https://s2.pinimg.com/webapp/1f918-adcc4e2c.png","https://s2.pinimg.com/webapp/1f919-bfe9127b.png","https://s2.pinimg.com/webapp/1f448-dfd32ffe.png","https://s2.pinimg.com/webapp/1f449-25cdcb60.png","https://s2.pinimg.com/webapp/1f446-0dcaf856.png","https://s2.pinimg.com/webapp/1f595-94a950d1.png","https://s2.pinimg.com/webapp/1f447-8fe23a86.png","https://s2.pinimg.com/webapp/261d-fe0f-a7a30c17.png","https://s2.pinimg.com/webapp/1faf5-9ab4586a.png","https://s2.pinimg.com/webapp/1f44d-983ac791.png","https://s2.pinimg.com/webapp/1f44e-23db2004.png","https://s2.pinimg.com/webapp/270a-9ad510be.png","https://s2.pinimg.com/webapp/1f44a-0164fa0f.png","https://s2.pinimg.com/webapp/1f91b-93067080.png","https://s2.pinimg.com/webapp/1f91c-8ad36918.png","https://s2.pinimg.com/webapp/1f44f-6d72623e.png","https://s2.pinimg.com/webapp/1f64c-14d37e8b.png","https://s2.pinimg.com/webapp/1faf6-c3cbd86b.png","https://s2.pinimg.com/webapp/1f450-b40de37e.png","https://s2.pinimg.com/webapp/1f932-7b1f5ea6.png","https://s2.pinimg.com/webapp/1f91d-32ec998e.png","https://s2.pinimg.com/webapp/1f64f-182900bc.png","https://s2.pinimg.com/webapp/270d-fe0f-687c99a1.png","https://s2.pinimg.com/webapp/1f485-17921c54.png","https://s2.pinimg.com/webapp/1f933-35d30656.png","https://s2.pinimg.com/webapp/1f4aa-674b0393.png","https://s2.pinimg.com/webapp/1f9be-cea84655.png","https://s2.pinimg.com/webapp/1f9bf-0261d3d2.png","https://s2.pinimg.com/webapp/1f9b5-3075032b.png","https://s2.pinimg.com/webapp/1f9b6-43ea0617.png","https://s2.pinimg.com/webapp/1f442-ec7f2a17.png","https://s2.pinimg.com/webapp/1f9bb-8c0da895.png","https://s2.pinimg.com/webapp/1f443-1156b0dd.png","https://s2.pinimg.com/webapp/1f9e0-a32915a3.png","https://s2.pinimg.com/webapp/1fac0-42f24914.png","https://s2.pinimg.com/webapp/1fac1-e942ae6e.png","https://s2.pinimg.com/webapp/1f9b7-72e1e0cf.png","https://s2.pinimg.com/webapp/1f9b4-e29bfb77.png","https://s2.pinimg.com/webapp/1f440-6112b8b4.png","https://s2.pinimg.com/webapp/1f441-fe0f-b2619f58.png","https://s2.pinimg.com/webapp/1f445-395c2029.png","https://s2.pinimg.com/webapp/1f444-f288f72e.png","https://s2.pinimg.com/webapp/1fae6-a80f7fe8.png","https://s2.pinimg.com/webapp/1f476-c724d963.png","https://s2.pinimg.com/webapp/1f9d2-2021cfa5.png","https://s2.pinimg.com/webapp/1f466-2759e3b0.png","https://s2.pinimg.com/webapp/1f467-fe2c10ba.png","https://s2.pinimg.com/webapp/1f9d1-ffc98a2e.png","https://s2.pinimg.com/webapp/1f471-6d6e032e.png","https://s2.pinimg.com/webapp/1f468-b17e02fc.png","https://s2.pinimg.com/webapp/1f9d4-21fbf007.png","https://s2.pinimg.com/webapp/1f9d4-200d-2642-fe0f-cc77d560.png","https://s2.pinimg.com/webapp/1f9d4-200d-2640-fe0f-87cc81ca.png","https://s2.pinimg.com/webapp/1f468-200d-1f9b0-8306ddae.png","https://s2.pinimg.com/webapp/1f468-200d-1f9b1-e643c3d3.png","https://s2.pinimg.com/webapp/1f468-200d-1f9b3-789e3606.png","https://s2.pinimg.com/webapp/1f468-200d-1f9b2-62b4a715.png","https://s2.pinimg.com/webapp/1f469-18636ee3.png","https://s2.pinimg.com/webapp/1f469-200d-1f9b0-b63fb665.png","https://s2.pinimg.com/webapp/1f9d1-200d-1f9b0-3bef82c7.png","https://s2.pinimg.com/webapp/1f469-200d-1f9b1-e7a2421f.png","https://s2.pinimg.com/webapp/1f9d1-200d-1f9b1-55ce2222.png","https://s2.pinimg.com/webapp/1f469-200d-1f9b3-9c217a63.png","https://s2.pinimg.com/webapp/1f9d1-200d-1f9b3-20be0c98.png","https://s2.pinimg.com/webapp/1f469-200d-1f9b2-6103039f.png","https://s2.pinimg.com/webapp/1f9d1-200d-1f9b2-8496ddda.png","https://s2.pinimg.com/webapp/1f471-200d-2640-fe0f-6ae118e8.png","https://s2.pinimg.com/webapp/1f471-200d-2642-fe0f-64feb03d.png","https://s2.pinimg.com/webapp/1f9d3-c09c58d3.png","https://s2.pinimg.com/webapp/1f474-62d386c5.png","https://s2.pinimg.com/webapp/1f475-aadf4114.png","https://s2.pinimg.com/webapp/1f64d-863820ec.png","https://s2.pinimg.com/webapp/1f64d-200d-2642-fe0f-9e73d9bc.png","https://s2.pinimg.com/webapp/1f64d-200d-2640-fe0f-6a616724.png","https://s2.pinimg.com/webapp/1f64e-4d0a253a.png"]
    },
    red: {
      name: 'Red',
      color: '#e68bbe',
      emojis: ["https://i.imgur.com/JArUfPy.gif","https://i.imgur.com/DkfTC8n.gif","https://i.imgur.com/kuohCUc.gif","https://i.imgur.com/dMTb9Pg.gif","https://i.imgur.com/5cOAwmY.gif","https://i.imgur.com/ULvKShM.gif","https://i.imgur.com/psDkmKE.gif","https://i.imgur.com/OqjE6JS.gif","https://i.imgur.com/DMnDy0e.gif","https://i.imgur.com/kzL6InH.gif","https://i.imgur.com/HHrYb55.gif","https://i.imgur.com/Xobm80F.gif","https://i.imgur.com/9lEAkqs.gif","https://i.imgur.com/gNpbuhJ.gif","https://i.imgur.com/jFw7GNJ.gif","https://i.imgur.com/IPjcfXp.gif","https://i.imgur.com/hHC0ist.gif","https://i.imgur.com/TnYhCEq.gif","https://i.imgur.com/GuRWAmJ.gif","https://i.imgur.com/PQ2LNaY.gif","https://i.imgur.com/mCrdZyZ.gif","https://i.imgur.com/wG6vYte.gif","https://i.imgur.com/1ck4lpQ.gif","https://i.imgur.com/ldrxmTy.gif","https://i.imgur.com/3QOVReY.gif","https://i.imgur.com/j3rPahr.gif","https://i.imgur.com/LC5NEbU.gif","https://i.imgur.com/BBHuL5W.gif","https://i.imgur.com/7Rgsi4N.gif","https://i.imgur.com/S4mtOo0.gif","https://i.imgur.com/iqqadQC.gif","https://i.imgur.com/29Exzh4.gif","https://i.imgur.com/xQ9XN9p.gif","https://i.imgur.com/EuzZHVv.gif","https://i.imgur.com/g2L36xy.gif","https://i.imgur.com/ereXGpx.gif","https://i.imgur.com/lAiTlqk.gif","https://i.imgur.com/aPGTMCE.gif","https://i.imgur.com/vVkFV4J.gif","https://i.imgur.com/02KxL7R.gif","https://i.imgur.com/Yhh862P.gif","https://i.imgur.com/CrBFvJR.gif","https://i.imgur.com/KGXol9G.gif","https://i.imgur.com/xrUm99G.gif","https://i.imgur.com/T5VsVSH.gif","https://i.imgur.com/dOqkrZt.gif","https://i.imgur.com/nFlb7Fi.gif","https://i.imgur.com/cPN2UZL.gif","https://i.imgur.com/3Wrb5wA.png","https://i.imgur.com/pMYCV90.gif","https://i.imgur.com/nVIKSPL.gif","https://i.imgur.com/ZSH1Kxw.gif","https://i.imgur.com/SlP7LB0.gif","https://i.imgur.com/U5q3dn4.gif","https://i.imgur.com/MpRDwZw.gif","https://i.imgur.com/aFgp5Aq.gif","https://i.imgur.com/Fzu5D90.gif","https://i.imgur.com/zw8H3RD.gif"]
    },
    orange: {
      name: 'Orange',
      color: '#eea1cd',
      emojis: ["https://i.imgur.com/jceFQcp.gif","https://i.imgur.com/wx2JGFu.gif","https://i.imgur.com/AdI3kcM.gif","https://i.imgur.com/xJWgqMJ.gif","https://i.imgur.com/BrImWMD.gif","https://i.imgur.com/4aENkot.gif","https://i.imgur.com/MNU4KWp.gif","https://i.imgur.com/LtJ0hgj.gif","https://i.imgur.com/nDDxXAA.gif","https://i.imgur.com/QgRQ9du.gif","https://i.imgur.com/JOx0Vy2.gif","https://i.imgur.com/LpNUOkZ.gif","https://i.imgur.com/7TQpyve.gif","https://i.imgur.com/gtNEwBi.gif","https://i.imgur.com/MiGBC3F.gif","https://i.imgur.com/y7JS1Bw.gif","https://i.imgur.com/ln5OMt0.gif","https://i.imgur.com/VsATGBb.gif","https://i.imgur.com/81N5Pab.gif","https://i.imgur.com/7ZX9zPs.gif","https://i.imgur.com/n7mYwL8.gif","https://i.imgur.com/I5aQsMy.gif","https://i.imgur.com/Pgjvobq.gif","https://i.imgur.com/Vthsb96.gif","https://i.imgur.com/oLeLMNd.gif","https://i.imgur.com/IGxxD2W.gif","https://i.imgur.com/2XLpPXq.gif","https://i.imgur.com/rmbNqSV.gif","https://i.imgur.com/nzPhwZk.gif","https://i.imgur.com/cgFHl8P.gif","https://i.imgur.com/Oc0wOU2.gif","https://i.imgur.com/WtELfxA.gif","https://i.imgur.com/MtaZgDK.gif","https://i.imgur.com/2Xif419.jpg","https://i.imgur.com/jfbXbLu.gif","https://i.imgur.com/e0xDq1U.gif","https://i.imgur.com/gmXDKbu.gif","https://i.imgur.com/lDs9tqm.gif","https://i.imgur.com/Shdxv5Z.gif","https://i.imgur.com/h0BvMG4.gif","https://i.imgur.com/71GzySL.gif","https://i.imgur.com/ylXsnQ8.gif","https://i.imgur.com/ceZZYM8.gif","https://i.imgur.com/PlLoSEc.gif","https://i.imgur.com/pgrUOY3.gif","https://i.imgur.com/lJF5F1A.gif","https://i.imgur.com/bN0XEgP.gif","https://i.imgur.com/StsWL2f.gif","https://i.imgur.com/H4w3DSt.gif","https://i.imgur.com/IVu1760.gif","https://i.imgur.com/KXICOIV.gif","https://i.imgur.com/k7O8OiU.gif","https://i.imgur.com/FUTNnwV.gif","https://i.imgur.com/tFCecpe.gif","https://i.imgur.com/GOF76KG.gif","https://i.imgur.com/AANuOfI.gif","https://i.imgur.com/I8ctwZC.gif","https://i.imgur.com/sITUANc.gif"]
    },
    yellow: {
      name: 'Yellow',
      color: '#eea1cd',
      emojis: ["https://i.imgur.com/yRDUz1y.gif","https://i.imgur.com/dWSTAJz.gif","https://i.imgur.com/WqnY7hM.gif","https://i.imgur.com/U5GYPcC.gif","https://i.imgur.com/hcrJMnb.gif","https://i.imgur.com/QLaQiUG.gif","https://i.imgur.com/PSPPuEl.gif","https://i.imgur.com/INhNnL6.gif","https://i.imgur.com/Xi3VLB9.gif","https://i.imgur.com/pEic4vl.gif","https://i.imgur.com/8c8QA1L.gif","https://i.imgur.com/ycDHo67.gif","https://i.imgur.com/xO0HSGL.gif","https://i.imgur.com/N0kU6U1.gif","https://i.imgur.com/S9HxVnI.gif","https://i.imgur.com/N9sW7Pi.gif","https://i.imgur.com/Rjso7xb.gif","https://i.imgur.com/OkhAra5.gif","https://i.imgur.com/THC6eGL.gif","https://i.imgur.com/xDAnIky.gif","https://i.imgur.com/QMoTBf1.gif","https://i.imgur.com/nk2Fa9l.gif","https://i.imgur.com/qOGOqSE.gif","https://i.imgur.com/MqiXvqh.gif","https://i.imgur.com/ny4dOSg.gif","https://i.imgur.com/lTiejN5.gif","https://i.imgur.com/lb8PDaF.gif","https://i.imgur.com/MrsGKuR.gif","https://i.imgur.com/auH3al7.gif","https://i.imgur.com/ldT74RA.gif","https://i.imgur.com/bjCtDTC.gif","https://i.imgur.com/o9c1kAD.gif","https://i.imgur.com/lKK2ai8.gif","https://i.imgur.com/2rLxyXH.gif","https://i.imgur.com/AtotDYt.gif","https://i.imgur.com/QMTPK3L.gif","https://i.imgur.com/t6m8p9V.gif","https://i.imgur.com/oRH9qhT.gif","https://i.imgur.com/rawVpLV.gif","https://i.imgur.com/gJ8fHwo.gif","https://i.imgur.com/gNpMHdf.gif","https://i.imgur.com/AqRZh88.gif","https://i.imgur.com/Ariwp8I.gif","https://i.imgur.com/93nOZIL.gif","https://i.imgur.com/IcEIrcG.gif","https://i.imgur.com/JQV5Iim.gif","https://i.imgur.com/wMKsuya.gif","https://i.imgur.com/4WLxpN2.gif","https://i.imgur.com/0ERgJWM.gif","https://i.imgur.com/IBwrbUJ.gif","https://i.imgur.com/vRlH4iK.gif","https://i.imgur.com/7dhP7QU.gif","https://i.imgur.com/Nao7hgH.gif","https://i.imgur.com/IaXZTbF.gif","https://i.imgur.com/sFs1C44.gif","https://i.imgur.com/YBJLpby.gif","https://i.imgur.com/Tsez9cF.gif","https://i.imgur.com/Wnzhhhl.gif"]
    },
    green: {
      name: 'Green',
      color: '#eea1cd',
      emojis: ["https://i.imgur.com/91js5YE.gif","https://i.imgur.com/o2Ttdae.gif","https://i.imgur.com/Ovvv1mD.gif","https://i.imgur.com/UY6ESkd.gif","https://i.imgur.com/HuE34Sm.gif","https://i.imgur.com/GqxVO8I.gif","https://i.imgur.com/pUmvt6x.gif","https://i.imgur.com/WTE8hFz.gif","https://i.imgur.com/OWAldPY.gif","https://i.imgur.com/wTQX5W5.gif","https://i.imgur.com/jFNPvSG.gif","https://i.imgur.com/IpF1mAN.gif","https://i.imgur.com/xBw4Idv.gif","https://i.imgur.com/yWonR9c.gif","https://i.imgur.com/l9k1vFZ.gif","https://i.imgur.com/nlWzMcb.gif","https://i.imgur.com/LQWNddq.gif","https://i.imgur.com/ZwTWzPS.gif","https://i.imgur.com/nkY3SDz.gif","https://i.imgur.com/tOPAapX.gif","https://i.imgur.com/3b9D3ii.gif","https://i.imgur.com/CkOmGbj.gif","https://i.imgur.com/AA9ktmV.gif","https://i.imgur.com/7iRxBeX.gif","https://i.imgur.com/zMNHH1Z.gif","https://i.imgur.com/8Fy2w7J.gif","https://i.imgur.com/lTgg6i9.gif","https://i.imgur.com/5u9OYL0.gif","https://i.imgur.com/MuX7Ldb.gif","https://i.imgur.com/Ey2e4LZ.gif","https://i.imgur.com/YWaggYb.gif","https://i.imgur.com/oyH5iI5.gif","https://i.imgur.com/2J7jOx2.gif","https://i.imgur.com/auW2bxt.gif","https://i.imgur.com/wTwYx5M.gif","https://i.imgur.com/eMXf2PN.gif","https://i.imgur.com/IH68Dk9.gif","https://i.imgur.com/UmzwXZA.gif","https://i.imgur.com/HWqWamo.gif","https://i.imgur.com/kuG0Y95.gif","https://i.imgur.com/wg0gP2W.gif","https://i.imgur.com/2PL4rkO.gif","https://i.imgur.com/gc0f7do.gif","https://i.imgur.com/YyXK511.gif","https://i.imgur.com/4fRSD7f.gif","https://i.imgur.com/8kvEI5R.gif","https://i.imgur.com/u8eMYtA.gif","https://i.imgur.com/DcZpGA9.gif","https://i.imgur.com/Di2NBc0.gif","https://i.imgur.com/ibwyEER.gif","https://i.imgur.com/wpZ4hT2.gif","https://i.imgur.com/iM62oqD.gif","https://i.imgur.com/dnQ2S5a.gif","https://i.imgur.com/tHcASok.gif","https://i.imgur.com/0PzYYXi.gif","https://i.imgur.com/rWqhuPJ.gif","https://i.imgur.com/4nQkVuB.gif","https://i.imgur.com/so6KDft.gif"]
    },
    pink: {
      name: 'Pink',
      color: '#eea1cd',
      emojis: ["https://i.imgur.com/X0ItEsQ.gif","https://i.imgur.com/huvDiXV.gif","https://i.imgur.com/y62jLC0.gif","https://i.imgur.com/JEl4Usp.gif","https://i.imgur.com/2Vb8KLJ.gif","https://i.imgur.com/m3kMcS9.gif","https://i.imgur.com/W1qVRq7.gif","https://i.imgur.com/8wSTACM.gif","https://i.imgur.com/PsLtqMJ.gif","https://i.imgur.com/npme8Dn.gif","https://i.imgur.com/7uZdfcN.gif","https://i.imgur.com/Bqbxbro.gif","https://i.imgur.com/XdxlzWf.gif","https://i.imgur.com/kdc0tIY.gif","https://i.imgur.com/yaJFjhq.gif","https://i.imgur.com/YaSc2dQ.gif","https://i.imgur.com/f68iHcF.gif","https://i.imgur.com/uPAAd5d.gif","https://i.imgur.com/voCExlJ.gif","https://i.imgur.com/JWqpJj6.gif","https://i.imgur.com/qyDkStE.gif","https://i.imgur.com/oCRKW4b.gif","https://i.imgur.com/rVdqHse.gif","https://i.imgur.com/t4nvAzF.gif","https://i.imgur.com/eUNYj3q.gif","https://i.imgur.com/jStCzuL.gif","https://i.imgur.com/3hOWxw1.gif","https://i.imgur.com/2nxcH9b.gif","https://i.imgur.com/SBJlO7F.gif","https://i.imgur.com/CcD8ks3.gif","https://i.imgur.com/B33c1RI.gif","https://i.imgur.com/ffu9e7N.gif","https://i.imgur.com/lxvkbj9.gif","https://i.imgur.com/IRYsxDl.gif","https://i.imgur.com/yoVPQnZ.gif","https://i.imgur.com/0K2VfU1.gif","https://i.imgur.com/A7cLpvn.gif","https://i.imgur.com/zS1o0EG.gif","https://i.imgur.com/3S3rWPS.gif","https://i.imgur.com/1jiV69g.gif","https://i.imgur.com/UUQ08vN.gif","https://i.imgur.com/Qt6ELUL.gif","https://i.imgur.com/i1VUGWT.gif","https://i.imgur.com/ZKogrD1.gif","https://i.imgur.com/W1arURT.gif","https://i.imgur.com/UDGs0yu.jpg","https://i.imgur.com/zsEpch4.gif","https://i.imgur.com/GZsMGHp.gif","https://i.imgur.com/EE5iE9L.gif","https://i.imgur.com/zKCKtXl.gif","https://i.imgur.com/btuz7QW.gif","https://i.imgur.com/HvQECqc.gif","https://i.imgur.com/Bk80xI7.gif","https://i.imgur.com/6rq0dgC.gif","https://i.imgur.com/0hnDWiH.gif","https://i.imgur.com/ENZYFw5.gif","https://i.imgur.com/h0BEEkP.gif","https://i.imgur.com/smoACtO.gif"]
    },
    purple: {
      name: 'Purple',
      color: '#eea1cd',
      emojis: ["https://i.imgur.com/zA1SRiZ.gif","https://i.imgur.com/oUPPDvY.gif","https://i.imgur.com/kkR5yUe.gif","https://i.imgur.com/GUZIMPA.gif","https://i.imgur.com/FXlCH7N.gif","https://i.imgur.com/1eb2rFZ.gif","https://i.imgur.com/2LYJMa0.gif","https://i.imgur.com/wQHvHFT.gif","https://i.imgur.com/YBBhm5c.gif","https://i.imgur.com/UvUJqrQ.gif","https://i.imgur.com/j2eUmgz.gif","https://i.imgur.com/SPRqs6S.gif","https://i.imgur.com/5C6Sf80.gif","https://i.imgur.com/Apf4RHv.gif","https://i.imgur.com/Qzx6BZx.gif","https://i.imgur.com/MGoTq1u.gif","https://i.imgur.com/PjHsEP2.gif","https://i.imgur.com/ONjWpel.gif","https://i.imgur.com/VG0nKO5.gif","https://i.imgur.com/cWJLMai.gif","https://i.imgur.com/ZWXQCYW.gif","https://i.imgur.com/MPiJFtF.gif","https://i.imgur.com/3nW35R2.gif","https://i.imgur.com/2guHWcf.gif","https://i.imgur.com/QNKjknR.gif","https://i.imgur.com/nAC5vAx.gif","https://i.imgur.com/cW3Ttl7.gif","https://i.imgur.com/pdXTg91.gif","https://i.imgur.com/YLbXDKm.gif","https://i.imgur.com/6D71rk6.gif","https://i.imgur.com/0ANPXMt.gif","https://i.imgur.com/Y9UPtfr.gif","https://i.imgur.com/Bi5A7sk.gif","https://i.imgur.com/SGOZvBZ.gif","https://i.imgur.com/cNiu7mr.gif","https://i.imgur.com/0S24tm3.gif","https://i.imgur.com/8o9NuJD.gif","https://i.imgur.com/lRR1Obe.gif","https://i.imgur.com/PWbltem.gif","https://i.imgur.com/9eQTqtf.gif","https://i.imgur.com/SeFUmG7.gif","https://i.imgur.com/Dq2UARX.gif","https://i.imgur.com/Ww6hevr.gif","https://i.imgur.com/PhogWSW.gif","https://i.imgur.com/TyUbEjh.gif","https://i.imgur.com/qQBThCC.gif","https://i.imgur.com/B0IdpCo.gif","https://i.imgur.com/vl5elgZ.gif","https://i.imgur.com/vtJuFuQ.gif","https://i.imgur.com/ow1WgDR.gif","https://i.imgur.com/R13xEPa.gif","https://i.imgur.com/5oGJ3ve.gif","https://i.imgur.com/WxMhrPY.gif","https://i.imgur.com/svYnaO8.gif","https://i.imgur.com/urlj7t0.gif","https://i.imgur.com/uM6Rf7Q.gif","https://i.imgur.com/dczKhZp.gif","https://i.imgur.com/ySo9zmP.gif"]
    },
    brown: {
      name: 'Brown',
      color: '#eea1cd',
      emojis: ["https://i.imgur.com/SiTAbpL.gif","https://i.imgur.com/AeWQpBn.gif","https://i.imgur.com/geMgiRl.gif","https://i.imgur.com/Rcazy05.gif","https://i.imgur.com/abQPK7k.gif","https://i.imgur.com/SfQgTOc.gif","https://i.imgur.com/4FOmY9X.gif","https://i.imgur.com/Va634T0.gif","https://i.imgur.com/jIp52yL.gif","https://i.imgur.com/MvpGsJF.gif","https://i.imgur.com/HWd2e55.gif","https://i.imgur.com/POeRgVs.gif","https://i.imgur.com/2egWN64.gif","https://i.imgur.com/CSLLJ5N.gif","https://i.imgur.com/Q97Bg6M.gif","https://i.imgur.com/ZJMY3AD.gif","https://i.imgur.com/oquM72Z.gif","https://i.imgur.com/mVWU5KS.gif","https://i.imgur.com/UtbMVG8.gif","https://i.imgur.com/kbpfsrJ.gif","https://i.imgur.com/rTUCwIL.gif","https://i.imgur.com/7KfQSI0.gif","https://i.imgur.com/5YBxZ4z.gif","https://i.imgur.com/5ip4hYb.gif","https://i.imgur.com/rRy3t2v.gif","https://i.imgur.com/qdbKB5D.gif","https://i.imgur.com/VtBQCTU.gif","https://i.imgur.com/DI53ACe.gif","https://i.imgur.com/N5nGLhA.gif","https://i.imgur.com/fQ5FbLV.gif","https://i.imgur.com/PPwxxEk.gif","https://i.imgur.com/6VlAH5D.gif","https://i.imgur.com/V4mjYKz.gif","https://i.imgur.com/gDz4a1Y.gif","https://i.imgur.com/GNzRWIz.gif","https://i.imgur.com/5F4692x.gif","https://i.imgur.com/YMViaJ6.gif","https://i.imgur.com/bguXl5P.gif","https://i.imgur.com/cii3oNe.gif","https://i.imgur.com/IvdeINr.gif","https://i.imgur.com/MMT1qzc.gif","https://i.imgur.com/rPX4nLO.gif","https://i.imgur.com/lGet220.gif","https://i.imgur.com/uOujEL9.gif","https://i.imgur.com/7sepZvS.gif","https://i.imgur.com/Tlaixo3.gif","https://i.imgur.com/qLiJqCc.gif","https://i.imgur.com/Rlynlbd.gif","https://i.imgur.com/LMWKEjE.gif","https://i.imgur.com/fu8d4TL.gif","https://i.imgur.com/d6RkCZn.gif","https://i.imgur.com/PSbXAEp.jpg","https://i.imgur.com/nnNG01i.gif","https://i.imgur.com/gefKepO.gif","https://i.imgur.com/1uyRDlU.gif","https://i.imgur.com/Gque7rT.gif","https://i.imgur.com/diPH0w4.gif","https://i.imgur.com/fq9sK03.gif"]
    },
    black: {
      name: 'Black',
      color: '#eea1cd',
      emojis: ["https://i.imgur.com/uNZsTVp.gif","https://i.imgur.com/2PHGW3Y.gif","https://i.imgur.com/b5VzXhe.gif","https://i.imgur.com/tjmVGJI.gif","https://i.imgur.com/1PobLOC.gif","https://i.imgur.com/skLrVYH.gif","https://i.imgur.com/jVfwKHj.gif","https://i.imgur.com/MxLqNEC.gif","https://i.imgur.com/Q2T4gJZ.gif","https://i.imgur.com/1ueeyMd.gif","https://i.imgur.com/bwoBue9.gif","https://i.imgur.com/hki6WZI.gif","https://i.imgur.com/eSugb3r.gif","https://i.imgur.com/oOdpSr4.gif","https://i.imgur.com/AvqoqOS.gif","https://i.imgur.com/DJXfEnA.gif","https://i.imgur.com/Sb4Iv24.gif","https://i.imgur.com/wxxgyL1.gif","https://i.imgur.com/YtxDXEJ.gif","https://i.imgur.com/yEJ1FeA.gif","https://i.imgur.com/VNytDtR.gif","https://i.imgur.com/lqzypl0.gif","https://i.imgur.com/MBXRMWM.gif","https://i.imgur.com/GV1bzW6.gif","https://i.imgur.com/S89ceBR.gif","https://i.imgur.com/OLnUL5v.gif","https://i.imgur.com/iyJBeIW.gif","https://i.imgur.com/REd4c2k.gif","https://i.imgur.com/bHN3mnY.gif","https://i.imgur.com/tMrI9Tz.gif","https://i.imgur.com/XttujV7.gif","https://i.imgur.com/lWdzF5J.gif","https://i.imgur.com/5fv4spr.gif","https://i.imgur.com/dqDJ53J.gif","https://i.imgur.com/4PA7Yla.gif","https://i.imgur.com/qGWUfsU.gif","https://i.imgur.com/h4of1mT.gif","https://i.imgur.com/SFCSlxa.gif","https://i.imgur.com/4kWMJ5w.gif","https://i.imgur.com/teY3p3k.gif","https://i.imgur.com/PvyecG6.gif","https://i.imgur.com/OZHyEiN.gif","https://i.imgur.com/CY9DCTI.gif","https://i.imgur.com/6sYfI5B.gif","https://i.imgur.com/BSN2lIc.gif","https://i.imgur.com/z1ewPrr.gif","https://i.imgur.com/dPOHfA9.jpg","https://i.imgur.com/WQhRmHY.gif","https://i.imgur.com/d9Vuez2.gif","https://i.imgur.com/r3bIifP.gif","https://i.imgur.com/DW2gQ4C.gif","https://i.imgur.com/xioTNMj.gif","https://i.imgur.com/UGfr4mO.gif","https://i.imgur.com/RQoCqNv.gif","https://i.imgur.com/ewAb0jG.gif","https://i.imgur.com/HxSRJPh.gif","https://i.imgur.com/XVHHE59.gif","https://i.imgur.com/15GbnX4.gif"]
    },
    gray: {
      name: 'Gray',
      color: '#eea1cd',
      emojis: ["https://i.imgur.com/lYlQ70B.gif","https://i.imgur.com/oLjAxZX.gif","https://i.imgur.com/tcJHbBw.gif","https://i.imgur.com/UPM1bWV.gif","https://i.imgur.com/MLAlnRO.gif","https://i.imgur.com/JTGqd8r.gif","https://i.imgur.com/Oy3OGbW.gif","https://i.imgur.com/N8w1i2W.gif","https://i.imgur.com/4U6F1Yy.gif","https://i.imgur.com/j4qutGR.gif","https://i.imgur.com/sWUJGaP.gif","https://i.imgur.com/RFH8q27.gif","https://i.imgur.com/D0YJB9M.gif","https://i.imgur.com/8VwsMpy.gif","https://i.imgur.com/alvLHwl.gif","https://i.imgur.com/E8mQHBv.gif","https://i.imgur.com/yISkyoo.gif","https://i.imgur.com/8vxlRFI.gif","https://i.imgur.com/Qk5lQZi.gif","https://i.imgur.com/7jq8vL2.gif","https://i.imgur.com/x2p6Hwm.gif","https://i.imgur.com/oK1TzcK.gif","https://i.imgur.com/yrTZNE9.gif","https://i.imgur.com/yroB26i.gif","https://i.imgur.com/eDVrZZf.gif","https://i.imgur.com/7uQN695.gif","https://i.imgur.com/JqDKZYf.gif","https://i.imgur.com/q2wKfxF.gif","https://i.imgur.com/Id47pJv.gif","https://i.imgur.com/bamwARA.gif","https://i.imgur.com/GSV89Sq.gif","https://i.imgur.com/FQMLiLi.gif","https://i.imgur.com/j9zagtX.gif","https://i.imgur.com/lmX3CWF.gif","https://i.imgur.com/7SbaktE.jpg","https://i.imgur.com/JFJyDvW.gif","https://i.imgur.com/a8RA3bv.gif","https://i.imgur.com/goiBexo.gif","https://i.imgur.com/p1vvxzT.gif","https://i.imgur.com/S3oNsw7.gif","https://i.imgur.com/G4EdLgD.gif","https://i.imgur.com/jUZT0Xc.gif","https://i.imgur.com/ggzjFei.jpg","https://i.imgur.com/YxC23Iy.gif","https://i.imgur.com/kyrhA6B.gif","https://i.imgur.com/dgd9Xvy.gif","https://i.imgur.com/C75i3K5.gif","https://i.imgur.com/et5llyF.gif","https://i.imgur.com/ovaff5r.gif","https://i.imgur.com/Zhf2kU5.gif","https://i.imgur.com/jpEUdyz.gif","https://i.imgur.com/6BhRejY.gif","https://i.imgur.com/rziRpjc.gif","https://i.imgur.com/ojkfwb4.gif","https://i.imgur.com/SGEi3zy.gif","https://i.imgur.com/YKuSjPb.gif","https://i.imgur.com/wtWTvN6.gif","https://i.imgur.com/0mJ0glz.gif"]
    },
    white: {
      name: 'White',
      color: '#eea1cd',
      emojis: ["https://i.imgur.com/US8KWIQ.gif","https://i.imgur.com/zcFh0SK.gif","https://i.imgur.com/M73pkEV.gif","https://i.imgur.com/Ym5OIF3.gif","https://i.imgur.com/WogsjfG.gif","https://i.imgur.com/7MrzBr7.gif","https://i.imgur.com/yJ1c3r4.gif","https://i.imgur.com/90ZnR4E.gif","https://i.imgur.com/RXM7S0r.gif","https://i.imgur.com/pZIb0M7.gif","https://i.imgur.com/JptjIrK.gif","https://i.imgur.com/34YQfnR.gif","https://i.imgur.com/DYHD2el.gif","https://i.imgur.com/g5kFQv1.gif","https://i.imgur.com/1eItpku.gif","https://i.imgur.com/v61s5KF.gif","https://i.imgur.com/YjIvuxO.gif","https://i.imgur.com/EVZKlSZ.gif","https://i.imgur.com/F16JSmP.gif","https://i.imgur.com/ahNtIvN.gif","https://i.imgur.com/BcWpYxM.gif","https://i.imgur.com/nLfSSjD.gif","https://i.imgur.com/3rvfxBE.gif","https://i.imgur.com/55A5xo1.gif","https://i.imgur.com/huuwROv.gif","https://i.imgur.com/tOZ4ieN.gif","https://i.imgur.com/tlitvk8.gif","https://i.imgur.com/1D2VdVh.gif","https://i.imgur.com/SgCI9AM.gif","https://i.imgur.com/dRJnBa6.gif","https://i.imgur.com/XjjtKXv.gif","https://i.imgur.com/ymr6Q78.gif","https://i.imgur.com/ut9XPLG.gif","https://i.imgur.com/OX6LFeG.gif","https://i.imgur.com/Gy8vN2v.gif","https://i.imgur.com/JlPTTpE.gif","https://i.imgur.com/TPNZhrS.gif","https://i.imgur.com/MtOSpAj.gif","https://i.imgur.com/swR8pLb.gif","https://i.imgur.com/a2wT8qP.gif","https://i.imgur.com/Olwt3AI.gif","https://i.imgur.com/1BS38SY.gif","https://i.imgur.com/BiG5wmA.gif","https://i.imgur.com/LxYd7PK.gif","https://i.imgur.com/DXtu21g.gif","https://i.imgur.com/cNRZAJf.gif","https://i.imgur.com/c0tC7D9.gif","https://i.imgur.com/f8bocrI.gif","https://i.imgur.com/xMwNhKI.gif","https://i.imgur.com/tm1TAHR.gif","https://i.imgur.com/oZ8MJDl.gif","https://i.imgur.com/1IBQp9p.gif","https://i.imgur.com/89INEjf.gif","https://i.imgur.com/bTLZGyD.gif","https://i.imgur.com/11cAPuy.gif","https://i.imgur.com/BAvoMZ7.gif","https://i.imgur.com/pfA3b9O.gif","https://i.imgur.com/hujzEVd.gif"]
    },
    rainbow: {
      name: 'Rainbow',
      color: '#eea1cd',
      emojis: ["https://i.imgur.com/bUjCzA6.gif","https://i.imgur.com/6ZoyoRx.gif","https://i.imgur.com/xnGmRej.gif","https://i.imgur.com/dRAvOlQ.gif","https://i.imgur.com/A4VVGDZ.gif","https://i.imgur.com/poLgocC.gif","https://i.imgur.com/Io2aRsn.gif","https://i.imgur.com/AsPZHTV.gif","https://i.imgur.com/Y4I6PeA.gif","https://i.imgur.com/5Gnb5hl.gif","https://i.imgur.com/FaZjr3W.gif","https://i.imgur.com/cc7PRYK.gif","https://i.imgur.com/5p8T442.gif","https://i.imgur.com/m6swR97.gif","https://i.imgur.com/vn6pwRO.gif","https://i.imgur.com/eVdlwrb.gif","https://i.imgur.com/MvNhgzQ.gif","https://i.imgur.com/VlkK73c.gif","https://i.imgur.com/IGR73vW.gif","https://i.imgur.com/XhKOHPU.gif","https://i.imgur.com/Wl4cTrF.gif","https://i.imgur.com/FCbhnx2.gif","https://i.imgur.com/YRsfoXa.gif","https://i.imgur.com/V3LY4mN.gif","https://i.imgur.com/kqVLbIF.gif","https://i.imgur.com/vG8WziW.gif","https://i.imgur.com/1v3HjtI.gif","https://i.imgur.com/L1g2DzZ.gif","https://i.imgur.com/ZSJFAMy.gif","https://i.imgur.com/nkT4ZAK.gif","https://i.imgur.com/q5Y4XHd.gif","https://i.imgur.com/YGfhtlO.gif","https://i.imgur.com/X0dUxOE.gif","https://i.imgur.com/mFnKm75.gif","https://i.imgur.com/BDqzpqp.gif","https://i.imgur.com/BB4290z.gif","https://i.imgur.com/wMH4Op5.gif","https://i.imgur.com/qMCrJj0.gif","https://i.imgur.com/ZjGnHDM.gif","https://i.imgur.com/5W8oFIw.gif","https://i.imgur.com/ejS2THD.gif","https://i.imgur.com/cgVA2YO.gif","https://i.imgur.com/HFIipYF.gif","https://i.imgur.com/0d1Ued3.gif","https://i.imgur.com/lCbjs9o.gif","https://i.imgur.com/BaJ1U2V.gif","https://i.imgur.com/SVSO6Mj.gif","https://i.imgur.com/qGEKVZR.gif","https://i.imgur.com/YmQJqNT.gif","https://i.imgur.com/P1XxqTp.gif","https://i.imgur.com/LZ9Ygop.gif","https://i.imgur.com/mf9bkyo.gif","https://i.imgur.com/b6zM3hw.gif","https://i.imgur.com/BO8bQHy.gif","https://i.imgur.com/qsq3frc.gif","https://i.imgur.com/AlenP7l.gif","https://i.imgur.com/LRqihy7.gif","https://i.imgur.com/xB6qxcI.gif"]
    },
    pairs: {
      name: 'Pairs',
      color: '#eea1cd',
      emojis: ["https://i.imgur.com/pXqlma8.gif","https://i.imgur.com/CDajRPD.gif","https://i.imgur.com/g21Bh6E.gif","https://i.imgur.com/89GaNMy.gif","https://i.imgur.com/7WUPWoJ.gif","https://i.imgur.com/VNMJFG8.gif","https://i.imgur.com/v4fcrIx.gif","https://i.imgur.com/GZWu3gj.gif","https://i.imgur.com/YacomnE.gif","https://i.imgur.com/ZugGYNr.gif","https://i.imgur.com/HuW2e1i.gif","https://i.imgur.com/zSzcEt6.gif","https://i.imgur.com/uiOF9wG.gif","https://i.imgur.com/EVxib6O.gif","https://i.imgur.com/TvoUFD7.gif","https://i.imgur.com/bDJFwps.gif","https://i.imgur.com/SBLd7VR.gif","https://i.imgur.com/wz61z3J.gif","https://i.imgur.com/k2m0WYC.gif","https://i.imgur.com/xFPzHL3.gif","https://i.imgur.com/qsjJlsS.gif","https://i.imgur.com/NrBxvkv.gif","https://i.imgur.com/xZCff1M.gif","https://i.imgur.com/veED69C.gif","https://i.imgur.com/yG9vMff.gif","https://i.imgur.com/CoTVmcR.gif","https://i.imgur.com/lvV9XSK.gif","https://i.imgur.com/CNLrm2w.gif","https://i.imgur.com/V8owCXo.gif","https://i.imgur.com/JmWOUkY.gif","https://i.imgur.com/SlrVXUj.gif","https://i.imgur.com/NxVsUGz.gif","https://i.imgur.com/54eShRL.gif","https://i.imgur.com/uI5h5cr.gif","https://i.imgur.com/qiYQF7P.gif","https://i.imgur.com/dIAkGqk.gif","https://i.imgur.com/EfQ6bCB.gif","https://i.imgur.com/c21IYac.gif","https://i.imgur.com/FgIeAxz.gif","https://i.imgur.com/4kiOpSA.gif","https://i.imgur.com/5oBV0ok.gif","https://i.imgur.com/1p7QTmr.gif","https://i.imgur.com/ECRnGo3.gif","https://i.imgur.com/wP6DTmX.gif","https://i.imgur.com/oZuEo0y.gif","https://i.imgur.com/02MVMMY.gif","https://i.imgur.com/bNGER1Y.gif","https://i.imgur.com/9aYqvAq.gif","https://i.imgur.com/8rQRxw5.gif","https://i.imgur.com/2Y3B3AH.gif","https://i.imgur.com/7Uz6lT3.gif","https://i.imgur.com/lMzrl8M.gif","https://i.imgur.com/6jFkwJp.gif","https://i.imgur.com/5O73KBK.gif","https://i.imgur.com/KcIifJV.gif","https://i.imgur.com/AQ9stgK.gif","https://i.imgur.com/KE13lwv.gif","https://i.imgur.com/G48l7vR.gif"]
    },
    misc: {
      name: 'Misc',
      color: '#eea1cd',
      emojis: ["https://i.imgur.com/869fRPU.gif","https://i.imgur.com/kECpUEi.gif","https://i.imgur.com/KzgFekT.gif","https://i.imgur.com/3uYLj2G.gif","https://i.imgur.com/yWlOIni.gif","https://i.imgur.com/yQafxXk.gif","https://i.imgur.com/CFWZU4o.gif","https://i.imgur.com/aIriiLd.gif","https://i.imgur.com/9CLYL28.gif","https://i.imgur.com/E4sqPzd.gif","https://i.imgur.com/yWhhFIF.gif","https://i.imgur.com/Roy91ZE.gif","https://i.imgur.com/j0virBN.gif","https://i.imgur.com/6bPMgtM.gif","https://i.imgur.com/lazYAGM.gif","https://i.imgur.com/JVWwAWa.gif","https://i.imgur.com/vLB1efm.gif","https://i.imgur.com/SVZKLly.gif","https://i.imgur.com/ctQZw3u.gif","https://i.imgur.com/0ACxlVO.gif","https://i.imgur.com/fAjtZrI.gif","https://i.imgur.com/5HXkTYW.gif","https://i.imgur.com/PyO8c0P.gif","https://i.imgur.com/D2ZRxGf.gif","https://i.imgur.com/nihQDC2.gif","https://i.imgur.com/FGfFSBe.gif","https://i.imgur.com/phtThrk.gif","https://i.imgur.com/JmI2cNn.gif","https://i.imgur.com/UcJGysi.gif","https://i.imgur.com/tjwBu9P.gif","https://i.imgur.com/efNFHpf.gif","https://i.imgur.com/yMN7JPA.gif","https://i.imgur.com/HRGc3qA.gif","https://i.imgur.com/2WoQICv.gif","https://i.imgur.com/UzSlDwo.gif","https://i.imgur.com/tjPOQ1b.gif","https://i.imgur.com/apzx6bV.gif","https://i.imgur.com/WU6Cb4P.png","https://i.imgur.com/2EZEKAO.gif","https://i.imgur.com/rJxG5zz.gif","https://i.imgur.com/50lPopD.gif","https://i.imgur.com/Jsreyvp.gif","https://i.imgur.com/U8pc5ko.gif","https://i.imgur.com/kATYrIT.gif","https://i.imgur.com/FbmOkYG.jpg","https://i.imgur.com/hA4Z4iY.gif","https://i.imgur.com/2bQ2cpN.gif","https://i.imgur.com/78gMAHn.gif","https://i.imgur.com/JdJYFe9.gif","https://i.imgur.com/dDUdtZi.gif","https://i.imgur.com/jXOeS3n.gif","https://i.imgur.com/ew9jxi5.gif","https://i.imgur.com/0jtjIHn.gif","https://i.imgur.com/HiM3Fxv.gif","https://i.imgur.com/dJvGY54.gif","https://i.imgur.com/VaOcmuN.gif","https://i.imgur.com/iGISwxw.gif","https://i.imgur.com/SVSO6Mj.gif"]
    },
    hello_kitty: {
      name: 'Hello Kitty',
      color: '#eea1cd',
      emojis: ["https://i.imgur.com/TOR8Qvc.gif","https://i.imgur.com/QLIrctX.gif","https://i.imgur.com/GELnQS2.gif","https://i.imgur.com/UQCGEDP.gif","https://i.imgur.com/ISKA4P0.gif","https://i.imgur.com/icvXD5F.gif","https://i.imgur.com/rhJrOES.gif","https://i.imgur.com/ILuJ77N.gif","https://i.imgur.com/kvrFI54.gif","https://i.imgur.com/aoU6nVF.gif","https://i.imgur.com/FADkR87.gif","https://i.imgur.com/Ni8eBis.gif","https://i.imgur.com/qAPPoUu.gif","https://i.imgur.com/fOM7iqF.gif","https://i.imgur.com/i55JZrt.gif","https://i.imgur.com/RW5ALD8.gif","https://i.imgur.com/CFaPDSF.gif","https://i.imgur.com/wJWtUiF.gif","https://i.imgur.com/cfU5vVi.gif","https://i.imgur.com/lW5Xita.gif","https://i.imgur.com/byJ751z.gif","https://i.imgur.com/4dhP2pz.gif","https://i.imgur.com/XksXDeD.gif","https://i.imgur.com/ilJ2qgx.gif","https://i.imgur.com/qsL8ddq.gif","https://i.imgur.com/VzfpWfW.gif","https://i.imgur.com/2Yl4nH2.gif","https://i.imgur.com/06GD1HA.gif","https://i.imgur.com/9Ehq5LY.gif","https://i.imgur.com/qDsMIdY.gif","https://i.imgur.com/63Q4pgM.gif","https://i.imgur.com/1TW6kLY.gif","https://i.imgur.com/CqwsB9o.gif","https://i.imgur.com/BZoKzBR.gif","https://i.imgur.com/OHyp91p.gif","https://i.imgur.com/iCgXnAr.gif","https://i.imgur.com/fjbYjXj.gif","https://i.imgur.com/x6HQ7cZ.gif","https://i.imgur.com/aP5VW4K.gif","https://i.imgur.com/lwBjhwY.gif","https://i.imgur.com/Dlz9uuN.gif","https://i.imgur.com/74w9kpb.gif","https://i.imgur.com/CRwPpk4.gif","https://i.imgur.com/7DblDFf.gif","https://i.imgur.com/dXfT1m7.gif","https://i.imgur.com/jXupP8S.gif","https://i.imgur.com/gBAOxv0.gif","https://i.imgur.com/wtWQEa8.gif","https://i.imgur.com/HObP1AN.gif","https://i.imgur.com/x9DNORc.gif","https://i.imgur.com/Qv0ZCGG.gif","https://i.imgur.com/tzcG8mh.gif","https://i.imgur.com/edXc9wX.gif","https://i.imgur.com/bI0kY3e.gif","https://i.imgur.com/jivH032.gif","https://i.imgur.com/c0NdC5T.gif","https://i.imgur.com/W42Fzhq.gif","https://i.imgur.com/OYI.gif"]
    },
    my_melody: {
      name: 'My Melody',
      color: '#eea1cd',
      emojis: ["https://i.imgur.com/hhDQMei.gif","https://i.imgur.com/0EuBpF7.gif","https://i.imgur.com/YdPfYyJ.gif","https://i.imgur.com/pOGQOGE.gif","https://i.imgur.com/RhjA1tH.gif","https://i.imgur.com/4ZfZocr.gif","https://i.imgur.com/QnXCCcP.gif","https://i.imgur.com/m4pbVVb.gif","https://i.imgur.com/r480r5Y.gif","https://i.imgur.com/DlwM5P4.gif","https://i.imgur.com/x6fjzyz.gif","https://i.imgur.com/JPnHL26.gif","https://i.imgur.com/bRopBKc.gif","https://i.imgur.com/b7ZOSjY.gif","https://i.imgur.com/NC7y7l9.gif","https://i.imgur.com/69wbQvs.gif","https://i.imgur.com/OdNYwrn.gif","https://i.imgur.com/PehoEeX.gif","https://i.imgur.com/HKjedpn.gif","https://i.imgur.com/oXR0uGP.gif","https://i.imgur.com/SAaDvpJ.gif","https://i.imgur.com/vV5681s.gif","https://i.imgur.com/hw7nIfF.gif","https://i.imgur.com/aXcbmBk.gif","https://i.imgur.com/1Z7wshf.gif","https://i.imgur.com/gFt3r5U.gif","https://i.imgur.com/4kT77RI.gif","https://i.imgur.com/aUzwMf9.gif","https://i.imgur.com/nDakIJ7.gif","https://i.imgur.com/5ri1MfI.gif","https://i.imgur.com/aP9qvXn.gif","https://i.imgur.com/FHUyVTB.gif","https://i.imgur.com/cnaar9c.gif","https://i.imgur.com/HrrQpTp.gif","https://i.imgur.com/FjUNFMo.gif","https://i.imgur.com/0ErHLH6.gif","https://i.imgur.com/ERc4E6l.gif","https://i.imgur.com/G1vtCwK.gif","https://i.imgur.com/jpvfYYM.gif","https://i.imgur.com/YL54yUL.gif","https://i.imgur.com/HNrxBPr.gif","https://i.imgur.com/QrIJjay.gif","https://i.imgur.com/VoBuMnz.gif","https://i.imgur.com/hI8OSpB.gif","https://i.imgur.com/PVpnpFR.gif","https://i.imgur.com/bEhwfBr.gif","https://i.imgur.com/yHwWefO.gif","https://i.imgur.com/3XTA12U.gif","https://i.imgur.com/X1J6DW0.gif","https://i.imgur.com/jU5Bdvz.gif","https://i.imgur.com/kKqzRrD.gif","https://i.imgur.com/hSggiRv.gif","https://i.imgur.com/r4JQlYS.gif","https://i.imgur.com/Ct8h5fS.gif","https://i.imgur.com/3WX9b4w.gif","https://i.imgur.com/MWT4xAY.gif","https://i.imgur.com/osGzQyA.gif","https://i.imgur.com/hPwzY.gif"]
    },
    kuromi: {
      name: 'Kuromi',
      color: '#eea1cd',
      emojis: ["https://i.imgur.com/d2kJ1yq.gif","https://i.imgur.com/NRk4SOS.gif","https://i.imgur.com/eqQi2cM.gif","https://i.imgur.com/5QL5gVP.gif","https://i.imgur.com/N9QXtnb.gif","https://i.imgur.com/prnpw0c.gif","https://i.imgur.com/JbP26S4.gif","https://i.imgur.com/SZm9mRb.gif","https://i.imgur.com/rYwsfAf.gif","https://i.imgur.com/wUGx5Yc.gif","https://i.imgur.com/d9jIWRT.gif","https://i.imgur.com/fS5hLJY.gif","https://i.imgur.com/Q68epBv.gif","https://i.imgur.com/f5GFfoR.gif","https://i.imgur.com/i3m5sq9.gif","https://i.imgur.com/9IPUmJH.gif","https://i.imgur.com/nufyIAZ.gif","https://i.imgur.com/1sFG0at.gif","https://i.imgur.com/PCk963A.gif","https://i.imgur.com/8gYoDAX.gif","https://i.imgur.com/7EjEWCY.gif","https://i.imgur.com/WMqf2uy.gif","https://i.imgur.com/DL6Z6KM.gif","https://i.imgur.com/mAU0uug.gif","https://i.imgur.com/wFWKMM9.gif","https://i.imgur.com/amwFZTx.gif","https://i.imgur.com/DztzuB4.gif","https://i.imgur.com/K0nSNLl.gif","https://i.imgur.com/jR7VcHn.gif","https://i.imgur.com/qMiGb0Q.gif","https://i.imgur.com/xjPGzx1.gif","https://i.imgur.com/1rRgRbP.gif","https://i.imgur.com/AszXVpf.gif"]
    }
  };

  let emojiPickerVisible = false;
  let currentCategory = 'ios_emoji';

  // Category icons - use different GIFs from each category
  const categoryIcons = {
    ios_emoji: emojiCategories.ios_emoji.emojis[0],
    red: emojiCategories.red.emojis[5],
    orange: emojiCategories.orange.emojis[3],
    yellow: emojiCategories.yellow.emojis[7],
    green: emojiCategories.green.emojis[2],
    pink: emojiCategories.pink.emojis[4],
    purple: emojiCategories.purple.emojis[6],
    brown: emojiCategories.brown.emojis[8],
    black: emojiCategories.black.emojis[1],
    gray: emojiCategories.gray.emojis[5],
    white: emojiCategories.white.emojis[3],
    rainbow: emojiCategories.rainbow.emojis[2],
    pairs: emojiCategories.pairs.emojis[4],
    misc: emojiCategories.misc.emojis[6],
    hello_kitty: emojiCategories.hello_kitty.emojis[3],
    my_melody: emojiCategories.my_melody.emojis[5],
    kuromi: emojiCategories.kuromi.emojis[2]
  };

  // Create emoji picker
  const emojiPicker = document.createElement('div');
  emojiPicker.className = 'emoji-picker hidden';

  // Create main content area
  const emojiContent = document.createElement('div');
  emojiContent.className = 'emoji-content';

  // Create emoji grid
  const emojiGrid = document.createElement('div');
  emojiGrid.className = 'emoji-grid';

  // Function to render emojis for a category
  function renderCategory(category) {
    currentCategory = category;
    const categoryData = emojiCategories[category];
    if (!categoryData) return;

    // Update title
    titleText.textContent = categoryData.name;
    titleText.style.color = categoryData.color;

    // Build emoji grid
    let emojiGridHTML = '';
    categoryData.emojis.forEach(emoji => {
      emojiGridHTML += `<button class="emoji-item" data-url="${emoji}"><img src="${emoji}" alt="emoji" style="width: 24px; height: 24px;"></button>`;
    });
    emojiGrid.innerHTML = emojiGridHTML;

    // Update active tab
    document.querySelectorAll('.category-tab').forEach(tab => {
      tab.classList.remove('active');
      if (tab.dataset.category === category) {
        tab.classList.add('active');
        tab.style.setProperty('--category-color', categoryData.color);
      }
    });
  }

  // Create bottom category bar
  const categoryBar = document.createElement('div');
  categoryBar.className = 'emoji-category-bar';

  // Add drag-to-scroll for desktop
  let isDown = false;
  let startX;
  let scrollLeft;

  categoryBar.addEventListener('mousedown', (e) => {
    isDown = true;
    categoryBar.style.cursor = 'grabbing';
    startX = e.pageX - categoryBar.offsetLeft;
    scrollLeft = categoryBar.scrollLeft;
  });

  categoryBar.addEventListener('mouseleave', () => {
    isDown = false;
    categoryBar.style.cursor = 'grab';
  });

  categoryBar.addEventListener('mouseup', () => {
    isDown = false;
    categoryBar.style.cursor = 'grab';
  });

  categoryBar.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - categoryBar.offsetLeft;
    const walk = (x - startX) * 2;
    categoryBar.scrollLeft = scrollLeft - walk;
  });

  Object.keys(emojiCategories).forEach(category => {
    const tab = document.createElement('button');
    tab.className = 'category-tab';
    tab.dataset.category = category;
    const iconUrl = categoryIcons[category];
    tab.innerHTML = `<img src="${iconUrl}" alt="${category}" class="category-icon">`;
    tab.style.setProperty('--category-color', emojiCategories[category].color);
    tab.addEventListener('click', () => renderCategory(category));
    categoryBar.appendChild(tab);
  });

  // Create title with close button
  const categoryTitle = document.createElement('div');
  categoryTitle.className = 'category-title';

  const titleText = document.createElement('span');
  titleText.className = 'category-title-text';
  titleText.textContent = 'Red';
  titleText.style.color = '#e68bbe';
  categoryTitle.appendChild(titleText);

  const closeEmojiPickerBtn = document.createElement('button');
  closeEmojiPickerBtn.className = 'close-emoji-picker';
  closeEmojiPickerBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
  closeEmojiPickerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    emojiPicker.classList.add('hidden');
    emojiPickerVisible = false;
  });
  categoryTitle.appendChild(closeEmojiPickerBtn);

  emojiContent.appendChild(categoryTitle);
  emojiContent.appendChild(emojiGrid);
  emojiPicker.appendChild(emojiContent);
  emojiPicker.appendChild(categoryBar);

  document.body.appendChild(emojiPicker);

  // Render initial category
  renderCategory('ios_emoji');

  // Toggle emoji picker
  emojiBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    emojiPickerVisible = !emojiPickerVisible;
    if (emojiPickerVisible) {
      const btnRect = emojiBtn.getBoundingClientRect();
      const pickerHeight = 320;
      emojiPicker.style.bottom = `${window.innerHeight - btnRect.top + 10}px`;
      emojiPicker.style.left = `${Math.min(btnRect.left, window.innerWidth - 340)}px`;
      emojiPicker.classList.remove('hidden');
    } else {
      emojiPicker.classList.add('hidden');
    }
  });


  // Add emoji to input
  emojiPicker.addEventListener('click', (e) => {
    const emojiBtn = e.target.closest('.emoji-item');
    if (emojiBtn) {
      const imageUrl = emojiBtn.getAttribute('data-url');
      chatInput.innerHTML += `<img src="${imageUrl}" style="width: 20px; height: 20px;">`;
      chatInput.focus();
      // Play typing sound when adding emoji
      playTypingSound();
      // Don't close picker - allow multiple emoji selection
      // Trigger input event to show send button
      chatInput.dispatchEvent(new Event('input'));
    }
  });

  // Prevent right-click on emoji images
  emojiPicker.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });

  // Close emoji picker when clicking outside with blur transition
  document.addEventListener('click', (e) => {
    if (emojiPickerVisible && !emojiPicker.contains(e.target) && !emojiBtn.contains(e.target)) {
      emojiPicker.classList.add('closing');
      setTimeout(() => {
        emojiPicker.classList.add('hidden');
        emojiPicker.classList.remove('closing');
        emojiPickerVisible = false;
      }, 200);
    }
  });

  // ===== Sticker Picker =====
  const stickerUrls = [
    "https://i.ibb.co/svmfN7Lq/IMG-8280.png",
    "https://i.ibb.co/Kz9t1yT4/IMG-5887.png",
    "https://i.ibb.co/q3JfRckK/IMG-5888.png",
    "https://i.ibb.co/3mVVfTMm/IMG-5891.png",
    "https://i.ibb.co/HpfDD0Gy/IMG-5892.png",
    "https://i.ibb.co/ynS4cYjR/IMG-5893.png",
    "https://i.ibb.co/M52z5zZb/IMG-5894.png",
    "https://i.ibb.co/NgLv7H1g/IMG-5896.png",
    "https://i.ibb.co/sJ10rJVp/IMG-6016.png",
    "https://i.ibb.co/G3trkGzs/IMG-6038.png",
    "https://i.ibb.co/pr9dMRK9/IMG-6043.png",
    "https://i.ibb.co/gbygmyFS/IMG-6050.png",
    "https://i.ibb.co/GQNV3gST/IMG-6052.png",
    "https://i.ibb.co/8TjFCsk/IMG-6053.png",
    "https://i.ibb.co/3mJ5sk3X/ig-ridoll-43.png",
    "https://i.ibb.co/8DqkZzYB/ig-ridoll-45.png",
    "https://i.ibb.co/MkQY0rJL/ig-ridoll-47.png",
    "https://i.ibb.co/93zgCRdm/ig-ridoll-48.png",
    "https://i.ibb.co/nM3D34qF/ig-ridoll-49.png",
    "https://i.ibb.co/yBpPKGry/ig-ridoll-54.png",
    "https://i.ibb.co/xSs0yG00/ig-ridoll-56.png",
    "https://i.ibb.co/Xxvr6MsZ/ig-ridoll-59.png",
    "https://i.ibb.co/H0mLJLs/ig-ridoll-60.png",
    "https://i.ibb.co/Wp3dv7F9/ig-ridoll-13.png",
    "https://i.ibb.co/Y4mW6ffj/ig-ridoll-14.png",
    "https://i.ibb.co/3Y8RcX8h/ig-ridoll-15.png",
    "https://i.ibb.co/HT1tBb14/ig-ridoll-16.png",
    "https://i.ibb.co/ZpfBNPYY/ig-ridoll-21.png",
    "https://i.ibb.co/1G3PNbBk/ig-ridoll-30.png",
    "https://i.ibb.co/Q3CT53dS/ig-ridoll-31.png",
    "https://i.ibb.co/DxWZBPM/ig-ridoll-32.png",
    "https://i.ibb.co/53rMCwd/ig-ridoll-33.png",
    "https://i.ibb.co/YBjmymW8/ig-ridoll-34.png",
    "https://i.ibb.co/gLGf5Bqh/ig-ridoll-35.png",
    "https://i.ibb.co/N2Xk0rww/ig-ridoll-36.png",
    "https://i.ibb.co/8n45QDJ5/ig-ridoll-37.png",
    "https://i.ibb.co/x8h2cRwv/ig-ridoll-38.png",
    "https://i.ibb.co/R4hjyhj2/ig-ridoll-39.png",
    "https://i.ibb.co/XrCkBctq/ig-ridoll-41.png"
  ];

  let stickerPickerVisible = false;

  // Create sticker picker
  const stickerPicker = document.createElement('div');
  stickerPicker.className = 'sticker-picker hidden';

  // Create main content area
  const stickerContent = document.createElement('div');
  stickerContent.className = 'sticker-content';

  // Create title with close button
  const stickerTitle = document.createElement('div');
  stickerTitle.className = 'sticker-title';

  const stickerTitleText = document.createElement('span');
  stickerTitleText.className = 'sticker-title-text';
  stickerTitleText.textContent = 'Stickers';
  stickerTitle.appendChild(stickerTitleText);

  const closeStickerPickerBtn = document.createElement('button');
  closeStickerPickerBtn.className = 'close-sticker-picker';
  closeStickerPickerBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
  closeStickerPickerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    stickerPicker.classList.add('hidden');
    stickerPickerVisible = false;
  });
  stickerTitle.appendChild(closeStickerPickerBtn);

  // Create sticker grid
  const stickerGrid = document.createElement('div');
  stickerGrid.className = 'sticker-grid';

  // Build sticker grid
  let stickerGridHTML = '';
  stickerUrls.forEach(sticker => {
    stickerGridHTML += `<button class="sticker-item" data-url="${sticker}"><img src="${sticker}" alt="sticker" style="width: 80px; height: 80px; object-fit: contain;"></button>`;
  });
  stickerGrid.innerHTML = stickerGridHTML;

  stickerContent.appendChild(stickerTitle);
  stickerContent.appendChild(stickerGrid);
  stickerPicker.appendChild(stickerContent);

  document.body.appendChild(stickerPicker);

  // Toggle sticker picker
  function toggleStickerPicker() {
    stickerPickerVisible = !stickerPickerVisible;
    if (stickerPickerVisible) {
      const chatInputRect = chatInput.getBoundingClientRect();
      const pickerHeight = 350;
      stickerPicker.style.bottom = `${window.innerHeight - chatInputRect.top + 10}px`;
      stickerPicker.style.left = `${Math.min(chatInputRect.left, window.innerWidth - 360)}px`;
      stickerPicker.classList.remove('hidden');
    } else {
      stickerPicker.classList.add('hidden');
    }
  }

  // Send sticker
  stickerPicker.addEventListener('click', (e) => {
    const stickerBtn = e.target.closest('.sticker-item');
    if (stickerBtn) {
      const stickerUrl = stickerBtn.getAttribute('data-url');
      sendStickerMessage(stickerUrl);
      stickerPicker.classList.add('hidden');
      stickerPickerVisible = false;
    }
  });

  // Close sticker picker when clicking outside
  document.addEventListener('click', (e) => {
    if (stickerPickerVisible && !stickerPicker.contains(e.target) && !e.target.closest('.sticker-btn')) {
      stickerPicker.classList.add('hidden');
      stickerPickerVisible = false;
    }
  });

  // Function to send sticker message
  function sendStickerMessage(stickerUrl) {
    const messageWrapper = document.createElement('div');
    messageWrapper.className = 'message-wrapper sent';
    messageWrapper.innerHTML = `
      <div class="message-content-row">
        <div class="message sent">
          <img src="${stickerUrl}" class="sticker-message" style="width: 150px; height: 150px; object-fit: contain;">
        </div>
        <div class="message-actions">
          <button class="action-btn reaction-btn" title="React">☺︎</button>
          <button class="action-btn reply-btn" title="Reply">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
              <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
            </svg>
          </button>
          <button class="action-btn more-btn" title="More">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <circle cx="12" cy="5" r="2"/>
              <circle cx="12" cy="12" r="2"/>
              <circle cx="12" cy="19" r="2"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    chatMessages.appendChild(messageWrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    addSwipeToReply(messageWrapper);

    // Trigger AI response
    showTypingIndicator();
    setTimeout(async () => {
      hideTypingIndicator();
      const aiResponse = await generateAIResponse('[Sticker sent]');
      const responseWrapper = document.createElement('div');
      responseWrapper.className = 'message-wrapper received';
      responseWrapper.innerHTML = `
        <img src="https://i.ibb.co/jv00vHGV/Profile.jpg" alt="Samad" class="message-avatar">
        <div class="message-content-row">
          <div class="message received">
            <span>${aiResponse}</span>
          </div>
        </div>
      `;
      chatMessages.appendChild(responseWrapper);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      conversationHistory.push({ role: 'user', message: '[Sticker sent]' });
      conversationHistory.push({ role: 'assistant', message: aiResponse });
    }, 1500 + Math.random() * 1000);
  }

  function showTypingIndicator() {
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'message-wrapper received typing';
    typingIndicator.innerHTML = `
      <img src="https://i.ibb.co/jv00vHGV/Profile.jpg" alt="Samad" class="message-avatar">
      <div class="message-content-row">
        <div class="message received">
          <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    `;
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingIndicator;
  }

  function hideTypingIndicator() {
    const typingIndicator = chatMessages.querySelector('.typing');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }
  
  // Handle message click to show action buttons
  chatMessages.addEventListener('click', (e) => {
    const messageWrapper = e.target.closest('.message-wrapper');
    
    // Remove active class from all message wrappers
    document.querySelectorAll('.message-wrapper.active').forEach(wrapper => {
      wrapper.classList.remove('active');
    });
    
    // Add active class to clicked message wrapper
    if (messageWrapper) {
      messageWrapper.classList.add('active');
    }
  });
  
  // Remove active class when clicking outside messages
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.message-wrapper') && !e.target.closest('.message-actions') && !e.target.closest('.quick-reactions') && !e.target.closest('.more-menu')) {
      document.querySelectorAll('.message-wrapper.active').forEach(wrapper => {
        wrapper.classList.remove('active');
      });
    }
  });
  
  // ===== Message Actions =====
  let activeMessage = null;
  let activeMessageWrapper = null;
  let replyingTo = null;
  let replyingToMessageElement = null;
  let isReplyingToSelf = false;
  let editingMessage = null;
  const moreMenuReceived = document.getElementById('moreMenuReceived');
  const moreMenuSent = document.getElementById('moreMenuSent');
  const replyPreview = document.getElementById('replyPreview');
  const cancelReplyBtn = document.getElementById('cancelReplyBtn');
  const editPreview = document.getElementById('editPreview');
  const cancelEditBtn = document.getElementById('cancelEditBtn');
  
  // Close more menus when clicking outside
  document.addEventListener('click', (e) => {
    // Don't close if clicking on a more button (that's handled separately)
    if (e.target.closest('.more-btn')) return;

    if (moreMenuReceived && !moreMenuReceived.contains(e.target)) {
      moreMenuReceived.classList.add('hidden');
    }
    if (moreMenuSent && !moreMenuSent.contains(e.target)) {
      moreMenuSent.classList.add('hidden');
    }
    
    // Close quick reactions when clicking outside
    document.querySelectorAll('.quick-reactions').forEach(reactions => {
      if (!reactions.contains(e.target) && !e.target.closest('.reaction-btn')) {
        reactions.classList.add('hidden');
      }
    });
  });
  
  // Handle reaction button click
  document.addEventListener('click', (e) => {
    if (e.target.closest('.reaction-btn')) {
      const reactionBtn = e.target.closest('.reaction-btn');
      const messageContentRow = reactionBtn.closest('.message-content-row');
      const messageEl = messageContentRow.querySelector('.message');
      const reactionsEl = messageEl.querySelector('.quick-reactions');

      console.log('Menu opened', reactionsEl);

      // Close other reaction bars
      document.querySelectorAll('.quick-reactions').forEach(r => {
        if (r !== reactionsEl) r.classList.add('hidden');
      });

      reactionsEl.classList.toggle('hidden');
    }
  });
  
  // Handle emoji click in quick reactions
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('reaction-emoji')) {
      const messageEl = e.target.closest('.message');
      const messageWrapper = messageEl.closest('.message-wrapper');
      const emoji = e.target.textContent;
      
      // Toggle reaction pill
      const reactionPill = messageWrapper.querySelector('.reaction-pill');
      if (reactionPill) {
        reactionPill.classList.toggle('hidden');
        reactionPill.textContent = emoji;
      } else {
        // Create reaction pill if it doesn't exist
        const newPill = document.createElement('div');
        newPill.className = 'reaction-pill';
        newPill.textContent = emoji;
        messageEl.appendChild(newPill);
      }
      
      // Hide reactions bar
      messageEl.querySelector('.quick-reactions').classList.add('hidden');
    }
  });
  
  // Handle reply button click
  document.addEventListener('click', (e) => {
    if (e.target.closest('.reply-btn')) {
      const replyBtn = e.target.closest('.reply-btn');
      const messageContentRow = replyBtn.closest('.message-content-row');
      const messageEl = messageContentRow.querySelector('.message');
      const messageText = messageEl.querySelector('span.message-content-text')?.textContent || messageEl.querySelector('img.message-image')?.alt || 'Image';
      const isOwnMessage = messageEl.classList.contains('sent');
      
      replyingTo = messageText;
      replyingToMessageElement = messageEl;
      isReplyingToSelf = isOwnMessage;
      replyPreview.classList.remove('hidden');
      
      // Update reply label and text based on if it's own message
      const replyLabel = replyPreview.querySelector('.reply-label');
      const replyText = replyPreview.querySelector('.reply-text');

      if (isOwnMessage) {
        replyLabel.textContent = 'Replying to yourself';
        replyText.textContent = truncateText(messageText);
      } else {
        replyLabel.textContent = 'Replying to Samad';
        replyText.textContent = truncateText(messageText);
      }
      
      chatInput.focus();
      
      // Hide reactions bar if open
      const reactionsEl = messageEl.querySelector('.quick-reactions');
      if (reactionsEl) {
        reactionsEl.classList.add('hidden');
      }
    }
  });

  // Handle Instagram-style swipe to reply gesture
  let swipeStartX = 0;
  let swipeCurrentMessageWrapper = null;
  let swipeMessageContentRow = null;
  let swipeReplyArrow = null;
  let isSwiping = false;
  let messageDirection = null; // 'left' for received, 'right' for sent
  let didSwipe = false;
  const SWIPE_THRESHOLD = 45;
  const MAX_SWIPE_DISTANCE = 60;

  // Touch events for mobile
  document.addEventListener('touchstart', (e) => {
    const messageWrapper = e.target.closest('.message-wrapper');
    if (messageWrapper && !e.target.closest('.reaction-btn') && !e.target.closest('.quick-reactions') && !e.target.closest('.more-btn') && !e.target.closest('.action-btn') && !e.target.closest('.message-actions-right')) {
      swipeStartX = e.touches[0].clientX;
      swipeCurrentMessageWrapper = messageWrapper;
      swipeMessageContentRow = messageWrapper.querySelector('.message-content-row');
      swipeReplyArrow = messageWrapper.querySelector('.swipe-reply-arrow');
      isSwiping = true;
      didSwipe = false;

      // Determine message direction
      const messageEl = messageWrapper.querySelector('.message');
      messageDirection = messageEl.classList.contains('sent') ? 'right' : 'left';

      // Remove transition for instant drag
      if (swipeMessageContentRow) {
        swipeMessageContentRow.classList.add('swiping');
      }
    }
  });

  // Mouse events for desktop/frame version
  document.addEventListener('mousedown', (e) => {
    const messageWrapper = e.target.closest('.message-wrapper');
    if (messageWrapper && !e.target.closest('.reaction-btn') && !e.target.closest('.quick-reactions') && !e.target.closest('.more-btn') && !e.target.closest('.action-btn') && !e.target.closest('.message-actions-right')) {
      swipeStartX = e.clientX;
      swipeCurrentMessageWrapper = messageWrapper;
      swipeMessageContentRow = messageWrapper.querySelector('.message-content-row');
      swipeReplyArrow = messageWrapper.querySelector('.swipe-reply-arrow');
      isSwiping = true;
      didSwipe = false;

      // Determine message direction
      const messageEl = messageWrapper.querySelector('.message');
      messageDirection = messageEl.classList.contains('sent') ? 'right' : 'left';

      // Remove transition for instant drag
      if (swipeMessageContentRow) {
        swipeMessageContentRow.classList.add('swiping');
      }
    }
  });

  document.addEventListener('touchmove', (e) => {
    if (!isSwiping || !swipeMessageContentRow) return;

    const currentX = e.touches[0].clientX;
    const deltaX = currentX - swipeStartX;

    // Mark that we're actually swiping
    if (Math.abs(deltaX) > 5) {
      didSwipe = true;
    }

    // Allow swipe based on message direction
    if (messageDirection === 'left' && deltaX > 0) {
      // Received messages: swipe right
      const swipeDistance = Math.min(deltaX, MAX_SWIPE_DISTANCE);
      swipeMessageContentRow.style.transform = `translateX(${swipeDistance}px)`;

      // Reveal arrow
      if (swipeReplyArrow) {
        const revealProgress = Math.min(swipeDistance / 30, 1);
        swipeReplyArrow.style.opacity = revealProgress;
        swipeReplyArrow.style.transform = `translateY(-50%) scale(${0.5 + (revealProgress * 0.5)})`;
        if (revealProgress > 0) {
          swipeReplyArrow.classList.add('visible');
        } else {
          swipeReplyArrow.classList.remove('visible');
        }
      }
    } else if (messageDirection === 'right' && deltaX < 0) {
      // Sent messages: swipe left
      const swipeDistance = Math.min(Math.abs(deltaX), MAX_SWIPE_DISTANCE);
      swipeMessageContentRow.style.transform = `translateX(-${swipeDistance}px)`;

      // Reveal arrow (positioned on right for sent messages)
      if (swipeReplyArrow) {
        const revealProgress = Math.min(swipeDistance / 30, 1);
        swipeReplyArrow.style.opacity = revealProgress;
        swipeReplyArrow.style.transform = `translateY(-50%) scale(${0.5 + (revealProgress * 0.5)})`;
        if (revealProgress > 0) {
          swipeReplyArrow.classList.add('visible');
        } else {
          swipeReplyArrow.classList.remove('visible');
        }
      }
    }
  });

  document.addEventListener('mousemove', (e) => {
    if (!isSwiping || !swipeMessageContentRow) return;

    const currentX = e.clientX;
    const deltaX = currentX - swipeStartX;

    // Mark that we're actually swiping
    if (Math.abs(deltaX) > 5) {
      didSwipe = true;
    }

    // Allow swipe based on message direction
    if (messageDirection === 'left' && deltaX > 0) {
      // Received messages: swipe right
      const swipeDistance = Math.min(deltaX, MAX_SWIPE_DISTANCE);
      swipeMessageContentRow.style.transform = `translateX(${swipeDistance}px)`;

      // Reveal arrow
      if (swipeReplyArrow) {
        const revealProgress = Math.min(swipeDistance / 30, 1);
        swipeReplyArrow.style.opacity = revealProgress;
        swipeReplyArrow.style.transform = `translateY(-50%) scale(${0.5 + (revealProgress * 0.5)})`;
        if (revealProgress > 0) {
          swipeReplyArrow.classList.add('visible');
        } else {
          swipeReplyArrow.classList.remove('visible');
        }
      }
    } else if (messageDirection === 'right' && deltaX < 0) {
      // Sent messages: swipe left
      const swipeDistance = Math.min(Math.abs(deltaX), MAX_SWIPE_DISTANCE);
      swipeMessageContentRow.style.transform = `translateX(-${swipeDistance}px)`;

      // Reveal arrow (positioned on right for sent messages)
      if (swipeReplyArrow) {
        const revealProgress = Math.min(swipeDistance / 30, 1);
        swipeReplyArrow.style.opacity = revealProgress;
        swipeReplyArrow.style.transform = `translateY(-50%) scale(${0.5 + (revealProgress * 0.5)})`;
        if (revealProgress > 0) {
          swipeReplyArrow.classList.add('visible');
        } else {
          swipeReplyArrow.classList.remove('visible');
        }
      }
    }
  });

  document.addEventListener('touchend', (e) => {
    if (!isSwiping) return;

    const endX = e.changedTouches[0].clientX;
    const swipeDistance = Math.abs(endX - swipeStartX);

    // Check if swipe exceeded threshold and in correct direction
    const deltaX = endX - swipeStartX;
    const correctDirection = (messageDirection === 'left' && deltaX > 0) || (messageDirection === 'right' && deltaX < 0);

    if (swipeDistance >= SWIPE_THRESHOLD && correctDirection) {
      // Trigger reply mode
      const messageEl = swipeCurrentMessageWrapper.querySelector('.message');
      const isSent = messageEl.classList.contains('sent');

      // Handle both text and image messages
      const textSpan = messageEl.querySelector('span.message-content-text');
      const imageEl = messageEl.querySelector('img.message-image');
      let messageText = '';

      if (textSpan) {
        messageText = textSpan.textContent;
      } else if (imageEl) {
        messageText = 'Attached Image';
      }

      replyingTo = messageText;
      replyingToMessageElement = messageEl;
      isReplyingToSelf = isSent;
      replyPreview.classList.remove('hidden');

      // Update reply label and text
      const replyLabel = replyPreview.querySelector('.reply-label');
      const replyText = replyPreview.querySelector('.reply-text');

      if (isSent) {
        replyLabel.textContent = 'Replying to yourself';
        replyText.textContent = truncateText(messageText);
      } else {
        replyLabel.textContent = 'Replying to Samad';
        replyText.textContent = truncateText(messageText);
      }

      chatInput.focus();

      // Haptic feedback on mobile
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }

      // Hide reactions bar if open
      const reactionsEl = messageEl.querySelector('.quick-reactions');
      if (reactionsEl) {
        reactionsEl.classList.add('hidden');
      }
    }

    // Spring back animation
    if (swipeMessageContentRow) {
      swipeMessageContentRow.classList.remove('swiping');
      swipeMessageContentRow.style.transform = 'translateX(0)';
    }

    if (swipeReplyArrow) {
      swipeReplyArrow.style.opacity = '0';
      swipeReplyArrow.style.transform = 'translateY(-50%) scale(0)';
      swipeReplyArrow.classList.remove('visible');
    }

    swipeCurrentMessageWrapper = null;
    swipeMessageContentRow = null;
    swipeReplyArrow = null;
    isSwiping = false;
    messageDirection = null;
    didSwipe = false;
  });

  // Mouse events for desktop/frame version
  document.addEventListener('mouseup', (e) => {
    if (!isSwiping) return;

    const endX = e.clientX;
    const swipeDistance = Math.abs(endX - swipeStartX);

    // Check if swipe exceeded threshold and in correct direction
    const deltaX = endX - swipeStartX;
    const correctDirection = (messageDirection === 'left' && deltaX > 0) || (messageDirection === 'right' && deltaX < 0);

    if (swipeDistance >= SWIPE_THRESHOLD && correctDirection) {
      // Trigger reply mode
      const messageEl = swipeCurrentMessageWrapper.querySelector('.message');
      const isSent = messageEl.classList.contains('sent');

      // Handle both text and image messages
      const textSpan = messageEl.querySelector('span.message-content-text');
      const imageEl = messageEl.querySelector('img.message-image');
      let messageText = '';

      if (textSpan) {
        messageText = textSpan.textContent;
      } else if (imageEl) {
        messageText = 'Attached Image';
      }

      replyingTo = messageText;
      replyingToMessageElement = messageEl;
      isReplyingToSelf = isSent;
      replyPreview.classList.remove('hidden');

      // Update reply label and text
      const replyLabel = replyPreview.querySelector('.reply-label');
      const replyText = replyPreview.querySelector('.reply-text');

      if (isSent) {
        replyLabel.textContent = 'Replying to yourself';
        replyText.textContent = truncateText(messageText);
      } else {
        replyLabel.textContent = 'Replying to Samad';
        replyText.textContent = truncateText(messageText);
      }

      chatInput.focus();

      // Hide reactions bar if open
      const reactionsEl = messageEl.querySelector('.quick-reactions');
      if (reactionsEl) {
        reactionsEl.classList.add('hidden');
      }
    }

    // Spring back animation
    if (swipeMessageContentRow) {
      swipeMessageContentRow.classList.remove('swiping');
      swipeMessageContentRow.style.transform = 'translateX(0)';
    }

    // Hide arrow
    if (swipeReplyArrow) {
      swipeReplyArrow.style.opacity = '0';
      swipeReplyArrow.style.transform = 'translateY(-50%) scale(0)';
      swipeReplyArrow.classList.remove('visible');
    }

    // Reset variables
    isSwiping = false;
    swipeCurrentMessageWrapper = null;
    swipeMessageContentRow = null;
    swipeReplyArrow = null;
    messageDirection = null;
    didSwipe = false;
  });

  // Handle long press for reactions
  let longPressTimer = null;
  let longPressMessageWrapper = null;
  let longPressStartX = 0;
  let longPressStartY = 0;

  document.addEventListener('touchstart', (e) => {
    const messageWrapper = e.target.closest('.message-wrapper');
    if (messageWrapper && !e.target.closest('.reaction-btn') && !e.target.closest('.quick-reactions') && !e.target.closest('.more-btn') && !e.target.closest('.message-actions-right')) {
      longPressMessageWrapper = messageWrapper;
      longPressStartX = e.touches[0].clientX;
      longPressStartY = e.touches[0].clientY;

      // Start long press timer (500ms)
      longPressTimer = setTimeout(() => {
        if (longPressMessageWrapper) {
          const messageEl = longPressMessageWrapper.querySelector('.message');
          const reactionsEl = messageEl.querySelector('.quick-reactions');

          // Close other reaction bars
          document.querySelectorAll('.quick-reactions').forEach(r => {
            if (r !== reactionsEl) r.classList.add('hidden');
          });

          // Show reactions for this message
          reactionsEl.classList.remove('hidden');

          // Add visual feedback
          longPressMessageWrapper.classList.add('active');
        }
      }, 500);
    }
  });

  document.addEventListener('touchmove', (e) => {
    if (longPressTimer) {
      const moveX = e.touches[0].clientX;
      const moveY = e.touches[0].clientY;
      const deltaX = Math.abs(moveX - longPressStartX);
      const deltaY = Math.abs(moveY - longPressStartY);
      
      // Cancel long press if moved too much (more than 10px)
      if (deltaX > 10 || deltaY > 10) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
      }
    }
  });

  document.addEventListener('touchend', () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      longPressTimer = null;
    }
    longPressMessageWrapper = null;
  });

  // Also handle mouse events for desktop long press
  let mousePressTimer = null;
  let mousePressMessageWrapper = null;

  document.addEventListener('mousedown', (e) => {
    const messageWrapper = e.target.closest('.message-wrapper');
    if (messageWrapper && !e.target.closest('.reaction-btn') && !e.target.closest('.quick-reactions') && !e.target.closest('.more-btn') && !e.target.closest('.message-actions-right')) {
      mousePressMessageWrapper = messageWrapper;

      // Start long press timer (500ms)
      mousePressTimer = setTimeout(() => {
        if (mousePressMessageWrapper) {
          const messageEl = mousePressMessageWrapper.querySelector('.message');
          const reactionsEl = messageEl.querySelector('.quick-reactions');

          // Close other reaction bars
          document.querySelectorAll('.quick-reactions').forEach(r => {
            if (r !== reactionsEl) r.classList.add('hidden');
          });

          // Show reactions for this message
          reactionsEl.classList.remove('hidden');

          // Add visual feedback
          mousePressMessageWrapper.classList.add('active');
        }
      }, 500);
    }
  });

  document.addEventListener('mouseup', () => {
    if (mousePressTimer) {
      clearTimeout(mousePressTimer);
      mousePressTimer = null;
    }
    mousePressMessageWrapper = null;
  });

  document.addEventListener('mousemove', (e) => {
    if (mousePressTimer) {
      // Cancel long press on mouse move
      clearTimeout(mousePressTimer);
      mousePressTimer = null;
    }
  });

  // Handle more button click using event delegation on chatMessages container
  if (chatMessages) {
    chatMessages.addEventListener('click', (e) => {
      if (e.target.closest('.more-btn')) {
        console.log('More button clicked');
        e.preventDefault();
        e.stopPropagation();

        const moreBtn = e.target.closest('.more-btn');
        const messageWrapper = moreBtn.closest('.message-wrapper');
        const messageEl = messageWrapper.querySelector('.message');
        const rect = moreBtn.getBoundingClientRect();

        // Set global active message reference
        activeMessageWrapper = messageWrapper;
        activeMessage = messageEl;

        // Check if menu elements exist
        if (!moreMenuReceived || !moreMenuSent) {
          console.error('More menu elements not found:', { moreMenuReceived, moreMenuSent });
          return;
        }

        // Determine if sent or received message
        const isReceived = messageEl.classList.contains('received');
        const menu = isReceived ? moreMenuReceived : moreMenuSent;

        console.log('Showing more menu for message:', isReceived ? 'received' : 'sent');

        // Position menu relative to mobile-frame container
        const containerRect = document.querySelector('.mobile-frame').getBoundingClientRect();
        menu.style.top = (rect.top - containerRect.top + 30) + 'px';
        menu.style.left = (rect.left - containerRect.left - 80) + 'px';
        menu.classList.remove('hidden');

        // Hide the other menu
        if (isReceived) {
          moreMenuSent.classList.add('hidden');
        } else {
          moreMenuReceived.classList.add('hidden');
        }

        // Hide reactions bar if open
        messageEl.querySelector('.quick-reactions')?.classList.add('hidden');
      }
    });
  }
  
  // Handle more menu - reply button
  document.addEventListener('click', (e) => {
    if (e.target.closest('.more-reply-btn')) {
      const messageText = activeMessage.querySelector('span').innerHTML;
      
      replyingTo = messageText;
      replyPreview.classList.remove('hidden');
      replyPreview.querySelector('.reply-text').innerHTML = truncateText(messageText);
      chatInput.focus();
      
      moreMenuReceived.classList.add('hidden');
      moreMenuSent.classList.add('hidden');
    }
  });
  
  // Handle more menu - copy button
  document.addEventListener('click', (e) => {
    if (e.target.closest('.more-copy-btn')) {
      const imageEl = activeMessage.querySelector('img.message-image');
      
      if (imageEl) {
        // Copy image to clipboard
        fetch(imageEl.src)
          .then(response => response.blob())
          .then(blob => {
            const item = new ClipboardItem({ 'image/png': blob });
            navigator.clipboard.write([item]).then(() => {
              moreMenuReceived.classList.add('hidden');
              moreMenuSent.classList.add('hidden');
            }).catch(err => {
              console.error('Failed to copy image:', err);
            });
          })
          .catch(err => {
            console.error('Failed to fetch image:', err);
          });
      } else {
        // Copy text if no image
        const messageText = activeMessage.querySelector('span').innerHTML;
        
        navigator.clipboard.writeText(messageText).then(() => {
          moreMenuReceived.classList.add('hidden');
          moreMenuSent.classList.add('hidden');
        }).catch(err => {
          console.error('Failed to copy:', err);
        });
      }
    }
  });
  
  // Handle more menu - edit button
  document.addEventListener('click', (e) => {
    if (e.target.closest('.more-edit-btn')) {
      const messageText = activeMessage.querySelector('span').textContent;

      console.log('Edit button clicked, setting editingMessage to:', activeMessage);

      chatInput.innerText = messageText;
      editingMessage = activeMessage;
      chatInput.focus();

      // Show edit preview
      editPreview.classList.remove('hidden');
      editPreview.querySelector('.edit-text').textContent = messageText;

      // Hide reply preview if showing
      replyPreview.classList.add('hidden');
      replyingTo = null;
      replyingToMessageElement = null;

      moreMenuSent.classList.add('hidden');
    }
  });
  
  // Handle more menu - unsend button
  document.addEventListener('click', (e) => {
    if (e.target.closest('.more-unsend-btn')) {
      if (activeMessageWrapper) {
        activeMessageWrapper.remove();
        activeMessage = null;
        activeMessageWrapper = null;
      }
      
      moreMenuSent.classList.add('hidden');
    }
  });
  
  // Handle cancel reply
  cancelReplyBtn.addEventListener('click', () => {
    replyingTo = null;
    replyingToMessageElement = null;
    isReplyingToSelf = false;
    replyPreview.classList.add('hidden');
  });
  
  // Handle cancel edit
  cancelEditBtn.addEventListener('click', () => {
    editingMessage = null;
    editPreview.classList.add('hidden');
    chatInput.value = '';
  });
  
  // Add reply indicator styling
  const replyIndicatorStyle = document.createElement('style');
  replyIndicatorStyle.textContent = `
    .reply-indicator {
      font-size: 11px;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 4px;
      padding-left: 4px;
      border-left: 2px solid rgba(255, 255, 255, 0.3);
    }
  `;
  document.head.appendChild(replyIndicatorStyle);
});

// Music Player Functionality
document.addEventListener('DOMContentLoaded', () => {
  try {
    const musicFolder = 'App Data/Music/';
    let currentTrackIndex = 0;
    let isPlaying = false;
    let audio = new Audio();
    let playlist = [];
    
    // Load playlist from Music folder
    async function loadPlaylist() {
      try {
        loadDemoPlaylist();
      } catch (error) {
        console.log('Error loading playlist:', error);
        loadDemoPlaylist();
      }
    }
    
    function loadDemoPlaylist() {
      playlist = [
        { title: 'Mai Agar', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777488119/Mai_Agar_h1pz74.mp3', vinyl: 'https://i.ibb.co/6c9rhFNC/Vinyl-Disc-1.png' },
        { title: 'Barish', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258311/Barish_capkfb.wav', vinyl: 'https://i.ibb.co/DHVdY1gW/Vinyl-Disc-15.png' },
        { title: 'Chale Aana', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258329/Chale_Aana_o51zfr.wav', vinyl: 'https://i.ibb.co/chz0dbFC/Vinyl-Disc-2.png' },
        { title: 'Dil Sambhal Jaa Zara', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258312/Dil_Sambhal_Jaa_Zara_fygbq2.mp4', vinyl: 'https://i.ibb.co/8g58r2m7/Vinyl-Disc-3.png' },
        { title: 'Ek Mulaqat', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258340/Ek_Mulaqat_rhckgg.wav', vinyl: 'https://i.ibb.co/3mJY20PL/Vinyl-Disc-4.png' },
        { title: 'Hua Hai Aj Pehli Bar', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258331/Hua_Hai_Aj_Pehli_Bar_ejfd1x.wav', vinyl: 'https://i.ibb.co/TqP3k8sv/Vinyl-Disc-5.png' },
        { title: 'Ishq De Fanyar', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258271/Ishq_De_Fanyar_nmayco.mp3', vinyl: 'https://i.ibb.co/ZzLYxTST/Vinyl-Disc-6.png' },
        { title: 'Khat', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258274/Khat_o7epcm.wav', vinyl: 'https://i.ibb.co/Zzg294GZ/Vinyl-Disc-7.png' },
        { title: 'Mai Fir Bhi Tumko Chahuga', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258308/Mai_Fir_Bhi_Tumko_Chahuga_yn8gl6.wav', vinyl: 'https://i.ibb.co/chy7Bq35/Vinyl-Disc-8.png' },
        { title: 'Mere Pas Tum Ho P1', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258433/Mere_Pas_Tum_Ho_P1_mfs2nk.wav', vinyl: 'https://i.ibb.co/TqR0SjC7/Vinyl-Disc-9.png' },
        { title: 'Mere Pas Tum Ho P2', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258442/Mere_Pas_Tum_Ho_P2_fhzmus.wav', vinyl: 'https://i.ibb.co/RxNmnD3/Vinyl-Disc-10.png' },
        { title: 'Mere Pas Tum Ho P3', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258431/Mere_Pas_Tum_Ho_P3_o105we.wav', vinyl: 'https://i.ibb.co/W73WyTv/Vinyl-Disc-11.png' },
        { title: 'Noor Mehal', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258318/Noor_Mehal_jjx1uy.wav', vinyl: 'https://i.ibb.co/MyWX3WY0/Vinyl-Disc-12.png' },
        { title: 'Ore Piya', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258322/Ore_Piya_wsmlz6.wav', vinyl: 'https://i.ibb.co/JRZrHZkW/Vinyl-Disc-13.png' },
        { title: 'Stare (ikka)', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258298/Sitare_ikka_zuiaq0.wav', vinyl: 'https://i.ibb.co/6RDTcx0x/Vinyl-Disc-14.png' },
        { title: 'Tere Jeha (Cute Version)', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258504/Cute_Version_Tere_Jeha_q4tiav.wav', vinyl: 'https://i.ibb.co/DHVdY1gW/Vinyl-Disc-15.png' },
        { title: 'Tere Jeha (Original)', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258504/Original_Tere_Jeha_z6cr0d.wav', vinyl: 'https://i.ibb.co/Y7MPGSJH/Vinyl-Disc-16.png' },
        { title: 'Tere Liye', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258295/Tere_Liye_wzdzrl.wav', vinyl: 'https://i.ibb.co/cXcDncL0/Vinyl-Disc-17.png' },
        { title: 'Tumhe Apna Banane Ka', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258304/Tumhe_Apna_Banane_Ka_caohpz.wav', vinyl: 'https://i.ibb.co/kVzj9rzJ/Vinyl-Disc-18.png' },
        { title: 'Ye Kya Baat Hai Ajki Chandni Me', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258315/Ye_Kya_Baat_Hai_Ajki_Chandni_Me_sfxmnp.wav', vinyl: 'https://i.ibb.co/qL7KdWT4/Vinyl-Disc-19.png' },
        { title: 'Zara Zara P1', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258580/Zara_Zara_P1_fmelx0.wav', vinyl: 'https://i.ibb.co/BVn2sW51/Vinyl-Disc-20.png' },
        { title: 'Zara Zara P2', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258583/Zara_Zara_P2_p5xbst.wav', vinyl: 'https://i.ibb.co/4ZmyS2Nb/Vinyl-Disc-21.png' },
        { title: 'Zara Zara P3', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777258584/Zara_Zara_P3_jr4bc9.wav', vinyl: 'https://i.ibb.co/5XJ82VtV/Vinyl-Disc-22.png' },
        { title: 'Dhun (in Rain)', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777370764/Dhun_in_rain_ujboj4.wav', vinyl: 'https://i.ibb.co/8g58r2m7/Vinyl-Disc-3.png' },
        { title: 'Bairan', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777370745/Bairan_farjko.wav', vinyl: 'https://i.ibb.co/Zzg294GZ/Vinyl-Disc-7.png' },
        { title: 'Aitbar Dendi Han', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777370744/Aitbar_Dendi_Han_z9ds0s.wav', vinyl: 'https://i.ibb.co/MyWX3WY0/Vinyl-Disc-12.png' },
        { title: 'Jhol', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777370884/Jhol_eceord.mp3', vinyl: 'https://i.ibb.co/DHVdY1gW/Vinyl-Disc-15.png' },
        { title: 'Hua Hai Aj Pehli Bar', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777370941/Hua_Hai_Aj_Pehli_Bar_knve1a.mp3', vinyl: 'https://i.ibb.co/kVzj9rzJ/Vinyl-Disc-18.png' },
        { title: 'Tu Jaane Na', artist: 'SAMAD', duration: '0:00', file: 'https://res.cloudinary.com/dwwj6cltj/video/upload/v1777370957/Tu_Jaane_Na_inghrm.wav', vinyl: 'https://i.ibb.co/TqP3k8sv/Vinyl-Disc-5.png' }
      ];
      fetchDurations();
      renderPlaylist();
    }
    
    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    function fetchDurations() {
      // Load all durations in parallel for faster loading
      const batchSize = 5; // Load 5 at a time to avoid overwhelming network
      let currentIndex = 0;

      function loadBatch() {
        const batch = [];
        for (let i = 0; i < batchSize && currentIndex < playlist.length; i++) {
          batch.push(currentIndex++);
        }

        if (batch.length === 0) return;

        const promises = batch.map(index => {
          return new Promise((resolve) => {
            const track = playlist[index];
            const tempAudio = new Audio();
            tempAudio.crossOrigin = 'anonymous';
            tempAudio.preload = 'metadata';
            tempAudio.src = track.file;

            const cleanup = () => {
              tempAudio.removeEventListener('loadedmetadata', onLoaded);
              tempAudio.removeEventListener('error', onError);
            };

            const onLoaded = () => {
              cleanup();
              if (!isNaN(tempAudio.duration) && tempAudio.duration > 0) {
                track.duration = formatTime(tempAudio.duration);
                const durationEl = document.querySelector(`.playlist-item-duration[data-index="${index}"]`);
                if (durationEl) {
                  durationEl.textContent = track.duration;
                }
              }
              resolve();
            };

            const onError = () => {
              cleanup();
              console.log(`Error loading duration for ${track.title}`);
              resolve();
            };

            tempAudio.addEventListener('loadedmetadata', onLoaded);
            tempAudio.addEventListener('error', onError);
            tempAudio.load();
          });
        });

        Promise.all(promises).then(() => {
          if (currentIndex < playlist.length) {
            setTimeout(loadBatch, 50); // Small delay between batches
          }
        });
      }

      loadBatch();
    }
    
    function renderPlaylist() {
      const playlistContainer = document.getElementById('playlistContainer');
      if (!playlistContainer) return;
      
      playlistContainer.innerHTML = '';
      
      playlist.forEach((track, index) => {
        const playlistItem = document.createElement('div');
        playlistItem.className = 'playlist-item';
        if (index === currentTrackIndex) {
          playlistItem.classList.add('active');
        }
        
        playlistItem.innerHTML = `
          <div class="playlist-item-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </div>
          <div class="playlist-item-info">
            <div class="playlist-item-title">${track.title}</div>
            <div class="playlist-item-artist">${track.artist}</div>
          </div>
          <div class="playlist-item-duration" data-index="${index}">${track.duration}</div>
        `;
        
        playlistItem.addEventListener('click', () => {
          if (track.file) {
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);
            playTrack();
            
            // Switch back to player view
            if (musicPlayerView && musicPlaylistView) {
              musicPlaylistView.classList.add('hidden');
              musicPlayerView.classList.remove('hidden');
            }
          } else {
            alert('Please add your audio files to the "App Data/Music/" folder and update the playlist in script.js');
          }
        });
        
        playlistContainer.appendChild(playlistItem);
      });
    }
    
    function loadTrack(index) {
      if (playlist[index] && playlist[index].file) {
        audio.src = playlist[index].file;
        const titleEl = document.getElementById('currentTrackTitle');
        const artistEl = document.getElementById('currentTrackArtist');
        const vinylImg = document.getElementById('vinylImage');
        if (titleEl) titleEl.textContent = playlist[index].title;
        if (artistEl) artistEl.textContent = playlist[index].artist;
        if (vinylImg && playlist[index].vinyl) {
          vinylImg.src = playlist[index].vinyl;
        }
        
        document.querySelectorAll('.playlist-item').forEach((item, i) => {
          item.classList.toggle('active', i === index);
        });
      }
    }
    
    function playTrack() {
      if (playlist[currentTrackIndex] && playlist[currentTrackIndex].file) {
        // Mute birthday audio when music plays
        const birthdayAudio = document.getElementById('birthdayAudio');
        const muteBtn = document.getElementById('muteBtn');
        const soundOnIcon = document.getElementById('soundOnIcon');
        const soundOffIcon = document.getElementById('soundOffIcon');
        
        if (birthdayAudio && !birthdayAudio.muted) {
          birthdayAudio.muted = true;
          if (soundOnIcon) soundOnIcon.classList.add('hidden');
          if (soundOffIcon) soundOffIcon.classList.remove('hidden');
        }
        
        audio.play();
        isPlaying = true;
        updatePlayPauseButton();
        
        // Start vinyl rotation
        const vinylDisc = document.querySelector('.vinyl-disc');
        if (vinylDisc) vinylDisc.classList.add('playing');
      }
    }
    
    function pauseTrack() {
      audio.pause();
      isPlaying = false;
      updatePlayPauseButton();
      
      // Stop vinyl rotation
      const vinylDisc = document.querySelector('.vinyl-disc');
      if (vinylDisc) vinylDisc.classList.remove('playing');
    }
    
    function updatePlayPauseButton() {
      const playIcon = document.querySelector('.play-icon');
      const pauseIcon = document.querySelector('.pause-icon');
      
      if (playIcon && pauseIcon) {
        if (isPlaying) {
          playIcon.style.display = 'none';
          pauseIcon.style.display = 'block';
        } else {
          playIcon.style.display = 'block';
          pauseIcon.style.display = 'none';
        }
      }
    }
    
    function formatTime(seconds) {
      if (isNaN(seconds)) return '0:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    function updateProgress() {
      const progress = (audio.currentTime / audio.duration) * 100;
      const progressFill = document.getElementById('progressFill');
      const currentTimeEl = document.getElementById('currentTime');
      const durationEl = document.getElementById('duration');
      
      if (progressFill) progressFill.style.width = `${progress}%`;
      if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
      if (durationEl) durationEl.textContent = formatTime(audio.duration);
    }
    
    // Event listeners
    const playPauseBtn = document.getElementById('playPauseBtn');
    if (playPauseBtn) {
      playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
          pauseTrack();
        } else {
          playTrack();
        }
      });
    }
    
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (isShuffle) {
          currentTrackIndex = Math.floor(Math.random() * playlist.length);
        } else {
          currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        }
        loadTrack(currentTrackIndex);
        if (isPlaying) playTrack();
      });
    }
    
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (isShuffle) {
          currentTrackIndex = Math.floor(Math.random() * playlist.length);
        } else {
          currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        }
        loadTrack(currentTrackIndex);
        if (isPlaying) playTrack();
      });
    }
    
    // Shuffle button
    const shuffleBtn = document.getElementById('shuffleBtn');
    let isShuffle = false;
    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', () => {
        isShuffle = !isShuffle;
        shuffleBtn.classList.toggle('active', isShuffle);
      });
    }
    
    // Playlist toggle button - switch to playlist view
    const playlistBtn = document.getElementById('playlistBtn');
    const musicPlayerView = document.getElementById('musicPlayerView');
    const musicPlaylistView = document.getElementById('musicPlaylistView');
    if (playlistBtn && musicPlayerView && musicPlaylistView) {
      playlistBtn.addEventListener('click', () => {
        musicPlayerView.classList.add('hidden');
        musicPlaylistView.classList.remove('hidden');
      });
    }
    
    // Playlist back button - switch to player view
    const playlistBackBtn = document.getElementById('playlistBackBtn');
    if (playlistBackBtn && musicPlayerView && musicPlaylistView) {
      playlistBackBtn.addEventListener('click', () => {
        musicPlaylistView.classList.add('hidden');
        musicPlayerView.classList.remove('hidden');
      });
    }
    
    // Swipe gesture for changing songs
    const musicCover = document.getElementById('musicCover');
    if (musicCover) {
      let touchStartX = 0;
      let touchEndX = 0;
      
      musicCover.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, false);
      
      musicCover.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, false);
      
      function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
          if (diff > 0) {
            // Swipe left - next song
            if (isShuffle) {
              currentTrackIndex = Math.floor(Math.random() * playlist.length);
            } else {
              currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
            }
            loadTrack(currentTrackIndex);
            if (isPlaying) playTrack();
          } else {
            // Swipe right - previous song
            if (isShuffle) {
              currentTrackIndex = Math.floor(Math.random() * playlist.length);
            } else {
              currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
            }
            loadTrack(currentTrackIndex);
            if (isPlaying) playTrack();
          }
        }
      }
    }
    
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
      progressBar.addEventListener('click', (e) => {
        const rect = e.target.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = clickX / width;
        audio.currentTime = percentage * audio.duration;
      });
    }
    
    audio.addEventListener('timeupdate', updateProgress);
    
    audio.addEventListener('ended', () => {
      currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
      loadTrack(currentTrackIndex);
      playTrack();
    });
    
    // Initialize playlist
    loadPlaylist();
    
    // Load first track by default
    if (playlist.length > 0) {
      loadTrack(0);
    }
  } catch (error) {
    console.log('Music player initialization error:', error);
  }
});
