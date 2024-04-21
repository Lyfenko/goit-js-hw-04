const profile = {
    username: "Jacob",
    playTime: 300,
}

profile.getInfo = function () {
    return `${this.username} has ${this.playTime} active hours!`;
}

profile.changeUsername = function (newUsername) {
    this.username = newUsername;
}

profile.updatePlayTime = function (playTime) {
    this.playTime += playTime;
}

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"