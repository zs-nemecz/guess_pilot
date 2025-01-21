/************** 
 * Guess *
 **************/


// store info about the experiment session:
let expName = 'guess';  // from the Builder filename that created this script
let expInfo = {
    'ID-Nummer': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'Alter': '',
    'Geschlecht (optional)': '',
};

// Start code blocks for 'Before Experiment'

function getRandomLetters(targetLetter) {
    // Az elérhető karakterek listája
    const characters = "abcdefghjklmnoprstuvz".split("");

    // Véletlenszerűen választunk 3 karaktert, amelyek nem egyeznek a megadott célkarakterrel
    let randomLetters = [];
    while (randomLetters.length < 3) {
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        if (randomChar !== targetLetter && !randomLetters.includes(randomChar)) {
            randomLetters.push(randomChar);
        }
    }

    // Hozzáadjuk a célkaraktert a listához
    randomLetters.push(targetLetter);

    // A karakterek sorrendjének összekeverése
    for (let i = randomLetters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomLetters[i], randomLetters[j]] = [randomLetters[j], randomLetters[i]];
    }

    return randomLetters;
}


function generateRecallText(letters) {
    let recallText = "Der letzte Buchstabe des Wortes:\n";
    recallText += `1) ${letters[0]}        `;
    recallText += `2) ${letters[1]}        `;
    recallText += `3) ${letters[2]}        `;
    recallText += `4) ${letters[3]}`;
    return recallText;
}
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
const guess_conditionsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(guess_conditionsLoopBegin(guess_conditionsLoopScheduler));
flowScheduler.add(guess_conditionsLoopScheduler);
flowScheduler.add(guess_conditionsLoopEnd);


flowScheduler.add(instructions1RoutineBegin());
flowScheduler.add(instructions1RoutineEachFrame());
flowScheduler.add(instructions1RoutineEnd());
flowScheduler.add(instructions2RoutineBegin());
flowScheduler.add(instructions2RoutineEachFrame());
flowScheduler.add(instructions2RoutineEnd());
flowScheduler.add(instructions3RoutineBegin());
flowScheduler.add(instructions3RoutineEachFrame());
flowScheduler.add(instructions3RoutineEnd());
flowScheduler.add(instructions4RoutineBegin());
flowScheduler.add(instructions4RoutineEachFrame());
flowScheduler.add(instructions4RoutineEnd());
flowScheduler.add(instructions5RoutineBegin());
flowScheduler.add(instructions5RoutineEachFrame());
flowScheduler.add(instructions5RoutineEnd());
const practice_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_trialsLoopBegin(practice_trialsLoopScheduler));
flowScheduler.add(practice_trialsLoopScheduler);
flowScheduler.add(practice_trialsLoopEnd);






flowScheduler.add(start_taskRoutineBegin());
flowScheduler.add(start_taskRoutineEachFrame());
flowScheduler.add(start_taskRoutineEnd());
const learning_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(learning_trialsLoopBegin(learning_trialsLoopScheduler));
flowScheduler.add(learning_trialsLoopScheduler);
flowScheduler.add(learning_trialsLoopEnd);






flowScheduler.add(end_part1RoutineBegin());
flowScheduler.add(end_part1RoutineEachFrame());
flowScheduler.add(end_part1RoutineEnd());
flowScheduler.add(instructions_recall1RoutineBegin());
flowScheduler.add(instructions_recall1RoutineEachFrame());
flowScheduler.add(instructions_recall1RoutineEnd());
flowScheduler.add(instructions_recall2RoutineBegin());
flowScheduler.add(instructions_recall2RoutineEachFrame());
flowScheduler.add(instructions_recall2RoutineEnd());
const test_practice_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(test_practice_trialsLoopBegin(test_practice_trialsLoopScheduler));
flowScheduler.add(test_practice_trialsLoopScheduler);
flowScheduler.add(test_practice_trialsLoopEnd);






flowScheduler.add(start_taskRoutineBegin());
flowScheduler.add(start_taskRoutineEachFrame());
flowScheduler.add(start_taskRoutineEnd());
const test_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(test_trialsLoopBegin(test_trialsLoopScheduler));
flowScheduler.add(test_trialsLoopScheduler);
flowScheduler.add(test_trialsLoopEnd);






flowScheduler.add(end_part2RoutineBegin());
flowScheduler.add(end_part2RoutineEachFrame());
flowScheduler.add(end_part2RoutineEnd());
flowScheduler.add(instructions_semantic_mapping1RoutineBegin());
flowScheduler.add(instructions_semantic_mapping1RoutineEachFrame());
flowScheduler.add(instructions_semantic_mapping1RoutineEnd());
flowScheduler.add(instructions_semantic_mapping2RoutineBegin());
flowScheduler.add(instructions_semantic_mapping2RoutineEachFrame());
flowScheduler.add(instructions_semantic_mapping2RoutineEnd());
const semantic_mappingLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(semantic_mappingLoopBegin(semantic_mappingLoopScheduler));
flowScheduler.add(semantic_mappingLoopScheduler);
flowScheduler.add(semantic_mappingLoopEnd);




flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'guess_trial_randomization.xlsx', 'path': 'guess_trial_randomization.xlsx'},
    {'name': 'practice.xlsx', 'path': 'practice.xlsx'},
    {'name': 'cue_target_pairs.xlsx', 'path': 'cue_target_pairs.xlsx'},
    {'name': 'practice.xlsx', 'path': 'practice.xlsx'},
    {'name': 'cue_target_pairs.xlsx', 'path': 'cue_target_pairs.xlsx'},
    {'name': 'targets_mediators.xlsx', 'path': 'targets_mediators.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://regensburg.sona-systems.com/webstudy_credit.aspx?experiment_id=1093&credit_token=3ab017d6ceb04173ba128bd636423369&survey_code=" + expInfo[‘participant’]', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["ID-Nummer"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcome_text;
var load_guess_conditionsClock;
var guess_list;
var practice_list;
var instructions1Clock;
var instructions1_text;
var instruction1_key;
var instructions2Clock;
var instructions2_text;
var instruction2_key;
var instructions3Clock;
var instructions3_text;
var instruction3_key;
var instructions4Clock;
var instructions4_text;
var instruction4_key;
var instructions5Clock;
var instructions5_text;
var instruction5_key;
var iti_learning_practiceClock;
var iti_practice_blank;
var guessClock;
var trial_dur;
var dash_stim_guessing;
var cue_stim_guessing;
var guess_stim;
var end_guess;
var guess_responseClock;
var dash_stim_guessing_resp;
var cue_stim_guessing_resp;
var guess_stim_resp;
var guess_question;
var guess_reached;
var feedback_guessClock;
var no_response_feedback;
var encodeClock;
var dash_stim_learning;
var cue_stim_learning;
var target_stim;
var end_encoding;
var cue_types;
var target_types;
var start_taskClock;
var start_task_text;
var start_key;
var iti_learningClock;
var iti_learning_blank;
var task_breakClock;
var task_break_text;
var task_break_resp;
var end_part1Clock;
var end_part1_key;
var end_part1_text;
var instructions_recall1Clock;
var recall_instructions1_text;
var recall_instructions1_key;
var instructions_recall2Clock;
var recall_instructions1_text_2;
var recall_instructions1_key_2;
var itiClock;
var iti_blank;
var cued_recallClock;
var cue_stim_recall;
var dash_stim_recall;
var qmark_target;
var end_cued_recall;
var recall_responseClock;
var dash_stim_recall_resp;
var cue_stim_recall_resp;
var recall_stim_resp;
var recall_question;
var recall_reached;
var recall_selectClock;
var dash_stim_recall_select;
var cue_stim_recall_select;
var recall_stim_select;
var recall_question_select;
var recall_selection;
var recall_feedbackClock;
var dash_stim_feedback;
var cue_stim_feedback;
var target_stim_feedback;
var end_feedback;
var recall_feedback1;
var recall_feedback2;
var end_part2Clock;
var end_part2_key;
var end_part2_text;
var instructions_semantic_mapping1Clock;
var sm_instructions1_text;
var sm_instructions1_key;
var instructions_semantic_mapping2Clock;
var sm_instructions2_text;
var sm_instructions2_key;
var itemClock;
var semantic_map_item;
var living_nonliving;
var end_mapping;
var living_nonliving_text;
var mapping_breakClock;
var break_text;
var break_resp;
var mapping_trial;
var thanksClock;
var thanks_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: 'Willkommen zum Ratespiel Experiment!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from experiment_setup
  //Hide mouse
  document.body.style.cursor='none';
  // Initialize components for Routine "load_guess_conditions"
  load_guess_conditionsClock = new util.Clock();
  // Run 'Begin Experiment' code from load_guess_list
  guess_list = [];
  practice_list = ["Read", "Guess", "Guess", "Read"];
  
  // Initialize components for Routine "instructions1"
  instructions1Clock = new util.Clock();
  instructions1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions1_text',
    text: 'Teil 1\n\nIm ersten Teil des Experiments werden Ihnen Wortpaare auf dem Bildschirm angezeigt.\n\nZum Beispiel:\n\nComputer - Tastatur\n\nIhre Aufgabe ist es, sich so viele Wortpaare wie möglich einzuprägen.\n\nDrücken Sie die LEERTASTE, um fortzufahren.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction1_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions2"
  instructions2Clock = new util.Clock();
  instructions2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions2_text',
    text: 'Manchmal wird Ihnen ein einzelnes Wort auf dem Bildschirm angezeigt, bevor Sie das gesamte Wortpaar sehen, und Sie müssen raten, was das andere Wort sein könnte.\n\nZum Beispiel:\n\nComputer - ?\n\nDrücken Sie die LEERTASTE, um fortzufahren.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction2_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions3"
  instructions3Clock = new util.Clock();
  instructions3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions3_text',
    text: 'Raten Sie nicht laut, sondern versuchen Sie möglichst viele Assoziationen zum linken Wort leise in Ihrem Kopf zu generieren.\n\nZum Beispiel könnten Ihnen zum Wort "Sommerferien" folgende Assoziationen einfallen: Urlaub, Strand, Reisen, Ferienjob, Eis und so weiter.\n\nDrücken Sie die LEERTASTE, um fortzufahren.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction3_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions4"
  instructions4Clock = new util.Clock();
  instructions4_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions4_text',
    text: 'Sie haben 3 Sekunden Zeit, um nach dem Erscheinen des linken Wortes mindestens einen stillen Rateversuch zu machen. Danach müssen Sie angeben, ob Sie einen oder mehrere Rateversuche machen konnten, indem Sie die Tasten F, G oder H drücken.\n\nF) Keinen Rateversuch generiert G) Einen Rateversuch generiert H) Mehr als einen Rateversuch generiert\n\nDrücken Sie die LEERTASTE, um fortzufahren.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction4_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions5"
  instructions5Clock = new util.Clock();
  instructions5_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions5_text',
    text: 'Zusammenfassung:\nIhre Aufgabe ist es, so viele der auf dem Bildschirm präsentierten Wortpaare wie möglich zu lernen.\n\nManchmal wird Ihnen zunächst nur ein einzelnes Wort angezeigt, und Sie müssen raten, was das zugehörige Wortpaar sein könnte. Drücken Sie F, G oder H, um anzugeben, ob Sie einen Rateversuch gemacht haben.\n\nVor dem Experiment werden Sie die Aufgabe üben.\n\nDrücken Sie die LEERTASTE, um mit der Übung zu beginnen.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instruction5_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "iti_learning_practice"
  iti_learning_practiceClock = new util.Clock();
  iti_practice_blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'iti_practice_blank',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "guess"
  guessClock = new util.Clock();
  // Run 'Begin Experiment' code from skip_guess
  trial_dur = 0;
  
  dash_stim_guessing = new visual.TextStim({
    win: psychoJS.window,
    name: 'dash_stim_guessing',
    text: '-',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  cue_stim_guessing = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_stim_guessing',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  guess_stim = new visual.TextStim({
    win: psychoJS.window,
    name: 'guess_stim',
    text: '?',
    font: 'Arial',
    units: undefined, 
    pos: [0.2, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  end_guess = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "guess_response"
  guess_responseClock = new util.Clock();
  dash_stim_guessing_resp = new visual.TextStim({
    win: psychoJS.window,
    name: 'dash_stim_guessing_resp',
    text: '-',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  cue_stim_guessing_resp = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_stim_guessing_resp',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  guess_stim_resp = new visual.TextStim({
    win: psychoJS.window,
    name: 'guess_stim_resp',
    text: '?',
    font: 'Arial',
    units: undefined, 
    pos: [0.2, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  guess_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'guess_question',
    text: 'Wie viele Rateversuche haben Sie gemacht?\n\nF) 0        G) 1        H) Mehr',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  guess_reached = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback_guess"
  feedback_guessClock = new util.Clock();
  no_response_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'no_response_feedback',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "encode"
  encodeClock = new util.Clock();
  dash_stim_learning = new visual.TextStim({
    win: psychoJS.window,
    name: 'dash_stim_learning',
    text: '-',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  cue_stim_learning = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_stim_learning',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  target_stim = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_stim',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.2, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  end_encoding = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from save_learning_trial_type
  cue_types = {};
  target_types = {};
  
  // Initialize components for Routine "start_task"
  start_taskClock = new util.Clock();
  start_task_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_task_text',
    text: 'Jetzt beginnt die Aufgabe. Sie erhalten keine Rückmeldungen mehr.\n\nDrücken Sie die LEERTASTE, wenn Sie bereit sind zu starten.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  start_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "iti_learning"
  iti_learningClock = new util.Clock();
  iti_learning_blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'iti_learning_blank',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "task_break"
  task_breakClock = new util.Clock();
  task_break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_break_text',
    text: 'Pause. Drücken Sie die LEERTASTE, um fortzufahren.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  task_break_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_part1"
  end_part1Clock = new util.Clock();
  end_part1_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  end_part1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_part1_text',
    text: 'Sie haben den ersten Teil des Experiments abgeschlossen!\n\nMachen Sie eine 5-minütige Pause, bevor Sie fortfahren.\n\nDrücken Sie die LEERTASTE, um fortzufahren.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "instructions_recall1"
  instructions_recall1Clock = new util.Clock();
  recall_instructions1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_instructions1_text',
    text: 'Im nächsten Teil des Experiments müssen Sie das Wortpaar zu jedem auf dem Bildschirm angezeigten Wort abrufen.\n\nVersuchen Sie, das Wort (3 Sekunden) abzurufen, und geben Sie dann an, ob Sie sich an das Wort erinnern, indem Sie die Tasten F (Kann mich nicht erinnern) und G (Kann mich erinnern) verwenden.\n\nDrücken Sie die LEERTASTE, um fortzufahren.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  recall_instructions1_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_recall2"
  instructions_recall2Clock = new util.Clock();
  recall_instructions1_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_instructions1_text_2',
    text: 'Wenn Sie sich an das Wort erinnern können, fragen wir Sie nach dem letzten Buchstaben des Wortes. Sie können aus 4 Optionen wählen (Tasten 1-4).\n\nBevor Sie starten, üben Sie die Aufgabe.\n\nDrücken Sie die LEERTASTE, um mit der Übung zu beginnen.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  recall_instructions1_key_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "iti"
  itiClock = new util.Clock();
  iti_blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'iti_blank',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "cued_recall"
  cued_recallClock = new util.Clock();
  cue_stim_recall = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_stim_recall',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  dash_stim_recall = new visual.TextStim({
    win: psychoJS.window,
    name: 'dash_stim_recall',
    text: '-',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  qmark_target = new visual.TextStim({
    win: psychoJS.window,
    name: 'qmark_target',
    text: '?',
    font: 'Arial',
    units: undefined, 
    pos: [0.2, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  end_cued_recall = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall_response"
  recall_responseClock = new util.Clock();
  dash_stim_recall_resp = new visual.TextStim({
    win: psychoJS.window,
    name: 'dash_stim_recall_resp',
    text: '-',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  cue_stim_recall_resp = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_stim_recall_resp',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  recall_stim_resp = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_stim_resp',
    text: '?',
    font: 'Arial',
    units: undefined, 
    pos: [0.2, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  recall_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_question',
    text: 'Können Sie sich an das Wortpaar erinnern?\n\nF) Nein        G) Ja',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  recall_reached = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall_select"
  recall_selectClock = new util.Clock();
  dash_stim_recall_select = new visual.TextStim({
    win: psychoJS.window,
    name: 'dash_stim_recall_select',
    text: '-',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  cue_stim_recall_select = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_stim_recall_select',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  recall_stim_select = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_stim_select',
    text: '?',
    font: 'Arial',
    units: undefined, 
    pos: [0.2, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  recall_question_select = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_question_select',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  recall_selection = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recall_feedback"
  recall_feedbackClock = new util.Clock();
  dash_stim_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'dash_stim_feedback',
    text: '-',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  cue_stim_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_stim_feedback',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  target_stim_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_stim_feedback',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.2, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  end_feedback = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from save_learning_trial_type_2
  cue_types = {};
  target_types = {};
  
  recall_feedback1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_feedback1',
    text: 'Der letzte Buchstabe:',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  recall_feedback2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_feedback2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "end_part2"
  end_part2Clock = new util.Clock();
  end_part2_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  end_part2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_part2_text',
    text: 'Sie haben den zweiten Teil des Experiments abgeschlossen!\n\nMachen Sie eine 5-minütige Pause, bevor Sie fortfahren.\n\nDrücken Sie die LEERTASTE, um fortzufahren.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "instructions_semantic_mapping1"
  instructions_semantic_mapping1Clock = new util.Clock();
  sm_instructions1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'sm_instructions1_text',
    text: 'Im letzten Teil des Experiments wird Ihnen eine Liste von Wörtern jeweils einzeln auf dem Bildschirm präsentiert. Sie müssen entscheiden, ob das Wort etwas Lebendiges oder Nicht-Lebendiges bezeichnet.\n\nDrücken Sie die LEERTASTE, um fortzufahren.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sm_instructions1_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_semantic_mapping2"
  instructions_semantic_mapping2Clock = new util.Clock();
  sm_instructions2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'sm_instructions2_text',
    text: 'Bei manchen Wörtern ist es schwieriger, diese Entscheidung zu treffen als bei anderen. Es gibt nicht immer eine richtige oder falsche Antwort. Verlassen Sie sich auf Ihre Intuition, die Entscheidung liegt bei Ihnen!\n\nGeben Sie Ihre Antwort mit den Tasten F / G an.\n\nDrücken Sie die LEERTASTE, um die Aufgabe zu starten.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sm_instructions2_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "item"
  itemClock = new util.Clock();
  semantic_map_item = new visual.TextStim({
    win: psychoJS.window,
    name: 'semantic_map_item',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  living_nonliving = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  end_mapping = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  living_nonliving_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'living_nonliving_text',
    text: 'F) Lebendig        G) Nicht lebendig',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "mapping_break"
  mapping_breakClock = new util.Clock();
  break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_text',
    text: 'Pause. Drücken Sie die LEERTASTE, um fortzufahren.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  break_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from reset_counter
  mapping_trial = 0;
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thanks_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks_text',
    text: 'Das ist das Ende des Experiments.\n\nVielen Dank!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var welcomeMaxDurationReached;
var welcomeMaxDuration;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    welcomeClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    welcomeMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('welcome.started', globalClock.getTime());
    welcomeMaxDuration = null
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcome_text);
    
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_text* updates
    if (t >= 0.0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (welcome_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      welcome_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    welcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcome.stopped', globalClock.getTime());
    if (welcomeMaxDurationReached) {
        welcomeClock.add(welcomeMaxDuration);
    } else {
        welcomeClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var guess_conditions;
function guess_conditionsLoopBegin(guess_conditionsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    guess_conditions = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'guess_trial_randomization.xlsx',
      seed: undefined, name: 'guess_conditions'
    });
    psychoJS.experiment.addLoop(guess_conditions); // add the loop to the experiment
    currentLoop = guess_conditions;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    guess_conditions.forEach(function() {
      snapshot = guess_conditions.getSnapshot();
    
      guess_conditionsLoopScheduler.add(importConditions(snapshot));
      guess_conditionsLoopScheduler.add(load_guess_conditionsRoutineBegin(snapshot));
      guess_conditionsLoopScheduler.add(load_guess_conditionsRoutineEachFrame());
      guess_conditionsLoopScheduler.add(load_guess_conditionsRoutineEnd(snapshot));
      guess_conditionsLoopScheduler.add(guess_conditionsLoopEndIteration(guess_conditionsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function guess_conditionsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(guess_conditions);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function guess_conditionsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var practice_trials;
function practice_trialsLoopBegin(practice_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice.xlsx',
      seed: undefined, name: 'practice_trials'
    });
    psychoJS.experiment.addLoop(practice_trials); // add the loop to the experiment
    currentLoop = practice_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    practice_trials.forEach(function() {
      snapshot = practice_trials.getSnapshot();
    
      practice_trialsLoopScheduler.add(importConditions(snapshot));
      practice_trialsLoopScheduler.add(iti_learning_practiceRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(iti_learning_practiceRoutineEachFrame());
      practice_trialsLoopScheduler.add(iti_learning_practiceRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(guessRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(guessRoutineEachFrame());
      practice_trialsLoopScheduler.add(guessRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(guess_responseRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(guess_responseRoutineEachFrame());
      practice_trialsLoopScheduler.add(guess_responseRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(feedback_guessRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(feedback_guessRoutineEachFrame());
      practice_trialsLoopScheduler.add(feedback_guessRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(encodeRoutineBegin(snapshot));
      practice_trialsLoopScheduler.add(encodeRoutineEachFrame());
      practice_trialsLoopScheduler.add(encodeRoutineEnd(snapshot));
      practice_trialsLoopScheduler.add(practice_trialsLoopEndIteration(practice_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function practice_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practice_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practice_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var learning_trials;
function learning_trialsLoopBegin(learning_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    learning_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cue_target_pairs.xlsx',
      seed: undefined, name: 'learning_trials'
    });
    psychoJS.experiment.addLoop(learning_trials); // add the loop to the experiment
    currentLoop = learning_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    learning_trials.forEach(function() {
      snapshot = learning_trials.getSnapshot();
    
      learning_trialsLoopScheduler.add(importConditions(snapshot));
      learning_trialsLoopScheduler.add(iti_learningRoutineBegin(snapshot));
      learning_trialsLoopScheduler.add(iti_learningRoutineEachFrame());
      learning_trialsLoopScheduler.add(iti_learningRoutineEnd(snapshot));
      learning_trialsLoopScheduler.add(guessRoutineBegin(snapshot));
      learning_trialsLoopScheduler.add(guessRoutineEachFrame());
      learning_trialsLoopScheduler.add(guessRoutineEnd(snapshot));
      learning_trialsLoopScheduler.add(guess_responseRoutineBegin(snapshot));
      learning_trialsLoopScheduler.add(guess_responseRoutineEachFrame());
      learning_trialsLoopScheduler.add(guess_responseRoutineEnd(snapshot));
      learning_trialsLoopScheduler.add(encodeRoutineBegin(snapshot));
      learning_trialsLoopScheduler.add(encodeRoutineEachFrame());
      learning_trialsLoopScheduler.add(encodeRoutineEnd(snapshot));
      learning_trialsLoopScheduler.add(task_breakRoutineBegin(snapshot));
      learning_trialsLoopScheduler.add(task_breakRoutineEachFrame());
      learning_trialsLoopScheduler.add(task_breakRoutineEnd(snapshot));
      learning_trialsLoopScheduler.add(learning_trialsLoopEndIteration(learning_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function learning_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(learning_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function learning_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var test_practice_trials;
function test_practice_trialsLoopBegin(test_practice_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_practice_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice.xlsx',
      seed: undefined, name: 'test_practice_trials'
    });
    psychoJS.experiment.addLoop(test_practice_trials); // add the loop to the experiment
    currentLoop = test_practice_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    test_practice_trials.forEach(function() {
      snapshot = test_practice_trials.getSnapshot();
    
      test_practice_trialsLoopScheduler.add(importConditions(snapshot));
      test_practice_trialsLoopScheduler.add(itiRoutineBegin(snapshot));
      test_practice_trialsLoopScheduler.add(itiRoutineEachFrame());
      test_practice_trialsLoopScheduler.add(itiRoutineEnd(snapshot));
      test_practice_trialsLoopScheduler.add(cued_recallRoutineBegin(snapshot));
      test_practice_trialsLoopScheduler.add(cued_recallRoutineEachFrame());
      test_practice_trialsLoopScheduler.add(cued_recallRoutineEnd(snapshot));
      test_practice_trialsLoopScheduler.add(recall_responseRoutineBegin(snapshot));
      test_practice_trialsLoopScheduler.add(recall_responseRoutineEachFrame());
      test_practice_trialsLoopScheduler.add(recall_responseRoutineEnd(snapshot));
      test_practice_trialsLoopScheduler.add(recall_selectRoutineBegin(snapshot));
      test_practice_trialsLoopScheduler.add(recall_selectRoutineEachFrame());
      test_practice_trialsLoopScheduler.add(recall_selectRoutineEnd(snapshot));
      test_practice_trialsLoopScheduler.add(recall_feedbackRoutineBegin(snapshot));
      test_practice_trialsLoopScheduler.add(recall_feedbackRoutineEachFrame());
      test_practice_trialsLoopScheduler.add(recall_feedbackRoutineEnd(snapshot));
      test_practice_trialsLoopScheduler.add(test_practice_trialsLoopEndIteration(test_practice_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function test_practice_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(test_practice_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function test_practice_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var test_trials;
function test_trialsLoopBegin(test_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'cue_target_pairs.xlsx',
      seed: undefined, name: 'test_trials'
    });
    psychoJS.experiment.addLoop(test_trials); // add the loop to the experiment
    currentLoop = test_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    test_trials.forEach(function() {
      snapshot = test_trials.getSnapshot();
    
      test_trialsLoopScheduler.add(importConditions(snapshot));
      test_trialsLoopScheduler.add(itiRoutineBegin(snapshot));
      test_trialsLoopScheduler.add(itiRoutineEachFrame());
      test_trialsLoopScheduler.add(itiRoutineEnd(snapshot));
      test_trialsLoopScheduler.add(cued_recallRoutineBegin(snapshot));
      test_trialsLoopScheduler.add(cued_recallRoutineEachFrame());
      test_trialsLoopScheduler.add(cued_recallRoutineEnd(snapshot));
      test_trialsLoopScheduler.add(recall_responseRoutineBegin(snapshot));
      test_trialsLoopScheduler.add(recall_responseRoutineEachFrame());
      test_trialsLoopScheduler.add(recall_responseRoutineEnd(snapshot));
      test_trialsLoopScheduler.add(recall_selectRoutineBegin(snapshot));
      test_trialsLoopScheduler.add(recall_selectRoutineEachFrame());
      test_trialsLoopScheduler.add(recall_selectRoutineEnd(snapshot));
      test_trialsLoopScheduler.add(task_breakRoutineBegin(snapshot));
      test_trialsLoopScheduler.add(task_breakRoutineEachFrame());
      test_trialsLoopScheduler.add(task_breakRoutineEnd(snapshot));
      test_trialsLoopScheduler.add(test_trialsLoopEndIteration(test_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function test_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(test_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function test_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var semantic_mapping;
function semantic_mappingLoopBegin(semantic_mappingLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    semantic_mapping = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'targets_mediators.xlsx',
      seed: undefined, name: 'semantic_mapping'
    });
    psychoJS.experiment.addLoop(semantic_mapping); // add the loop to the experiment
    currentLoop = semantic_mapping;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    semantic_mapping.forEach(function() {
      snapshot = semantic_mapping.getSnapshot();
    
      semantic_mappingLoopScheduler.add(importConditions(snapshot));
      semantic_mappingLoopScheduler.add(itiRoutineBegin(snapshot));
      semantic_mappingLoopScheduler.add(itiRoutineEachFrame());
      semantic_mappingLoopScheduler.add(itiRoutineEnd(snapshot));
      semantic_mappingLoopScheduler.add(itemRoutineBegin(snapshot));
      semantic_mappingLoopScheduler.add(itemRoutineEachFrame());
      semantic_mappingLoopScheduler.add(itemRoutineEnd(snapshot));
      semantic_mappingLoopScheduler.add(mapping_breakRoutineBegin(snapshot));
      semantic_mappingLoopScheduler.add(mapping_breakRoutineEachFrame());
      semantic_mappingLoopScheduler.add(mapping_breakRoutineEnd(snapshot));
      semantic_mappingLoopScheduler.add(semantic_mappingLoopEndIteration(semantic_mappingLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function semantic_mappingLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(semantic_mapping);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function semantic_mappingLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var load_guess_conditionsMaxDurationReached;
var load_guess_conditionsMaxDuration;
var load_guess_conditionsComponents;
function load_guess_conditionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'load_guess_conditions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    load_guess_conditionsClock.reset();
    routineTimer.reset();
    load_guess_conditionsMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from load_guess_list
    guess_list.push(guess_trial);
    
    psychoJS.experiment.addData('load_guess_conditions.started', globalClock.getTime());
    load_guess_conditionsMaxDuration = null
    // keep track of which components have finished
    load_guess_conditionsComponents = [];
    
    load_guess_conditionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function load_guess_conditionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'load_guess_conditions' ---
    // get current time
    t = load_guess_conditionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    load_guess_conditionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function load_guess_conditionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'load_guess_conditions' ---
    load_guess_conditionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('load_guess_conditions.stopped', globalClock.getTime());
    // the Routine "load_guess_conditions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions1MaxDurationReached;
var _instruction1_key_allKeys;
var instructions1MaxDuration;
var instructions1Components;
function instructions1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions1Clock.reset();
    routineTimer.reset();
    instructions1MaxDurationReached = false;
    // update component parameters for each repeat
    instruction1_key.keys = undefined;
    instruction1_key.rt = undefined;
    _instruction1_key_allKeys = [];
    psychoJS.experiment.addData('instructions1.started', globalClock.getTime());
    instructions1MaxDuration = null
    // keep track of which components have finished
    instructions1Components = [];
    instructions1Components.push(instructions1_text);
    instructions1Components.push(instruction1_key);
    
    instructions1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions1' ---
    // get current time
    t = instructions1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions1_text* updates
    if (t >= 0.0 && instructions1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions1_text.tStart = t;  // (not accounting for frame time here)
      instructions1_text.frameNStart = frameN;  // exact frame index
      
      instructions1_text.setAutoDraw(true);
    }
    
    
    // *instruction1_key* updates
    if (t >= 0.0 && instruction1_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction1_key.tStart = t;  // (not accounting for frame time here)
      instruction1_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction1_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction1_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction1_key.clearEvents(); });
    }
    
    if (instruction1_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction1_key.getKeys({keyList: ['space'], waitRelease: false});
      _instruction1_key_allKeys = _instruction1_key_allKeys.concat(theseKeys);
      if (_instruction1_key_allKeys.length > 0) {
        instruction1_key.keys = _instruction1_key_allKeys[_instruction1_key_allKeys.length - 1].name;  // just the last key pressed
        instruction1_key.rt = _instruction1_key_allKeys[_instruction1_key_allKeys.length - 1].rt;
        instruction1_key.duration = _instruction1_key_allKeys[_instruction1_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions1' ---
    instructions1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruction1_key.corr, level);
    }
    psychoJS.experiment.addData('instruction1_key.keys', instruction1_key.keys);
    if (typeof instruction1_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction1_key.rt', instruction1_key.rt);
        psychoJS.experiment.addData('instruction1_key.duration', instruction1_key.duration);
        routineTimer.reset();
        }
    
    instruction1_key.stop();
    // the Routine "instructions1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions2MaxDurationReached;
var _instruction2_key_allKeys;
var instructions2MaxDuration;
var instructions2Components;
function instructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions2Clock.reset();
    routineTimer.reset();
    instructions2MaxDurationReached = false;
    // update component parameters for each repeat
    instruction2_key.keys = undefined;
    instruction2_key.rt = undefined;
    _instruction2_key_allKeys = [];
    psychoJS.experiment.addData('instructions2.started', globalClock.getTime());
    instructions2MaxDuration = null
    // keep track of which components have finished
    instructions2Components = [];
    instructions2Components.push(instructions2_text);
    instructions2Components.push(instruction2_key);
    
    instructions2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions2' ---
    // get current time
    t = instructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions2_text* updates
    if (t >= 0.0 && instructions2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions2_text.tStart = t;  // (not accounting for frame time here)
      instructions2_text.frameNStart = frameN;  // exact frame index
      
      instructions2_text.setAutoDraw(true);
    }
    
    
    // *instruction2_key* updates
    if (t >= 0.0 && instruction2_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction2_key.tStart = t;  // (not accounting for frame time here)
      instruction2_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction2_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction2_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction2_key.clearEvents(); });
    }
    
    if (instruction2_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction2_key.getKeys({keyList: ['space'], waitRelease: false});
      _instruction2_key_allKeys = _instruction2_key_allKeys.concat(theseKeys);
      if (_instruction2_key_allKeys.length > 0) {
        instruction2_key.keys = _instruction2_key_allKeys[_instruction2_key_allKeys.length - 1].name;  // just the last key pressed
        instruction2_key.rt = _instruction2_key_allKeys[_instruction2_key_allKeys.length - 1].rt;
        instruction2_key.duration = _instruction2_key_allKeys[_instruction2_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions2' ---
    instructions2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruction2_key.corr, level);
    }
    psychoJS.experiment.addData('instruction2_key.keys', instruction2_key.keys);
    if (typeof instruction2_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction2_key.rt', instruction2_key.rt);
        psychoJS.experiment.addData('instruction2_key.duration', instruction2_key.duration);
        routineTimer.reset();
        }
    
    instruction2_key.stop();
    // the Routine "instructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions3MaxDurationReached;
var _instruction3_key_allKeys;
var instructions3MaxDuration;
var instructions3Components;
function instructions3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions3Clock.reset();
    routineTimer.reset();
    instructions3MaxDurationReached = false;
    // update component parameters for each repeat
    instruction3_key.keys = undefined;
    instruction3_key.rt = undefined;
    _instruction3_key_allKeys = [];
    psychoJS.experiment.addData('instructions3.started', globalClock.getTime());
    instructions3MaxDuration = null
    // keep track of which components have finished
    instructions3Components = [];
    instructions3Components.push(instructions3_text);
    instructions3Components.push(instruction3_key);
    
    instructions3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions3' ---
    // get current time
    t = instructions3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions3_text* updates
    if (t >= 0.0 && instructions3_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions3_text.tStart = t;  // (not accounting for frame time here)
      instructions3_text.frameNStart = frameN;  // exact frame index
      
      instructions3_text.setAutoDraw(true);
    }
    
    
    // *instruction3_key* updates
    if (t >= 0.0 && instruction3_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction3_key.tStart = t;  // (not accounting for frame time here)
      instruction3_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction3_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction3_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction3_key.clearEvents(); });
    }
    
    if (instruction3_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction3_key.getKeys({keyList: ['space'], waitRelease: false});
      _instruction3_key_allKeys = _instruction3_key_allKeys.concat(theseKeys);
      if (_instruction3_key_allKeys.length > 0) {
        instruction3_key.keys = _instruction3_key_allKeys[_instruction3_key_allKeys.length - 1].name;  // just the last key pressed
        instruction3_key.rt = _instruction3_key_allKeys[_instruction3_key_allKeys.length - 1].rt;
        instruction3_key.duration = _instruction3_key_allKeys[_instruction3_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions3' ---
    instructions3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruction3_key.corr, level);
    }
    psychoJS.experiment.addData('instruction3_key.keys', instruction3_key.keys);
    if (typeof instruction3_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction3_key.rt', instruction3_key.rt);
        psychoJS.experiment.addData('instruction3_key.duration', instruction3_key.duration);
        routineTimer.reset();
        }
    
    instruction3_key.stop();
    // the Routine "instructions3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions4MaxDurationReached;
var _instruction4_key_allKeys;
var instructions4MaxDuration;
var instructions4Components;
function instructions4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions4' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions4Clock.reset();
    routineTimer.reset();
    instructions4MaxDurationReached = false;
    // update component parameters for each repeat
    instruction4_key.keys = undefined;
    instruction4_key.rt = undefined;
    _instruction4_key_allKeys = [];
    psychoJS.experiment.addData('instructions4.started', globalClock.getTime());
    instructions4MaxDuration = null
    // keep track of which components have finished
    instructions4Components = [];
    instructions4Components.push(instructions4_text);
    instructions4Components.push(instruction4_key);
    
    instructions4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions4' ---
    // get current time
    t = instructions4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions4_text* updates
    if (t >= 0.0 && instructions4_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions4_text.tStart = t;  // (not accounting for frame time here)
      instructions4_text.frameNStart = frameN;  // exact frame index
      
      instructions4_text.setAutoDraw(true);
    }
    
    
    // *instruction4_key* updates
    if (t >= 0.0 && instruction4_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction4_key.tStart = t;  // (not accounting for frame time here)
      instruction4_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction4_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction4_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction4_key.clearEvents(); });
    }
    
    if (instruction4_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction4_key.getKeys({keyList: ['space'], waitRelease: false});
      _instruction4_key_allKeys = _instruction4_key_allKeys.concat(theseKeys);
      if (_instruction4_key_allKeys.length > 0) {
        instruction4_key.keys = _instruction4_key_allKeys[_instruction4_key_allKeys.length - 1].name;  // just the last key pressed
        instruction4_key.rt = _instruction4_key_allKeys[_instruction4_key_allKeys.length - 1].rt;
        instruction4_key.duration = _instruction4_key_allKeys[_instruction4_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions4' ---
    instructions4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruction4_key.corr, level);
    }
    psychoJS.experiment.addData('instruction4_key.keys', instruction4_key.keys);
    if (typeof instruction4_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction4_key.rt', instruction4_key.rt);
        psychoJS.experiment.addData('instruction4_key.duration', instruction4_key.duration);
        routineTimer.reset();
        }
    
    instruction4_key.stop();
    // the Routine "instructions4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions5MaxDurationReached;
var _instruction5_key_allKeys;
var instructions5MaxDuration;
var instructions5Components;
function instructions5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions5' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions5Clock.reset();
    routineTimer.reset();
    instructions5MaxDurationReached = false;
    // update component parameters for each repeat
    instruction5_key.keys = undefined;
    instruction5_key.rt = undefined;
    _instruction5_key_allKeys = [];
    psychoJS.experiment.addData('instructions5.started', globalClock.getTime());
    instructions5MaxDuration = null
    // keep track of which components have finished
    instructions5Components = [];
    instructions5Components.push(instructions5_text);
    instructions5Components.push(instruction5_key);
    
    instructions5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions5' ---
    // get current time
    t = instructions5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions5_text* updates
    if (t >= 0.0 && instructions5_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions5_text.tStart = t;  // (not accounting for frame time here)
      instructions5_text.frameNStart = frameN;  // exact frame index
      
      instructions5_text.setAutoDraw(true);
    }
    
    
    // *instruction5_key* updates
    if (t >= 0.0 && instruction5_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction5_key.tStart = t;  // (not accounting for frame time here)
      instruction5_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction5_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction5_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction5_key.clearEvents(); });
    }
    
    if (instruction5_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction5_key.getKeys({keyList: ['space'], waitRelease: false});
      _instruction5_key_allKeys = _instruction5_key_allKeys.concat(theseKeys);
      if (_instruction5_key_allKeys.length > 0) {
        instruction5_key.keys = _instruction5_key_allKeys[_instruction5_key_allKeys.length - 1].name;  // just the last key pressed
        instruction5_key.rt = _instruction5_key_allKeys[_instruction5_key_allKeys.length - 1].rt;
        instruction5_key.duration = _instruction5_key_allKeys[_instruction5_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions5' ---
    instructions5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(instruction5_key.corr, level);
    }
    psychoJS.experiment.addData('instruction5_key.keys', instruction5_key.keys);
    if (typeof instruction5_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction5_key.rt', instruction5_key.rt);
        psychoJS.experiment.addData('instruction5_key.duration', instruction5_key.duration);
        routineTimer.reset();
        }
    
    instruction5_key.stop();
    // the Routine "instructions5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var iti_learning_practiceMaxDurationReached;
var iti_learning_practiceMaxDuration;
var iti_learning_practiceComponents;
function iti_learning_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'iti_learning_practice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    iti_learning_practiceClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    iti_learning_practiceMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('iti_learning_practice.started', globalClock.getTime());
    iti_learning_practiceMaxDuration = null
    // keep track of which components have finished
    iti_learning_practiceComponents = [];
    iti_learning_practiceComponents.push(iti_practice_blank);
    
    iti_learning_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function iti_learning_practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'iti_learning_practice' ---
    // get current time
    t = iti_learning_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *iti_practice_blank* updates
    if (t >= 0.0 && iti_practice_blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iti_practice_blank.tStart = t;  // (not accounting for frame time here)
      iti_practice_blank.frameNStart = frameN;  // exact frame index
      
      iti_practice_blank.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (iti_practice_blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      iti_practice_blank.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    iti_learning_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var guess_cond;
function iti_learning_practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'iti_learning_practice' ---
    iti_learning_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('iti_learning_practice.stopped', globalClock.getTime());
    // Run 'End Routine' code from set_practice_guess_stim
    guess_cond = practice_list.splice((practice_list.length - 1), 1)[0];
    console.log(guess_cond);
    
    if (iti_learning_practiceMaxDurationReached) {
        iti_learning_practiceClock.add(iti_learning_practiceMaxDuration);
    } else {
        iti_learning_practiceClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var guessMaxDurationReached;
var _end_guess_allKeys;
var maxDurationReached;
var guessMaxDuration;
var guessComponents;
function guessRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'guess' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    guessClock.reset();
    routineTimer.reset();
    guessMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from skip_guess
    if ((guess_cond === "Read")) {
        trial_dur = 0.001;
    } else {
        trial_dur = 3;
    }
    
    cue_stim_guessing.setText(cue);
    end_guess.keys = undefined;
    end_guess.rt = undefined;
    _end_guess_allKeys = [];
    psychoJS.experiment.addData('guess.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((guess_cond == 'Read'));
    maxDurationReached = false
    guessMaxDuration = null
    // keep track of which components have finished
    guessComponents = [];
    guessComponents.push(dash_stim_guessing);
    guessComponents.push(cue_stim_guessing);
    guessComponents.push(guess_stim);
    guessComponents.push(end_guess);
    
    guessComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function guessRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'guess' ---
    // get current time
    t = guessClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dash_stim_guessing* updates
    if (t >= 0.0 && dash_stim_guessing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dash_stim_guessing.tStart = t;  // (not accounting for frame time here)
      dash_stim_guessing.frameNStart = frameN;  // exact frame index
      
      dash_stim_guessing.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + trial_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (dash_stim_guessing.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dash_stim_guessing.setAutoDraw(false);
    }
    
    
    // *cue_stim_guessing* updates
    if (t >= 0.0 && cue_stim_guessing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_stim_guessing.tStart = t;  // (not accounting for frame time here)
      cue_stim_guessing.frameNStart = frameN;  // exact frame index
      
      cue_stim_guessing.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + trial_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_stim_guessing.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cue_stim_guessing.setAutoDraw(false);
    }
    
    
    // *guess_stim* updates
    if (t >= 0.0 && guess_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      guess_stim.tStart = t;  // (not accounting for frame time here)
      guess_stim.frameNStart = frameN;  // exact frame index
      
      guess_stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + trial_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (guess_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      guess_stim.setAutoDraw(false);
    }
    
    
    // *end_guess* updates
    if (t >= 0.0 && end_guess.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_guess.tStart = t;  // (not accounting for frame time here)
      end_guess.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_guess.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_guess.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_guess.clearEvents(); });
    }
    
    frameRemains = 0.0 + trial_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (end_guess.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_guess.status = PsychoJS.Status.FINISHED;
        }
      
    if (end_guess.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_guess.getKeys({keyList: ['p'], waitRelease: false});
      _end_guess_allKeys = _end_guess_allKeys.concat(theseKeys);
      if (_end_guess_allKeys.length > 0) {
        end_guess.keys = _end_guess_allKeys[_end_guess_allKeys.length - 1].name;  // just the last key pressed
        end_guess.rt = _end_guess_allKeys[_end_guess_allKeys.length - 1].rt;
        end_guess.duration = _end_guess_allKeys[_end_guess_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    guessComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function guessRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'guess' ---
    guessComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('guess.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_guess.corr, level);
    }
    psychoJS.experiment.addData('end_guess.keys', end_guess.keys);
    if (typeof end_guess.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_guess.rt', end_guess.rt);
        psychoJS.experiment.addData('end_guess.duration', end_guess.duration);
        routineTimer.reset();
        }
    
    end_guess.stop();
    // the Routine "guess" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var guess_responseMaxDurationReached;
var _guess_reached_allKeys;
var guess_responseMaxDuration;
var guess_responseComponents;
function guess_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'guess_response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    guess_responseClock.reset();
    routineTimer.reset();
    guess_responseMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from skip_guess_response
    if ((guess_cond === "Read")) {
        trial_dur = 0.001;
    } else {
        trial_dur = 2;
    }
    
    cue_stim_guessing_resp.setText(cue);
    guess_reached.keys = undefined;
    guess_reached.rt = undefined;
    _guess_reached_allKeys = [];
    psychoJS.experiment.addData('guess_response.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((guess_cond == 'Read'));
    maxDurationReached = false
    guess_responseMaxDuration = null
    // keep track of which components have finished
    guess_responseComponents = [];
    guess_responseComponents.push(dash_stim_guessing_resp);
    guess_responseComponents.push(cue_stim_guessing_resp);
    guess_responseComponents.push(guess_stim_resp);
    guess_responseComponents.push(guess_question);
    guess_responseComponents.push(guess_reached);
    
    guess_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function guess_responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'guess_response' ---
    // get current time
    t = guess_responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dash_stim_guessing_resp* updates
    if (t >= 0.0 && dash_stim_guessing_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dash_stim_guessing_resp.tStart = t;  // (not accounting for frame time here)
      dash_stim_guessing_resp.frameNStart = frameN;  // exact frame index
      
      dash_stim_guessing_resp.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + trial_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (dash_stim_guessing_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dash_stim_guessing_resp.setAutoDraw(false);
    }
    
    
    // *cue_stim_guessing_resp* updates
    if (t >= 0.0 && cue_stim_guessing_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_stim_guessing_resp.tStart = t;  // (not accounting for frame time here)
      cue_stim_guessing_resp.frameNStart = frameN;  // exact frame index
      
      cue_stim_guessing_resp.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + trial_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_stim_guessing_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cue_stim_guessing_resp.setAutoDraw(false);
    }
    
    
    // *guess_stim_resp* updates
    if (t >= 0.0 && guess_stim_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      guess_stim_resp.tStart = t;  // (not accounting for frame time here)
      guess_stim_resp.frameNStart = frameN;  // exact frame index
      
      guess_stim_resp.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + trial_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (guess_stim_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      guess_stim_resp.setAutoDraw(false);
    }
    
    
    // *guess_question* updates
    if (t >= 0.0 && guess_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      guess_question.tStart = t;  // (not accounting for frame time here)
      guess_question.frameNStart = frameN;  // exact frame index
      
      guess_question.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + trial_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (guess_question.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      guess_question.setAutoDraw(false);
    }
    
    
    // *guess_reached* updates
    if (t >= 0.0 && guess_reached.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      guess_reached.tStart = t;  // (not accounting for frame time here)
      guess_reached.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { guess_reached.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { guess_reached.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { guess_reached.clearEvents(); });
    }
    
    frameRemains = 0.0 + trial_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (guess_reached.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      guess_reached.status = PsychoJS.Status.FINISHED;
        }
      
    if (guess_reached.status === PsychoJS.Status.STARTED) {
      let theseKeys = guess_reached.getKeys({keyList: ['f', 'g', 'h'], waitRelease: false});
      _guess_reached_allKeys = _guess_reached_allKeys.concat(theseKeys);
      if (_guess_reached_allKeys.length > 0) {
        guess_reached.keys = _guess_reached_allKeys[_guess_reached_allKeys.length - 1].name;  // just the last key pressed
        guess_reached.rt = _guess_reached_allKeys[_guess_reached_allKeys.length - 1].rt;
        guess_reached.duration = _guess_reached_allKeys[_guess_reached_allKeys.length - 1].duration;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    guess_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function guess_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'guess_response' ---
    guess_responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('guess_response.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(guess_reached.corr, level);
    }
    psychoJS.experiment.addData('guess_reached.keys', guess_reached.keys);
    if (typeof guess_reached.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('guess_reached.rt', guess_reached.rt);
        psychoJS.experiment.addData('guess_reached.duration', guess_reached.duration);
        }
    
    guess_reached.stop();
    // the Routine "guess_response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var feedback_guessMaxDurationReached;
var feedback;
var feedback_guessMaxDuration;
var feedback_guessComponents;
function feedback_guessRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_guess' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    feedback_guessClock.reset();
    routineTimer.reset();
    feedback_guessMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from skip_guess_feedback
    if ((guess_cond === "Read")) {
        trial_dur = 0.001;
    } else {
        trial_dur = 2;
    }
    
    // Run 'Begin Routine' code from guess_feedback
    feedback = "Ihre Antwort: ";
    if ((guess_reached.keys === "f")) {
        feedback = (feedback + "\nKeinen Rateversuch gemacht.");
    } else {
        if ((guess_reached.keys === "g")) {
            feedback = (feedback + "\nEinen Rateversuch gemacht.");
        } else {
            if ((guess_reached.keys === "h")) {
                feedback = (feedback + "\nMehrere Rateversuche gemacht.");
            } else {
                feedback = (feedback + "\nKeine Antwort gegeben.");
            }
        }
    }
    
    no_response_feedback.setText(feedback);
    psychoJS.experiment.addData('feedback_guess.started', globalClock.getTime());
    feedback_guessMaxDuration = null
    // keep track of which components have finished
    feedback_guessComponents = [];
    feedback_guessComponents.push(no_response_feedback);
    
    feedback_guessComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_guessRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_guess' ---
    // get current time
    t = feedback_guessClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *no_response_feedback* updates
    if (t >= 0.0 && no_response_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_response_feedback.tStart = t;  // (not accounting for frame time here)
      no_response_feedback.frameNStart = frameN;  // exact frame index
      
      no_response_feedback.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + trial_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (no_response_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      no_response_feedback.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_guessComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_guessRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_guess' ---
    feedback_guessComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('feedback_guess.stopped', globalClock.getTime());
    // the Routine "feedback_guess" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var encodeMaxDurationReached;
var _end_encoding_allKeys;
var encodeMaxDuration;
var encodeComponents;
function encodeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'encode' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    encodeClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    encodeMaxDurationReached = false;
    // update component parameters for each repeat
    cue_stim_learning.setText(cue);
    target_stim.setText(target);
    end_encoding.keys = undefined;
    end_encoding.rt = undefined;
    _end_encoding_allKeys = [];
    // Run 'Begin Routine' code from save_learning_trial_type
    cue_types[cue] = guess_cond;
    target_types[target] = guess_cond;
    psychoJS.experiment.addData("trial_type", guess_cond);
    
    psychoJS.experiment.addData('encode.started', globalClock.getTime());
    encodeMaxDuration = null
    // keep track of which components have finished
    encodeComponents = [];
    encodeComponents.push(dash_stim_learning);
    encodeComponents.push(cue_stim_learning);
    encodeComponents.push(target_stim);
    encodeComponents.push(end_encoding);
    
    encodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function encodeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'encode' ---
    // get current time
    t = encodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dash_stim_learning* updates
    if (t >= 0.0 && dash_stim_learning.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dash_stim_learning.tStart = t;  // (not accounting for frame time here)
      dash_stim_learning.frameNStart = frameN;  // exact frame index
      
      dash_stim_learning.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (dash_stim_learning.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dash_stim_learning.setAutoDraw(false);
    }
    
    
    // *cue_stim_learning* updates
    if (t >= 0.0 && cue_stim_learning.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_stim_learning.tStart = t;  // (not accounting for frame time here)
      cue_stim_learning.frameNStart = frameN;  // exact frame index
      
      cue_stim_learning.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_stim_learning.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cue_stim_learning.setAutoDraw(false);
    }
    
    
    // *target_stim* updates
    if (t >= 0.0 && target_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_stim.tStart = t;  // (not accounting for frame time here)
      target_stim.frameNStart = frameN;  // exact frame index
      
      target_stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (target_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      target_stim.setAutoDraw(false);
    }
    
    
    // *end_encoding* updates
    if (t >= 0.0 && end_encoding.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_encoding.tStart = t;  // (not accounting for frame time here)
      end_encoding.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_encoding.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_encoding.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_encoding.clearEvents(); });
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (end_encoding.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_encoding.status = PsychoJS.Status.FINISHED;
        }
      
    if (end_encoding.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_encoding.getKeys({keyList: ['p'], waitRelease: false});
      _end_encoding_allKeys = _end_encoding_allKeys.concat(theseKeys);
      if (_end_encoding_allKeys.length > 0) {
        end_encoding.keys = _end_encoding_allKeys[_end_encoding_allKeys.length - 1].name;  // just the last key pressed
        end_encoding.rt = _end_encoding_allKeys[_end_encoding_allKeys.length - 1].rt;
        end_encoding.duration = _end_encoding_allKeys[_end_encoding_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    encodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function encodeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'encode' ---
    encodeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('encode.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_encoding.corr, level);
    }
    psychoJS.experiment.addData('end_encoding.keys', end_encoding.keys);
    if (typeof end_encoding.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_encoding.rt', end_encoding.rt);
        psychoJS.experiment.addData('end_encoding.duration', end_encoding.duration);
        routineTimer.reset();
        }
    
    end_encoding.stop();
    if (encodeMaxDurationReached) {
        encodeClock.add(encodeMaxDuration);
    } else {
        encodeClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var start_taskMaxDurationReached;
var _start_key_allKeys;
var task_trial;
var start_taskMaxDuration;
var start_taskComponents;
function start_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'start_task' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    start_taskClock.reset();
    routineTimer.reset();
    start_taskMaxDurationReached = false;
    // update component parameters for each repeat
    start_key.keys = undefined;
    start_key.rt = undefined;
    _start_key_allKeys = [];
    // Run 'Begin Routine' code from reset_trial_counter
    task_trial = 0;
    
    psychoJS.experiment.addData('start_task.started', globalClock.getTime());
    start_taskMaxDuration = null
    // keep track of which components have finished
    start_taskComponents = [];
    start_taskComponents.push(start_task_text);
    start_taskComponents.push(start_key);
    
    start_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function start_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'start_task' ---
    // get current time
    t = start_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_task_text* updates
    if (t >= 0.0 && start_task_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_task_text.tStart = t;  // (not accounting for frame time here)
      start_task_text.frameNStart = frameN;  // exact frame index
      
      start_task_text.setAutoDraw(true);
    }
    
    
    // *start_key* updates
    if (t >= 0.0 && start_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_key.tStart = t;  // (not accounting for frame time here)
      start_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_key.clearEvents(); });
    }
    
    if (start_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_key.getKeys({keyList: ['space'], waitRelease: false});
      _start_key_allKeys = _start_key_allKeys.concat(theseKeys);
      if (_start_key_allKeys.length > 0) {
        start_key.keys = _start_key_allKeys[_start_key_allKeys.length - 1].name;  // just the last key pressed
        start_key.rt = _start_key_allKeys[_start_key_allKeys.length - 1].rt;
        start_key.duration = _start_key_allKeys[_start_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    start_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'start_task' ---
    start_taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('start_task.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(start_key.corr, level);
    }
    psychoJS.experiment.addData('start_key.keys', start_key.keys);
    if (typeof start_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('start_key.rt', start_key.rt);
        psychoJS.experiment.addData('start_key.duration', start_key.duration);
        routineTimer.reset();
        }
    
    start_key.stop();
    // the Routine "start_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var iti_learningMaxDurationReached;
var iti_learningMaxDuration;
var iti_learningComponents;
function iti_learningRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'iti_learning' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    iti_learningClock.reset(routineTimer.getTime());
    routineTimer.add(4.000000);
    iti_learningMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from set_guess_stim
    guess_cond = guess_list.splice((guess_list.length - 1), 1)[0];
    console.log(guess_cond);
    
    psychoJS.experiment.addData('iti_learning.started', globalClock.getTime());
    iti_learningMaxDuration = null
    // keep track of which components have finished
    iti_learningComponents = [];
    iti_learningComponents.push(iti_learning_blank);
    
    iti_learningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function iti_learningRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'iti_learning' ---
    // get current time
    t = iti_learningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *iti_learning_blank* updates
    if (t >= 0.0 && iti_learning_blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iti_learning_blank.tStart = t;  // (not accounting for frame time here)
      iti_learning_blank.frameNStart = frameN;  // exact frame index
      
      iti_learning_blank.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (iti_learning_blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      iti_learning_blank.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    iti_learningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function iti_learningRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'iti_learning' ---
    iti_learningComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('iti_learning.stopped', globalClock.getTime());
    if (iti_learningMaxDurationReached) {
        iti_learningClock.add(iti_learningMaxDuration);
    } else {
        iti_learningClock.add(4.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var task_breakMaxDurationReached;
var _task_break_resp_allKeys;
var task_breakMaxDuration;
var task_breakComponents;
function task_breakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'task_break' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    task_breakClock.reset();
    routineTimer.reset();
    task_breakMaxDurationReached = false;
    // update component parameters for each repeat
    task_break_resp.keys = undefined;
    task_break_resp.rt = undefined;
    _task_break_resp_allKeys = [];
    // Run 'Begin Routine' code from task_reset_counter
    task_trial = (task_trial + 1);
    
    psychoJS.experiment.addData('task_break.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((task_trial < 40));
    maxDurationReached = false
    task_breakMaxDuration = null
    // keep track of which components have finished
    task_breakComponents = [];
    task_breakComponents.push(task_break_text);
    task_breakComponents.push(task_break_resp);
    
    task_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function task_breakRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'task_break' ---
    // get current time
    t = task_breakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *task_break_text* updates
    if (t >= 0.0 && task_break_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_break_text.tStart = t;  // (not accounting for frame time here)
      task_break_text.frameNStart = frameN;  // exact frame index
      
      task_break_text.setAutoDraw(true);
    }
    
    
    // *task_break_resp* updates
    if (t >= 0.0 && task_break_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_break_resp.tStart = t;  // (not accounting for frame time here)
      task_break_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { task_break_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { task_break_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { task_break_resp.clearEvents(); });
    }
    
    if (task_break_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = task_break_resp.getKeys({keyList: ['space'], waitRelease: false});
      _task_break_resp_allKeys = _task_break_resp_allKeys.concat(theseKeys);
      if (_task_break_resp_allKeys.length > 0) {
        task_break_resp.keys = _task_break_resp_allKeys[_task_break_resp_allKeys.length - 1].name;  // just the last key pressed
        task_break_resp.rt = _task_break_resp_allKeys[_task_break_resp_allKeys.length - 1].rt;
        task_break_resp.duration = _task_break_resp_allKeys[_task_break_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    task_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function task_breakRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'task_break' ---
    task_breakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('task_break.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(task_break_resp.corr, level);
    }
    psychoJS.experiment.addData('task_break_resp.keys', task_break_resp.keys);
    if (typeof task_break_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('task_break_resp.rt', task_break_resp.rt);
        psychoJS.experiment.addData('task_break_resp.duration', task_break_resp.duration);
        routineTimer.reset();
        }
    
    task_break_resp.stop();
    // Run 'End Routine' code from task_reset_counter
    if ((task_trial === 40)) {
        task_trial = 0;
    }
    console.log("break", task_trial);
    
    // the Routine "task_break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_part1MaxDurationReached;
var _end_part1_key_allKeys;
var end_part1MaxDuration;
var end_part1Components;
function end_part1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_part1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    end_part1Clock.reset();
    routineTimer.reset();
    end_part1MaxDurationReached = false;
    // update component parameters for each repeat
    end_part1_key.keys = undefined;
    end_part1_key.rt = undefined;
    _end_part1_key_allKeys = [];
    psychoJS.experiment.addData('end_part1.started', globalClock.getTime());
    end_part1MaxDuration = null
    // keep track of which components have finished
    end_part1Components = [];
    end_part1Components.push(end_part1_key);
    end_part1Components.push(end_part1_text);
    
    end_part1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_part1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_part1' ---
    // get current time
    t = end_part1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_part1_key* updates
    if (t >= 0.0 && end_part1_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_part1_key.tStart = t;  // (not accounting for frame time here)
      end_part1_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_part1_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_part1_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_part1_key.clearEvents(); });
    }
    
    if (end_part1_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_part1_key.getKeys({keyList: ['space'], waitRelease: false});
      _end_part1_key_allKeys = _end_part1_key_allKeys.concat(theseKeys);
      if (_end_part1_key_allKeys.length > 0) {
        end_part1_key.keys = _end_part1_key_allKeys[_end_part1_key_allKeys.length - 1].name;  // just the last key pressed
        end_part1_key.rt = _end_part1_key_allKeys[_end_part1_key_allKeys.length - 1].rt;
        end_part1_key.duration = _end_part1_key_allKeys[_end_part1_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *end_part1_text* updates
    if (t >= 0.0 && end_part1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_part1_text.tStart = t;  // (not accounting for frame time here)
      end_part1_text.frameNStart = frameN;  // exact frame index
      
      end_part1_text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    end_part1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_part1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_part1' ---
    end_part1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end_part1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_part1_key.corr, level);
    }
    psychoJS.experiment.addData('end_part1_key.keys', end_part1_key.keys);
    if (typeof end_part1_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_part1_key.rt', end_part1_key.rt);
        psychoJS.experiment.addData('end_part1_key.duration', end_part1_key.duration);
        routineTimer.reset();
        }
    
    end_part1_key.stop();
    // the Routine "end_part1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions_recall1MaxDurationReached;
var _recall_instructions1_key_allKeys;
var instructions_recall1MaxDuration;
var instructions_recall1Components;
function instructions_recall1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_recall1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions_recall1Clock.reset();
    routineTimer.reset();
    instructions_recall1MaxDurationReached = false;
    // update component parameters for each repeat
    recall_instructions1_key.keys = undefined;
    recall_instructions1_key.rt = undefined;
    _recall_instructions1_key_allKeys = [];
    psychoJS.experiment.addData('instructions_recall1.started', globalClock.getTime());
    instructions_recall1MaxDuration = null
    // keep track of which components have finished
    instructions_recall1Components = [];
    instructions_recall1Components.push(recall_instructions1_text);
    instructions_recall1Components.push(recall_instructions1_key);
    
    instructions_recall1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_recall1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_recall1' ---
    // get current time
    t = instructions_recall1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *recall_instructions1_text* updates
    if (t >= 0.0 && recall_instructions1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_instructions1_text.tStart = t;  // (not accounting for frame time here)
      recall_instructions1_text.frameNStart = frameN;  // exact frame index
      
      recall_instructions1_text.setAutoDraw(true);
    }
    
    
    // *recall_instructions1_key* updates
    if (t >= 0.0 && recall_instructions1_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_instructions1_key.tStart = t;  // (not accounting for frame time here)
      recall_instructions1_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { recall_instructions1_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { recall_instructions1_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { recall_instructions1_key.clearEvents(); });
    }
    
    if (recall_instructions1_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = recall_instructions1_key.getKeys({keyList: ['space'], waitRelease: false});
      _recall_instructions1_key_allKeys = _recall_instructions1_key_allKeys.concat(theseKeys);
      if (_recall_instructions1_key_allKeys.length > 0) {
        recall_instructions1_key.keys = _recall_instructions1_key_allKeys[_recall_instructions1_key_allKeys.length - 1].name;  // just the last key pressed
        recall_instructions1_key.rt = _recall_instructions1_key_allKeys[_recall_instructions1_key_allKeys.length - 1].rt;
        recall_instructions1_key.duration = _recall_instructions1_key_allKeys[_recall_instructions1_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_recall1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_recall1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_recall1' ---
    instructions_recall1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions_recall1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(recall_instructions1_key.corr, level);
    }
    psychoJS.experiment.addData('recall_instructions1_key.keys', recall_instructions1_key.keys);
    if (typeof recall_instructions1_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('recall_instructions1_key.rt', recall_instructions1_key.rt);
        psychoJS.experiment.addData('recall_instructions1_key.duration', recall_instructions1_key.duration);
        routineTimer.reset();
        }
    
    recall_instructions1_key.stop();
    // the Routine "instructions_recall1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions_recall2MaxDurationReached;
var _recall_instructions1_key_2_allKeys;
var instructions_recall2MaxDuration;
var instructions_recall2Components;
function instructions_recall2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_recall2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions_recall2Clock.reset();
    routineTimer.reset();
    instructions_recall2MaxDurationReached = false;
    // update component parameters for each repeat
    recall_instructions1_key_2.keys = undefined;
    recall_instructions1_key_2.rt = undefined;
    _recall_instructions1_key_2_allKeys = [];
    psychoJS.experiment.addData('instructions_recall2.started', globalClock.getTime());
    instructions_recall2MaxDuration = null
    // keep track of which components have finished
    instructions_recall2Components = [];
    instructions_recall2Components.push(recall_instructions1_text_2);
    instructions_recall2Components.push(recall_instructions1_key_2);
    
    instructions_recall2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_recall2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_recall2' ---
    // get current time
    t = instructions_recall2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *recall_instructions1_text_2* updates
    if (t >= 0.0 && recall_instructions1_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_instructions1_text_2.tStart = t;  // (not accounting for frame time here)
      recall_instructions1_text_2.frameNStart = frameN;  // exact frame index
      
      recall_instructions1_text_2.setAutoDraw(true);
    }
    
    
    // *recall_instructions1_key_2* updates
    if (t >= 0.0 && recall_instructions1_key_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_instructions1_key_2.tStart = t;  // (not accounting for frame time here)
      recall_instructions1_key_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { recall_instructions1_key_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { recall_instructions1_key_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { recall_instructions1_key_2.clearEvents(); });
    }
    
    if (recall_instructions1_key_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = recall_instructions1_key_2.getKeys({keyList: ['space'], waitRelease: false});
      _recall_instructions1_key_2_allKeys = _recall_instructions1_key_2_allKeys.concat(theseKeys);
      if (_recall_instructions1_key_2_allKeys.length > 0) {
        recall_instructions1_key_2.keys = _recall_instructions1_key_2_allKeys[_recall_instructions1_key_2_allKeys.length - 1].name;  // just the last key pressed
        recall_instructions1_key_2.rt = _recall_instructions1_key_2_allKeys[_recall_instructions1_key_2_allKeys.length - 1].rt;
        recall_instructions1_key_2.duration = _recall_instructions1_key_2_allKeys[_recall_instructions1_key_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_recall2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_recall2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_recall2' ---
    instructions_recall2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions_recall2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(recall_instructions1_key_2.corr, level);
    }
    psychoJS.experiment.addData('recall_instructions1_key_2.keys', recall_instructions1_key_2.keys);
    if (typeof recall_instructions1_key_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('recall_instructions1_key_2.rt', recall_instructions1_key_2.rt);
        psychoJS.experiment.addData('recall_instructions1_key_2.duration', recall_instructions1_key_2.duration);
        routineTimer.reset();
        }
    
    recall_instructions1_key_2.stop();
    // the Routine "instructions_recall2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var itiMaxDurationReached;
var itiMaxDuration;
var itiComponents;
function itiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'iti' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    itiClock.reset(routineTimer.getTime());
    routineTimer.add(4.000000);
    itiMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('iti.started', globalClock.getTime());
    itiMaxDuration = null
    // keep track of which components have finished
    itiComponents = [];
    itiComponents.push(iti_blank);
    
    itiComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function itiRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'iti' ---
    // get current time
    t = itiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *iti_blank* updates
    if (t >= 0.0 && iti_blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iti_blank.tStart = t;  // (not accounting for frame time here)
      iti_blank.frameNStart = frameN;  // exact frame index
      
      iti_blank.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (iti_blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      iti_blank.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    itiComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function itiRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'iti' ---
    itiComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('iti.stopped', globalClock.getTime());
    if (itiMaxDurationReached) {
        itiClock.add(itiMaxDuration);
    } else {
        itiClock.add(4.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var cued_recallMaxDurationReached;
var _end_cued_recall_allKeys;
var cued_recallMaxDuration;
var cued_recallComponents;
function cued_recallRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'cued_recall' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    cued_recallClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    cued_recallMaxDurationReached = false;
    // update component parameters for each repeat
    cue_stim_recall.setText(cue);
    end_cued_recall.keys = undefined;
    end_cued_recall.rt = undefined;
    _end_cued_recall_allKeys = [];
    // Run 'Begin Routine' code from save_recall_trial_type
    psychoJS.experiment.addData("trial_type", cue_types[cue]);
    
    psychoJS.experiment.addData('cued_recall.started', globalClock.getTime());
    cued_recallMaxDuration = null
    // keep track of which components have finished
    cued_recallComponents = [];
    cued_recallComponents.push(cue_stim_recall);
    cued_recallComponents.push(dash_stim_recall);
    cued_recallComponents.push(qmark_target);
    cued_recallComponents.push(end_cued_recall);
    
    cued_recallComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function cued_recallRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'cued_recall' ---
    // get current time
    t = cued_recallClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_stim_recall* updates
    if (t >= 0.0 && cue_stim_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_stim_recall.tStart = t;  // (not accounting for frame time here)
      cue_stim_recall.frameNStart = frameN;  // exact frame index
      
      cue_stim_recall.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_stim_recall.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cue_stim_recall.setAutoDraw(false);
    }
    
    
    // *dash_stim_recall* updates
    if (t >= 0.0 && dash_stim_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dash_stim_recall.tStart = t;  // (not accounting for frame time here)
      dash_stim_recall.frameNStart = frameN;  // exact frame index
      
      dash_stim_recall.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (dash_stim_recall.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dash_stim_recall.setAutoDraw(false);
    }
    
    
    // *qmark_target* updates
    if (t >= 0.0 && qmark_target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      qmark_target.tStart = t;  // (not accounting for frame time here)
      qmark_target.frameNStart = frameN;  // exact frame index
      
      qmark_target.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (qmark_target.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      qmark_target.setAutoDraw(false);
    }
    
    
    // *end_cued_recall* updates
    if (t >= 0.0 && end_cued_recall.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_cued_recall.tStart = t;  // (not accounting for frame time here)
      end_cued_recall.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_cued_recall.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_cued_recall.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_cued_recall.clearEvents(); });
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (end_cued_recall.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_cued_recall.status = PsychoJS.Status.FINISHED;
        }
      
    if (end_cued_recall.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_cued_recall.getKeys({keyList: ['p'], waitRelease: false});
      _end_cued_recall_allKeys = _end_cued_recall_allKeys.concat(theseKeys);
      if (_end_cued_recall_allKeys.length > 0) {
        end_cued_recall.keys = _end_cued_recall_allKeys[_end_cued_recall_allKeys.length - 1].name;  // just the last key pressed
        end_cued_recall.rt = _end_cued_recall_allKeys[_end_cued_recall_allKeys.length - 1].rt;
        end_cued_recall.duration = _end_cued_recall_allKeys[_end_cued_recall_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    cued_recallComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cued_recallRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'cued_recall' ---
    cued_recallComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('cued_recall.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_cued_recall.corr, level);
    }
    psychoJS.experiment.addData('end_cued_recall.keys', end_cued_recall.keys);
    if (typeof end_cued_recall.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_cued_recall.rt', end_cued_recall.rt);
        psychoJS.experiment.addData('end_cued_recall.duration', end_cued_recall.duration);
        routineTimer.reset();
        }
    
    end_cued_recall.stop();
    if (cued_recallMaxDurationReached) {
        cued_recallClock.add(cued_recallMaxDuration);
    } else {
        cued_recallClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var recall_responseMaxDurationReached;
var _recall_reached_allKeys;
var recall_responseMaxDuration;
var recall_responseComponents;
function recall_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall_response' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    recall_responseClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    recall_responseMaxDurationReached = false;
    // update component parameters for each repeat
    cue_stim_recall_resp.setText(cue);
    recall_reached.keys = undefined;
    recall_reached.rt = undefined;
    _recall_reached_allKeys = [];
    psychoJS.experiment.addData('recall_response.started', globalClock.getTime());
    recall_responseMaxDuration = null
    // keep track of which components have finished
    recall_responseComponents = [];
    recall_responseComponents.push(dash_stim_recall_resp);
    recall_responseComponents.push(cue_stim_recall_resp);
    recall_responseComponents.push(recall_stim_resp);
    recall_responseComponents.push(recall_question);
    recall_responseComponents.push(recall_reached);
    
    recall_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function recall_responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall_response' ---
    // get current time
    t = recall_responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dash_stim_recall_resp* updates
    if (t >= 0.0 && dash_stim_recall_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dash_stim_recall_resp.tStart = t;  // (not accounting for frame time here)
      dash_stim_recall_resp.frameNStart = frameN;  // exact frame index
      
      dash_stim_recall_resp.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (dash_stim_recall_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dash_stim_recall_resp.setAutoDraw(false);
    }
    
    
    // *cue_stim_recall_resp* updates
    if (t >= 0.0 && cue_stim_recall_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_stim_recall_resp.tStart = t;  // (not accounting for frame time here)
      cue_stim_recall_resp.frameNStart = frameN;  // exact frame index
      
      cue_stim_recall_resp.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_stim_recall_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cue_stim_recall_resp.setAutoDraw(false);
    }
    
    
    // *recall_stim_resp* updates
    if (t >= 0.0 && recall_stim_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_stim_resp.tStart = t;  // (not accounting for frame time here)
      recall_stim_resp.frameNStart = frameN;  // exact frame index
      
      recall_stim_resp.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (recall_stim_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      recall_stim_resp.setAutoDraw(false);
    }
    
    
    // *recall_question* updates
    if (t >= 0.0 && recall_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_question.tStart = t;  // (not accounting for frame time here)
      recall_question.frameNStart = frameN;  // exact frame index
      
      recall_question.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (recall_question.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      recall_question.setAutoDraw(false);
    }
    
    
    // *recall_reached* updates
    if (t >= 0.0 && recall_reached.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_reached.tStart = t;  // (not accounting for frame time here)
      recall_reached.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { recall_reached.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { recall_reached.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { recall_reached.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (recall_reached.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      recall_reached.status = PsychoJS.Status.FINISHED;
        }
      
    if (recall_reached.status === PsychoJS.Status.STARTED) {
      let theseKeys = recall_reached.getKeys({keyList: ['f', 'g'], waitRelease: false});
      _recall_reached_allKeys = _recall_reached_allKeys.concat(theseKeys);
      if (_recall_reached_allKeys.length > 0) {
        recall_reached.keys = _recall_reached_allKeys[_recall_reached_allKeys.length - 1].name;  // just the last key pressed
        recall_reached.rt = _recall_reached_allKeys[_recall_reached_allKeys.length - 1].rt;
        recall_reached.duration = _recall_reached_allKeys[_recall_reached_allKeys.length - 1].duration;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    recall_responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var skip_letters;
function recall_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall_response' ---
    recall_responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('recall_response.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(recall_reached.corr, level);
    }
    psychoJS.experiment.addData('recall_reached.keys', recall_reached.keys);
    if (typeof recall_reached.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('recall_reached.rt', recall_reached.rt);
        psychoJS.experiment.addData('recall_reached.duration', recall_reached.duration);
        }
    
    recall_reached.stop();
    // Run 'End Routine' code from skip_recall_select
    console.log(recall_reached.keys);
    skip_letters = 0;
    trial_dur = 3;
    if ((recall_reached.keys === "g")) {
        trial_dur = 3;
    } else {
        trial_dur = 0.01;
        skip_letters = 1;
    }
    console.log(trial_dur);
    
    if (recall_responseMaxDurationReached) {
        recall_responseClock.add(recall_responseMaxDuration);
    } else {
        recall_responseClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var recall_selectMaxDurationReached;
var target_letter;
var result;
var recall_select_text;
var _recall_selection_allKeys;
var recall_selectMaxDuration;
var recall_selectComponents;
function recall_selectRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall_select' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    recall_selectClock.reset();
    routineTimer.reset();
    recall_selectMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from letter_choice
    target_letter = target.slice((- 1))[0]; // Például ez a célkarakter
    result = getRandomLetters(target_letter);
    psychoJS.experiment.addData("letter_options", result);
    recall_select_text = generateRecallText(result);
    console.log(recall_select_text);
    console.log(trial_dur)
    
    cue_stim_recall_select.setText(cue);
    recall_question_select.setText(recall_select_text);
    recall_selection.keys = undefined;
    recall_selection.rt = undefined;
    _recall_selection_allKeys = [];
    psychoJS.experiment.addData('recall_select.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((skip_letters == 1));
    maxDurationReached = false
    recall_selectMaxDuration = null
    // keep track of which components have finished
    recall_selectComponents = [];
    recall_selectComponents.push(dash_stim_recall_select);
    recall_selectComponents.push(cue_stim_recall_select);
    recall_selectComponents.push(recall_stim_select);
    recall_selectComponents.push(recall_question_select);
    recall_selectComponents.push(recall_selection);
    
    recall_selectComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function recall_selectRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall_select' ---
    // get current time
    t = recall_selectClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dash_stim_recall_select* updates
    if (t >= 0.0 && dash_stim_recall_select.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dash_stim_recall_select.tStart = t;  // (not accounting for frame time here)
      dash_stim_recall_select.frameNStart = frameN;  // exact frame index
      
      dash_stim_recall_select.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + trial_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (dash_stim_recall_select.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dash_stim_recall_select.setAutoDraw(false);
    }
    
    
    // *cue_stim_recall_select* updates
    if (t >= 0.0 && cue_stim_recall_select.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_stim_recall_select.tStart = t;  // (not accounting for frame time here)
      cue_stim_recall_select.frameNStart = frameN;  // exact frame index
      
      cue_stim_recall_select.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + trial_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_stim_recall_select.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cue_stim_recall_select.setAutoDraw(false);
    }
    
    
    // *recall_stim_select* updates
    if (t >= 0.0 && recall_stim_select.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_stim_select.tStart = t;  // (not accounting for frame time here)
      recall_stim_select.frameNStart = frameN;  // exact frame index
      
      recall_stim_select.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + trial_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (recall_stim_select.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      recall_stim_select.setAutoDraw(false);
    }
    
    
    // *recall_question_select* updates
    if (t >= 0.0 && recall_question_select.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_question_select.tStart = t;  // (not accounting for frame time here)
      recall_question_select.frameNStart = frameN;  // exact frame index
      
      recall_question_select.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + trial_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (recall_question_select.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      recall_question_select.setAutoDraw(false);
    }
    
    
    // *recall_selection* updates
    if (t >= 0.0 && recall_selection.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_selection.tStart = t;  // (not accounting for frame time here)
      recall_selection.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { recall_selection.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { recall_selection.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { recall_selection.clearEvents(); });
    }
    
    frameRemains = 0.0 + trial_dur - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (recall_selection.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      recall_selection.status = PsychoJS.Status.FINISHED;
        }
      
    if (recall_selection.status === PsychoJS.Status.STARTED) {
      let theseKeys = recall_selection.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _recall_selection_allKeys = _recall_selection_allKeys.concat(theseKeys);
      if (_recall_selection_allKeys.length > 0) {
        recall_selection.keys = _recall_selection_allKeys[_recall_selection_allKeys.length - 1].name;  // just the last key pressed
        recall_selection.rt = _recall_selection_allKeys[_recall_selection_allKeys.length - 1].rt;
        recall_selection.duration = _recall_selection_allKeys[_recall_selection_allKeys.length - 1].duration;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    recall_selectComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall_selectRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall_select' ---
    recall_selectComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('recall_select.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(recall_selection.corr, level);
    }
    psychoJS.experiment.addData('recall_selection.keys', recall_selection.keys);
    if (typeof recall_selection.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('recall_selection.rt', recall_selection.rt);
        psychoJS.experiment.addData('recall_selection.duration', recall_selection.duration);
        }
    
    recall_selection.stop();
    // the Routine "recall_select" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var recall_feedbackMaxDurationReached;
var _end_feedback_allKeys;
var recall_feedbackMaxDuration;
var recall_feedbackComponents;
function recall_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'recall_feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    recall_feedbackClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    recall_feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    cue_stim_feedback.setText(cue);
    target_stim_feedback.setText(target);
    end_feedback.keys = undefined;
    end_feedback.rt = undefined;
    _end_feedback_allKeys = [];
    // Run 'Begin Routine' code from save_learning_trial_type_2
    cue_types[cue] = guess_cond;
    target_types[target] = guess_cond;
    psychoJS.experiment.addData("trial_type", guess_cond);
    
    recall_feedback2.setText(target.slice((- 1))[0]);
    psychoJS.experiment.addData('recall_feedback.started', globalClock.getTime());
    recall_feedbackMaxDuration = null
    // keep track of which components have finished
    recall_feedbackComponents = [];
    recall_feedbackComponents.push(dash_stim_feedback);
    recall_feedbackComponents.push(cue_stim_feedback);
    recall_feedbackComponents.push(target_stim_feedback);
    recall_feedbackComponents.push(end_feedback);
    recall_feedbackComponents.push(recall_feedback1);
    recall_feedbackComponents.push(recall_feedback2);
    
    recall_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function recall_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'recall_feedback' ---
    // get current time
    t = recall_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dash_stim_feedback* updates
    if (t >= 0.0 && dash_stim_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dash_stim_feedback.tStart = t;  // (not accounting for frame time here)
      dash_stim_feedback.frameNStart = frameN;  // exact frame index
      
      dash_stim_feedback.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (dash_stim_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dash_stim_feedback.setAutoDraw(false);
    }
    
    
    // *cue_stim_feedback* updates
    if (t >= 0.0 && cue_stim_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_stim_feedback.tStart = t;  // (not accounting for frame time here)
      cue_stim_feedback.frameNStart = frameN;  // exact frame index
      
      cue_stim_feedback.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (cue_stim_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cue_stim_feedback.setAutoDraw(false);
    }
    
    
    // *target_stim_feedback* updates
    if (t >= 0.0 && target_stim_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_stim_feedback.tStart = t;  // (not accounting for frame time here)
      target_stim_feedback.frameNStart = frameN;  // exact frame index
      
      target_stim_feedback.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (target_stim_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      target_stim_feedback.setAutoDraw(false);
    }
    
    
    // *end_feedback* updates
    if (t >= 0.0 && end_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_feedback.tStart = t;  // (not accounting for frame time here)
      end_feedback.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_feedback.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_feedback.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_feedback.clearEvents(); });
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (end_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_feedback.status = PsychoJS.Status.FINISHED;
        }
      
    if (end_feedback.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_feedback.getKeys({keyList: ['p'], waitRelease: false});
      _end_feedback_allKeys = _end_feedback_allKeys.concat(theseKeys);
      if (_end_feedback_allKeys.length > 0) {
        end_feedback.keys = _end_feedback_allKeys[_end_feedback_allKeys.length - 1].name;  // just the last key pressed
        end_feedback.rt = _end_feedback_allKeys[_end_feedback_allKeys.length - 1].rt;
        end_feedback.duration = _end_feedback_allKeys[_end_feedback_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *recall_feedback1* updates
    if (t >= 0.0 && recall_feedback1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_feedback1.tStart = t;  // (not accounting for frame time here)
      recall_feedback1.frameNStart = frameN;  // exact frame index
      
      recall_feedback1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (recall_feedback1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      recall_feedback1.setAutoDraw(false);
    }
    
    
    // *recall_feedback2* updates
    if (t >= 0.0 && recall_feedback2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_feedback2.tStart = t;  // (not accounting for frame time here)
      recall_feedback2.frameNStart = frameN;  // exact frame index
      
      recall_feedback2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (recall_feedback2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      recall_feedback2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    recall_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'recall_feedback' ---
    recall_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('recall_feedback.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_feedback.corr, level);
    }
    psychoJS.experiment.addData('end_feedback.keys', end_feedback.keys);
    if (typeof end_feedback.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_feedback.rt', end_feedback.rt);
        psychoJS.experiment.addData('end_feedback.duration', end_feedback.duration);
        routineTimer.reset();
        }
    
    end_feedback.stop();
    if (recall_feedbackMaxDurationReached) {
        recall_feedbackClock.add(recall_feedbackMaxDuration);
    } else {
        recall_feedbackClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_part2MaxDurationReached;
var _end_part2_key_allKeys;
var end_part2MaxDuration;
var end_part2Components;
function end_part2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_part2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    end_part2Clock.reset();
    routineTimer.reset();
    end_part2MaxDurationReached = false;
    // update component parameters for each repeat
    end_part2_key.keys = undefined;
    end_part2_key.rt = undefined;
    _end_part2_key_allKeys = [];
    psychoJS.experiment.addData('end_part2.started', globalClock.getTime());
    end_part2MaxDuration = null
    // keep track of which components have finished
    end_part2Components = [];
    end_part2Components.push(end_part2_key);
    end_part2Components.push(end_part2_text);
    
    end_part2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_part2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_part2' ---
    // get current time
    t = end_part2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_part2_key* updates
    if (t >= 0.0 && end_part2_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_part2_key.tStart = t;  // (not accounting for frame time here)
      end_part2_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_part2_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_part2_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_part2_key.clearEvents(); });
    }
    
    if (end_part2_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_part2_key.getKeys({keyList: ['space'], waitRelease: false});
      _end_part2_key_allKeys = _end_part2_key_allKeys.concat(theseKeys);
      if (_end_part2_key_allKeys.length > 0) {
        end_part2_key.keys = _end_part2_key_allKeys[_end_part2_key_allKeys.length - 1].name;  // just the last key pressed
        end_part2_key.rt = _end_part2_key_allKeys[_end_part2_key_allKeys.length - 1].rt;
        end_part2_key.duration = _end_part2_key_allKeys[_end_part2_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *end_part2_text* updates
    if (t >= 0.0 && end_part2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_part2_text.tStart = t;  // (not accounting for frame time here)
      end_part2_text.frameNStart = frameN;  // exact frame index
      
      end_part2_text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    end_part2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_part2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_part2' ---
    end_part2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end_part2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_part2_key.corr, level);
    }
    psychoJS.experiment.addData('end_part2_key.keys', end_part2_key.keys);
    if (typeof end_part2_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_part2_key.rt', end_part2_key.rt);
        psychoJS.experiment.addData('end_part2_key.duration', end_part2_key.duration);
        routineTimer.reset();
        }
    
    end_part2_key.stop();
    // the Routine "end_part2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions_semantic_mapping1MaxDurationReached;
var _sm_instructions1_key_allKeys;
var instructions_semantic_mapping1MaxDuration;
var instructions_semantic_mapping1Components;
function instructions_semantic_mapping1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_semantic_mapping1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions_semantic_mapping1Clock.reset();
    routineTimer.reset();
    instructions_semantic_mapping1MaxDurationReached = false;
    // update component parameters for each repeat
    sm_instructions1_key.keys = undefined;
    sm_instructions1_key.rt = undefined;
    _sm_instructions1_key_allKeys = [];
    psychoJS.experiment.addData('instructions_semantic_mapping1.started', globalClock.getTime());
    instructions_semantic_mapping1MaxDuration = null
    // keep track of which components have finished
    instructions_semantic_mapping1Components = [];
    instructions_semantic_mapping1Components.push(sm_instructions1_text);
    instructions_semantic_mapping1Components.push(sm_instructions1_key);
    
    instructions_semantic_mapping1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_semantic_mapping1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_semantic_mapping1' ---
    // get current time
    t = instructions_semantic_mapping1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sm_instructions1_text* updates
    if (t >= 0.0 && sm_instructions1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sm_instructions1_text.tStart = t;  // (not accounting for frame time here)
      sm_instructions1_text.frameNStart = frameN;  // exact frame index
      
      sm_instructions1_text.setAutoDraw(true);
    }
    
    
    // *sm_instructions1_key* updates
    if (t >= 0.0 && sm_instructions1_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sm_instructions1_key.tStart = t;  // (not accounting for frame time here)
      sm_instructions1_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { sm_instructions1_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { sm_instructions1_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { sm_instructions1_key.clearEvents(); });
    }
    
    if (sm_instructions1_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = sm_instructions1_key.getKeys({keyList: ['space'], waitRelease: false});
      _sm_instructions1_key_allKeys = _sm_instructions1_key_allKeys.concat(theseKeys);
      if (_sm_instructions1_key_allKeys.length > 0) {
        sm_instructions1_key.keys = _sm_instructions1_key_allKeys[_sm_instructions1_key_allKeys.length - 1].name;  // just the last key pressed
        sm_instructions1_key.rt = _sm_instructions1_key_allKeys[_sm_instructions1_key_allKeys.length - 1].rt;
        sm_instructions1_key.duration = _sm_instructions1_key_allKeys[_sm_instructions1_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_semantic_mapping1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_semantic_mapping1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_semantic_mapping1' ---
    instructions_semantic_mapping1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions_semantic_mapping1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(sm_instructions1_key.corr, level);
    }
    psychoJS.experiment.addData('sm_instructions1_key.keys', sm_instructions1_key.keys);
    if (typeof sm_instructions1_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('sm_instructions1_key.rt', sm_instructions1_key.rt);
        psychoJS.experiment.addData('sm_instructions1_key.duration', sm_instructions1_key.duration);
        routineTimer.reset();
        }
    
    sm_instructions1_key.stop();
    // the Routine "instructions_semantic_mapping1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions_semantic_mapping2MaxDurationReached;
var _sm_instructions2_key_allKeys;
var instructions_semantic_mapping2MaxDuration;
var instructions_semantic_mapping2Components;
function instructions_semantic_mapping2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_semantic_mapping2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructions_semantic_mapping2Clock.reset();
    routineTimer.reset();
    instructions_semantic_mapping2MaxDurationReached = false;
    // update component parameters for each repeat
    sm_instructions2_key.keys = undefined;
    sm_instructions2_key.rt = undefined;
    _sm_instructions2_key_allKeys = [];
    psychoJS.experiment.addData('instructions_semantic_mapping2.started', globalClock.getTime());
    instructions_semantic_mapping2MaxDuration = null
    // keep track of which components have finished
    instructions_semantic_mapping2Components = [];
    instructions_semantic_mapping2Components.push(sm_instructions2_text);
    instructions_semantic_mapping2Components.push(sm_instructions2_key);
    
    instructions_semantic_mapping2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_semantic_mapping2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_semantic_mapping2' ---
    // get current time
    t = instructions_semantic_mapping2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sm_instructions2_text* updates
    if (t >= 0.0 && sm_instructions2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sm_instructions2_text.tStart = t;  // (not accounting for frame time here)
      sm_instructions2_text.frameNStart = frameN;  // exact frame index
      
      sm_instructions2_text.setAutoDraw(true);
    }
    
    
    // *sm_instructions2_key* updates
    if (t >= 0.0 && sm_instructions2_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sm_instructions2_key.tStart = t;  // (not accounting for frame time here)
      sm_instructions2_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { sm_instructions2_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { sm_instructions2_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { sm_instructions2_key.clearEvents(); });
    }
    
    if (sm_instructions2_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = sm_instructions2_key.getKeys({keyList: ['space'], waitRelease: false});
      _sm_instructions2_key_allKeys = _sm_instructions2_key_allKeys.concat(theseKeys);
      if (_sm_instructions2_key_allKeys.length > 0) {
        sm_instructions2_key.keys = _sm_instructions2_key_allKeys[_sm_instructions2_key_allKeys.length - 1].name;  // just the last key pressed
        sm_instructions2_key.rt = _sm_instructions2_key_allKeys[_sm_instructions2_key_allKeys.length - 1].rt;
        sm_instructions2_key.duration = _sm_instructions2_key_allKeys[_sm_instructions2_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_semantic_mapping2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_semantic_mapping2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_semantic_mapping2' ---
    instructions_semantic_mapping2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instructions_semantic_mapping2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(sm_instructions2_key.corr, level);
    }
    psychoJS.experiment.addData('sm_instructions2_key.keys', sm_instructions2_key.keys);
    if (typeof sm_instructions2_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('sm_instructions2_key.rt', sm_instructions2_key.rt);
        psychoJS.experiment.addData('sm_instructions2_key.duration', sm_instructions2_key.duration);
        routineTimer.reset();
        }
    
    sm_instructions2_key.stop();
    // the Routine "instructions_semantic_mapping2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var itemMaxDurationReached;
var _living_nonliving_allKeys;
var _end_mapping_allKeys;
var _pj;
var itemMaxDuration;
var itemComponents;
function itemRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'item' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    itemClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    itemMaxDurationReached = false;
    // update component parameters for each repeat
    semantic_map_item.setText(list_item);
    living_nonliving.keys = undefined;
    living_nonliving.rt = undefined;
    _living_nonliving_allKeys = [];
    end_mapping.keys = undefined;
    end_mapping.rt = undefined;
    _end_mapping_allKeys = [];
    // Run 'Begin Routine' code from save_sm_trial_type
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (_pj.in_es6(list_item, target_types)) {
        psychoJS.experiment.addData("sm_trial_type", target_types[list_item]);
        psychoJS.experiment.addData("trial_type", target_types[list_item]);
    } else {
        psychoJS.experiment.addData("sm_trial_type", "Mediator");
        psychoJS.experiment.addData("trial_type", cue_types[cue]);
    }
    
    psychoJS.experiment.addData('item.started', globalClock.getTime());
    itemMaxDuration = null
    // keep track of which components have finished
    itemComponents = [];
    itemComponents.push(semantic_map_item);
    itemComponents.push(living_nonliving);
    itemComponents.push(end_mapping);
    itemComponents.push(living_nonliving_text);
    
    itemComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function itemRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'item' ---
    // get current time
    t = itemClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *semantic_map_item* updates
    if (t >= 0.0 && semantic_map_item.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      semantic_map_item.tStart = t;  // (not accounting for frame time here)
      semantic_map_item.frameNStart = frameN;  // exact frame index
      
      semantic_map_item.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (semantic_map_item.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      semantic_map_item.setAutoDraw(false);
    }
    
    
    // *living_nonliving* updates
    if (t >= 0.0 && living_nonliving.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_nonliving.tStart = t;  // (not accounting for frame time here)
      living_nonliving.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { living_nonliving.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { living_nonliving.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { living_nonliving.clearEvents(); });
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (living_nonliving.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      living_nonliving.status = PsychoJS.Status.FINISHED;
        }
      
    if (living_nonliving.status === PsychoJS.Status.STARTED) {
      let theseKeys = living_nonliving.getKeys({keyList: ['f', 'g'], waitRelease: false});
      _living_nonliving_allKeys = _living_nonliving_allKeys.concat(theseKeys);
      if (_living_nonliving_allKeys.length > 0) {
        living_nonliving.keys = _living_nonliving_allKeys[_living_nonliving_allKeys.length - 1].name;  // just the last key pressed
        living_nonliving.rt = _living_nonliving_allKeys[_living_nonliving_allKeys.length - 1].rt;
        living_nonliving.duration = _living_nonliving_allKeys[_living_nonliving_allKeys.length - 1].duration;
      }
    }
    
    
    // *end_mapping* updates
    if (t >= 0.0 && end_mapping.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_mapping.tStart = t;  // (not accounting for frame time here)
      end_mapping.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_mapping.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_mapping.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_mapping.clearEvents(); });
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (end_mapping.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_mapping.status = PsychoJS.Status.FINISHED;
        }
      
    if (end_mapping.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_mapping.getKeys({keyList: ['p'], waitRelease: false});
      _end_mapping_allKeys = _end_mapping_allKeys.concat(theseKeys);
      if (_end_mapping_allKeys.length > 0) {
        end_mapping.keys = _end_mapping_allKeys[_end_mapping_allKeys.length - 1].name;  // just the last key pressed
        end_mapping.rt = _end_mapping_allKeys[_end_mapping_allKeys.length - 1].rt;
        end_mapping.duration = _end_mapping_allKeys[_end_mapping_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *living_nonliving_text* updates
    if (t >= 0.0 && living_nonliving_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      living_nonliving_text.tStart = t;  // (not accounting for frame time here)
      living_nonliving_text.frameNStart = frameN;  // exact frame index
      
      living_nonliving_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (living_nonliving_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      living_nonliving_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    itemComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function itemRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'item' ---
    itemComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('item.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(living_nonliving.corr, level);
    }
    psychoJS.experiment.addData('living_nonliving.keys', living_nonliving.keys);
    if (typeof living_nonliving.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('living_nonliving.rt', living_nonliving.rt);
        psychoJS.experiment.addData('living_nonliving.duration', living_nonliving.duration);
        }
    
    living_nonliving.stop();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(end_mapping.corr, level);
    }
    psychoJS.experiment.addData('end_mapping.keys', end_mapping.keys);
    if (typeof end_mapping.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('end_mapping.rt', end_mapping.rt);
        psychoJS.experiment.addData('end_mapping.duration', end_mapping.duration);
        routineTimer.reset();
        }
    
    end_mapping.stop();
    if (itemMaxDurationReached) {
        itemClock.add(itemMaxDuration);
    } else {
        itemClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var mapping_breakMaxDurationReached;
var _break_resp_allKeys;
var mapping_breakMaxDuration;
var mapping_breakComponents;
function mapping_breakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'mapping_break' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    mapping_breakClock.reset();
    routineTimer.reset();
    mapping_breakMaxDurationReached = false;
    // update component parameters for each repeat
    break_resp.keys = undefined;
    break_resp.rt = undefined;
    _break_resp_allKeys = [];
    // Run 'Begin Routine' code from reset_counter
    mapping_trial = (mapping_trial + 1);
    console.log("mapping_trial", mapping_trial);
    
    psychoJS.experiment.addData('mapping_break.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((mapping_trial < 60));
    maxDurationReached = false
    mapping_breakMaxDuration = null
    // keep track of which components have finished
    mapping_breakComponents = [];
    mapping_breakComponents.push(break_text);
    mapping_breakComponents.push(break_resp);
    
    mapping_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function mapping_breakRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'mapping_break' ---
    // get current time
    t = mapping_breakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *break_text* updates
    if (t >= 0.0 && break_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_text.tStart = t;  // (not accounting for frame time here)
      break_text.frameNStart = frameN;  // exact frame index
      
      break_text.setAutoDraw(true);
    }
    
    
    // *break_resp* updates
    if (t >= 0.0 && break_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_resp.tStart = t;  // (not accounting for frame time here)
      break_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { break_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { break_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { break_resp.clearEvents(); });
    }
    
    if (break_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = break_resp.getKeys({keyList: ['space'], waitRelease: false});
      _break_resp_allKeys = _break_resp_allKeys.concat(theseKeys);
      if (_break_resp_allKeys.length > 0) {
        break_resp.keys = _break_resp_allKeys[_break_resp_allKeys.length - 1].name;  // just the last key pressed
        break_resp.rt = _break_resp_allKeys[_break_resp_allKeys.length - 1].rt;
        break_resp.duration = _break_resp_allKeys[_break_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    mapping_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function mapping_breakRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'mapping_break' ---
    mapping_breakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('mapping_break.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(break_resp.corr, level);
    }
    psychoJS.experiment.addData('break_resp.keys', break_resp.keys);
    if (typeof break_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('break_resp.rt', break_resp.rt);
        psychoJS.experiment.addData('break_resp.duration', break_resp.duration);
        routineTimer.reset();
        }
    
    break_resp.stop();
    // Run 'End Routine' code from reset_counter
    if ((mapping_trial === 60)) {
        mapping_trial = 0;
    }
    console.log("break", mapping_trial);
    
    // the Routine "mapping_break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanksMaxDurationReached;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    thanksClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    thanksMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thanks_text);
    
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks_text* updates
    if (t >= 0.0 && thanks_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks_text.tStart = t;  // (not accounting for frame time here)
      thanks_text.frameNStart = frameN;  // exact frame index
      
      thanks_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (thanks_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thanks_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    thanksComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
    if (thanksMaxDurationReached) {
        thanksClock.add(thanksMaxDuration);
    } else {
        thanksClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  document.body.style.cursor='auto';
  // Run 'End Experiment' code from load_guess_list
  console.log(guess_list);
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
