(() => {
    const batman: string = 'Batman';
    const greenLighter: string = 'Green Lighter';
    const blackVolcan: string  = 'Black Volcan';

    const abc = 123;

    console.log(`I'm ${batman}`);

    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || "He's not present");
});