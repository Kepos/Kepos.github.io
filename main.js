let newInsight = () => {
  let textField = document.getElementById('insight');
  let dateField = document.getElementById('date');

  textField.innerHTML =
    insights[randomNumbers[daysPassed() % randomNumbers.length]].quote;
  dateField.innerHTML =
    '' + new Date().getDate() + '/' + (new Date().getMonth() + 1);
};

function daysPassed() {
  // Define the target date (April 6th, 2025)
  const targetDate = new Date('2025-04-06');

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const timeDifference = currentDate - targetDate;

  // Convert milliseconds to days
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return days;
}

const randomNumbers = [
  21, 15, 9, 5, 26, 11, 23, 34, 0, 37, 31, 33, 7, 17, 3, 30, 6, 35, 12, 16, 4,
  28, 10, 14, 18, 25, 27, 36, 20, 19, 8, 22, 1, 13, 2, 29, 32, 24,
];

let insights = [
  {
    quote:
      'Well of course it could be done! Anything could be done, but it only is done if it’s done!',
    author: 'JS',
  },
  {
    quote:
      'Ob man jetzt große Lust hat oder nicht oder große Erfolgschancen sieht oder nicht, manche Dinge im Leben muss man einfach anpacken, einfach ausprobieren (Sometimes you just have to take a shot at something). Erfolg oder Niederlage gibt am Ende so oder so eine Belohnung ab, hauptsache man kann sagen dass man sich alles (wichtige) mal angeschaut hat',
    author: 'JS',
  },
  {
    quote:
      'As an adult, you have to take responsibility for your life (bc your parents don’t schedule your whole life anymore: friends, sport groups, vacations, things to learn, studies, nice things, shopping, etc. You have to plan the things yourself for a good life. And the phone is strongly distracting from that, so turn it off. Life is like a bicycle, it doesn’t move unless you’re pedaling.',
    link: 'https://www.instagram.com/reel/DGR6U4XRbf-/?igsh=MXh5ZnY3eXd5NHZrOQ==',
  },
  {
    quote:
      'Laying out all your options: think about the thing you least want to do. Its probably the right thing to do.',
    author: 'SC',
  },
  {
    quote:
      'Die meisten von uns wissen nie was wir mit unserem Leben anstellen sollen, aber am Ende landet man dann doch da wo man hingehört (ergo einfach machen, keiner hat wirklich nen Plan, Fake it till you make it)',
  },
  {
    quote:
      'Only regret in life: not expressing yourself more! Say what you want, do what you want, ask someone out, start that business or band. Be yourself.',
  },
  {
    quote:
      'Positives Denken! Führt zu neuen Pfaden im Gehirn, alte abgetretene, negative Pfade verschwinden. Das Gehirn unterscheidet nicht zwischen Realität und Vorstellung. Daher: Visualisierung und Fokus auf positives Denken!',
  },
  {
    quote:
      '„Im making up shit any way“: (IG reel). Anstatt mir dauernd zu überlegen was andere schlechtes über mich denken könnten, kann ich auch einfach denken dass mich alle geil finden! Und dass alles super ist und alle mich lieben & feiern! Weil ich mir ja so oder so das nur in meinem Kopf ausmale, da kann ich auch einfach positiv ausmalen!',
  },
  {
    quote:
      'You do not get what you want, you get what you believe: If you believe in something, the brain actively (or subconsciously) looks for ways to make it work → Placebo/Nocebo effect. Therefore: Believe in yourself, believe in your success, manifest a happy life → it will happen!',
  },
  {
    quote:
      'Inspiration is Key: Bei anderen Menschen abschauen was man cool findet und sich somit sein Leben und seine Persönlichkeit zusammenbasteln. Daher: Biografien lesen, Menschen treffen, offen sein und sich gerne Dinge abschauen!',
  },
  {
    quote:
      'Cycle of Motivation: Action leads to Motivation! Kleine Schritte gehen die mich weiterbringen. Mir anschließend selbst auf die Schulter klopfen und wirklich zelebrieren was ich geschafft habe (auch mit Belohnungen). Sit with that feeling of accomplishment! Belohnungen für schlechtes Verhalten entziehen!',
    link: 'https://www.youtube.com/watch?v=1gzVhnT3pB4',
  },
  {
    quote:
      'Man muss & kann sich nicht alles reinziehen (Serien, Orte, Filme), aber es ist fein wenn man ein paar Dinge im Leben gefunden hat, die einem taugen! Gedanken gehabt bei: Rick Steve‘s Europe North England: much enjoyable!',
  },
  {
    quote:
      "Rumination is essentially negative self-talk—a drag on your self-esteem shaped by constantly feeding yourself negative messages about your life and your ability to cope. Want to flip the script? Try positive self-talk. It's a way of speaking to yourself like your best friend would—with optimism and encouragement. You affirm that you're capable and ready for any task at hand.",
  },
  {
    quote:
      'Quentin Detest Fest: (Joe Rogan): Once a month I would lay out everything that I am doing wrong or that I’m not doing. Then the last 2 hours I would figure out how to solve that.',
  },
  {
    quote:
      '[Vera Birkenbiehl Gleichnis](https://youtu.be/efx4iC-PHuY?si=3PtWPZtS-lEgtnaL&t=404): “Und, was hast du mit deinem Pfund (aka mit deinen Talenten) angestellt?” Was hast du mit deinem genetischen Potential angestellt? Hast du damit gewuchert? Hast du es mit größter Hingabe versucht umzusetzen?',
  },
  {
    quote:
      'just do *something*: Das Leben wird reicher je mehr Dinge man tut, also je mehr man das Leben auskostet und auslebt. Notizen bringen einen nicht wirklich weiter, wenn man nicht in Aktion tritt. Lieber machen als überlegen. Ob die Lust da ist oder nicht: Entschlossenheit üben / simulieren und Dinge planen und dann machen, that’s it.',
  },
  {
    quote:
      'Monk Mode for a better life & clear vision. Every Day: 30 minutes workout, 10 minutes meditation, no al/drugs, one habit of your choice (reading/posting a video)',
  },
  {
    quote:
      'Ebenfalls in diesem Sinne: Versuch doch einfach mal glücklich zu sein! Aktiv positiv denken! Wenn ich ein unbeschriebenes Blatt wäre, gäbe es ja auch keinen Grund unglücklich zu sein. Also versuche dich frei zu machen von negativen Gedanken und genieße einfach das Leben wie es geschieht! ❤️',
  },
  {
    quote:
      'Fake it till you make it: Mach die Dinge die der „coole Tightus“ machen würde. Verhalte dich so als wärest du dieser Typ. Wenn du das lange genug durchziehst, verändert sich ja vielleicht was',
  },
  {
    quote:
      'Only thing I need: STRUCTURE! (Western Wednesday, 10 Uhr Sunday Compass Hour, Friends Friday, etc…)',
  },
  {
    quote:
      'Andere Menschen tuen Dinge weil sie Lust drauf haben. Ich dagegen bin zu gemütlich / depressiv / unorientiert / lost um Dinge zu tun. Daher muss ich mich tatsächlich sehr aktiv darum bemühen irgendwas zu tun, um Momentum aufzubauen → Struktur. Planung, Überblick, Reminder 👍',
  },
  {
    quote: 'PUT MORE EFFORT IN YOUR LIFE!!!',
  },
  {
    quote:
      'Das Leben ist kompliziert und man kann einfach daran verzweifeln (vor allem wenn man so ein schlauer Mensch & Grübler ist wie ich) aber ich kann ja auch versuchen mir selbst zu beweisen dass ich es trotzdem wuppen kann. Morgens aufstehen und wissen: ich kann was, ich will was, ich bin fähig und ich werde Erfolg haben!',
  },
  {
    quote: 'Give that boy in the mirror some love',
  },
  {
    quote:
      'Eigentlich will ich ja einige Dinge (wandern, Western anschauen, Skiurlaub, Videoformate), aber warum tue ich sie nicht? (Evtl. Einfach fehlende Struktur)',
  },
  {
    quote: 'Kleine Erfolge abfeiern → Dopamin → Gewinnspirale',
  },
  {
    quote:
      '„Sandwich-Kinder sind meistens sehr mutig“ - Anke. Würde mich auch als mutig bezeichnen!! Muss was draus machen!!',
  },
  {
    quote:
      'Ich funktioniere nur mit guter Struktur, siehe Schule, Uniprojekte, Geschenke, etc: also, woher bekomme ich Struktur? Entweder von außen (Uni/Arbeit/andere) oder von innen (eigene funktionierende Struktur: Deadlines, Pläne, Routinen, etc)',
  },
  {
    quote:
      'RANDOM SACHEN MACHEN: Haare selber schneiden, irgendwo hinfahren, ein Spiel coden, Kurse machen, Menschen besuchen, etc. pp',
  },
  {
    quote:
      'Problem: ich krieg sehr wenig hin. Lösung: ich muss handeln. und ich muss immer wissen dass ich handeln muss.',
  },
  {
    quote: 'Ich sähe geil aus mit Mukkis, nicer Frise und blauem hoodie',
  },
  {
    quote:
      'Ich musste mich bisher immer verstecken. Aber das will ich nicht mehr. Ich will mich auch sozial ausleben. Und das schaffe ich indem ich etwas tue was ich cool oder spannend finde. Und das könnte sein: Einen Podcast, Drehbücher, TV Show, Lehren, App Design?',
  },
  {
    quote:
      'Ich will Spaß daran finden mich selbst zu organisieren, mich mehr um mich kümmern zB Aussehen, Essen, Fitness, Vorankommen im Leben',
  },
  {
    quote: 'ICH WILL EIN BESSERES LEBEN! ICH BIN ES MIR SELBST WERT!',
  },
  {
    quote:
      'Sich selber kleine Missionen / Aufgaben setzen: Holzarbeiten die man sich selbst (als Hobby) aufgibt und sie quasi machen „muss“ weil man im Flow ist: nice! Hobbies aufnehmen!',
  },
  {
    quote:
      'JETZT: Die schönen Dinge muss man JETZT machen, nicht ewig aufschieben. Leben heißt, die nicen Dinge so früh und bald wie möglich zu machen, damit sie nicht irgendwann unter den Tisch fallen. Also: Lieblingsurlaub JETZT, Lieblingshobby JETZT',
  },
  {
    quote:
      'Man kann im Leben eh nur so wenig machen und erleben, dass man gar nicht darüber nachdenken soll was man alles nicht machen kann. Geh erstmal davon aus dass du nichts erleben kannst und freue dich über jede Sache die du doch mitnehmen kannst. Versuche trotzdem diese coolen Sachen zu erleben und erfreue dich sehr daran!',
  },
  {
    quote: 'MOTIVATION ❌ DISZIPLIN ✅',
  },
  {
    quote:
      'Look through the lens of possibilities: if you change how you look in the world, the world looks different to you. Stop creating a negative mindset and look at possibilities and positivity in the world and in your life.',
    author: 'James Doty',
    link: 'https://www.instagram.com/reel/DBgqVE2vUNq/?igsh=ZzA5MjgyNjc3bnJ0',
  },
];

newInsight();
