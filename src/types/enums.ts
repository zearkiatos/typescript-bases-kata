(() => {
  enum AudioLevel {
    min = 1,
    medium,
    max = 10
  }

  const currentAudio = AudioLevel.max;

  console.log(currentAudio);
  console.log(AudioLevel);
})();
