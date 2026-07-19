// Curriculum data for the /learn hub.
// Each lesson has `videoId: null` until a real YouTube video ID is linked.
// Once you have a video, set videoId to the part after "v=" in the YouTube URL.

export const SUBJECTS = [
  {
    id: 'sat-math',
    label: 'SAT Math',
    shortLabel: 'SAT',
    intro: 'The four content domains tested on the Digital SAT, broken into the specific skills that show up on test day.',
    topics: [
      {
        id: 'algebra',
        domain: 'Domain 1',
        title: 'Algebra',
        blurb: 'Linear equations, inequalities, and systems — the foundation every other domain builds on.',
        lessons: [
          { id: 'linear-equations-one-var', title: 'Linear equations in one variable', videoId: null },
          { id: 'linear-equations-two-var', title: 'Linear equations in two variables', videoId: null },
          { id: 'systems-of-equations', title: 'Systems of linear equations', videoId: null },
          { id: 'linear-inequalities', title: 'Linear inequalities', videoId: null },
        ],
      },
      {
        id: 'advanced-math',
        domain: 'Domain 2',
        title: 'Advanced Math',
        blurb: 'Quadratics, exponentials, and nonlinear functions — where most score gaps above 650 come from.',
        lessons: [
          { id: 'quadratic-equations', title: 'Quadratic equations', videoId: null },
          { id: 'nonlinear-functions', title: 'Nonlinear functions', telegramPost: 'Nizomiddins_blog/270' },
          { id: 'exponential-expressions', title: 'Exponential expressions', videoId: null },
          { id: 'equivalent-expressions', title: 'Equivalent expressions', videoId: null },
        ],
      },
      {
        id: 'problem-solving-data',
        domain: 'Domain 3',
        title: 'Problem-Solving & Data Analysis',
        blurb: 'Ratios, percentages, and reading data from tables, scatterplots, and models.',
        lessons: [
          { id: 'ratios-rates-percentages', title: 'Ratios, rates, and percentages', videoId: null },
          { id: 'one-variable-data', title: 'One-variable data: distributions', videoId: null },
          { id: 'two-variable-data', title: 'Two-variable data: models and scatterplots', videoId: null },
          { id: 'probability', title: 'Probability and conditional probability', videoId: null },
          { id: 'webinar-word-problems', title: 'Webinar: solving word problems', telegramPost: 'Nizomiddins_blog/215' },
        ],
      },
      {
        id: 'geometry-trig',
        domain: 'Domain 4',
        title: 'Geometry & Trigonometry',
        blurb: 'Area, volume, lines, angles, triangles, and right-triangle trig.',
        lessons: [
          { id: 'area-volume', title: 'Area and volume', telegramPost: 'Nizomiddins_blog/256' },
          { id: 'lines-angles-triangles', title: 'Lines, angles, and triangles', telegramPost: 'Nizomiddins_blog/243' },
          { id: 'right-triangles-trig', title: 'Right triangles and trigonometry', telegramPost: 'Nizomiddins_blog/304' },
          { id: 'circles', title: 'Circles', videoId: null },
        ],
      },
    ],
  },
  {
    id: 'cambridge',
    label: 'Cambridge IGCSE & A-Level',
    shortLabel: 'Cambridge',
    intro: 'Syllabus-aligned coverage for IGCSE Math (0580/0606) and A-Level Math, mapped to exam board mark schemes.',
    topics: [
      {
        id: 'number',
        domain: 'Unit 1',
        title: 'Number',
        blurb: 'Types of number, standard form, surds, and working with ratio and proportion precisely.',
        lessons: [
          { id: 'types-of-number', title: 'Types of number and standard form', videoId: null },
          { id: 'surds', title: 'Surds and rationalizing denominators', videoId: null },
          { id: 'ratio-proportion', title: 'Ratio and proportion', videoId: null },
        ],
      },
      {
        id: 'algebra-graphs',
        domain: 'Unit 2',
        title: 'Algebra & Graphs',
        blurb: 'Manipulating expressions, solving equations, and sketching functions the way mark schemes expect.',
        lessons: [
          { id: 'algebraic-manipulation', title: 'Algebraic manipulation', videoId: null },
          { id: 'solving-equations', title: 'Solving linear and quadratic equations', videoId: null },
          { id: 'sequences', title: 'Sequences', videoId: null },
          { id: 'graphs-of-functions', title: 'Graphs of functions', telegramPost: 'Nizomiddins_blog/270' },
        ],
      },
      {
        id: 'coordinate-geometry',
        domain: 'Unit 3',
        title: 'Coordinate Geometry',
        blurb: 'Gradients, midpoints, and equations of lines on the coordinate plane.',
        lessons: [
          { id: 'gradients-lines', title: 'Gradients and equations of straight lines', videoId: null },
          { id: 'midpoints-distance', title: 'Midpoints and distance between points', videoId: null },
        ],
      },
      {
        id: 'geometry',
        domain: 'Unit 4',
        title: 'Geometry',
        blurb: 'Angle properties, similarity, congruence, and circle theorems.',
        lessons: [
          { id: 'angle-properties', title: 'Angle properties of shapes', telegramPost: 'Nizomiddins_blog/243' },
          { id: 'similarity-congruence', title: 'Similarity and congruence', videoId: null },
          { id: 'circle-theorems', title: 'Circle theorems', videoId: null },
        ],
      },
      {
        id: 'mensuration',
        domain: 'Unit 5',
        title: 'Mensuration',
        blurb: 'Perimeter, area, and volume for 2D and 3D shapes, including compound figures.',
        lessons: [
          { id: 'perimeter-area', title: 'Perimeter and area', videoId: null },
          { id: 'volume-surface-area', title: 'Volume and surface area', telegramPost: 'Nizomiddins_blog/256' },
        ],
      },
      {
        id: 'trigonometry',
        domain: 'Unit 6',
        title: 'Trigonometry',
        blurb: 'Right-angled and non-right-angled trigonometry, including the sine and cosine rules.',
        lessons: [
          { id: 'right-angled-trig', title: 'Right-angled trigonometry', telegramPost: 'Nizomiddins_blog/304' },
          { id: 'sine-cosine-rules', title: 'Sine rule, cosine rule, and area of a triangle', videoId: null },
        ],
      },
      {
        id: 'statistics-probability',
        domain: 'Unit 7',
        title: 'Statistics & Probability',
        blurb: 'Averages, spread, representing data, and calculating probability of combined events.',
        lessons: [
          { id: 'averages-spread', title: 'Averages and measures of spread', videoId: null },
          { id: 'representing-data', title: 'Representing data', videoId: null },
          { id: 'probability-combined-events', title: 'Probability of combined events', videoId: null },
        ],
      },
    ],
  },
]

// A lesson can have ONE of: videoId (YouTube), loomId (Loom), or telegramPost (a video
// uploaded natively to a Telegram channel, embedded via Telegram's official widget).
// YouTube:  videoId: 'dQw4w9WgXcQ'   (the part after "v=" in the video URL)
// Loom:     loomId: '8dbfd6942f954ee2970dd735c0cbd410'  (the part after "/share/" in the Loom link)
// Telegram: telegramPost: 'Nizomiddins_blog/256'  (channel/postNumber, from the post's URL)

export function hasVideo(lesson) {
  return Boolean(lesson?.videoId || lesson?.loomId || lesson?.telegramPost)
}

export function getEmbedUrl(lesson) {
  if (!lesson) return null
  if (lesson.loomId) return `https://www.loom.com/embed/${lesson.loomId}`
  if (lesson.videoId) return `https://www.youtube.com/embed/${lesson.videoId}`
  return null
}

export function getSubject(subjectId) {
  return SUBJECTS.find((s) => s.id === subjectId)
}

export function getTopic(subjectId, topicId) {
  const subject = getSubject(subjectId)
  if (!subject) return null
  const topic = subject.topics.find((t) => t.id === topicId)
  if (!topic) return null
  return { subject, topic }
}
