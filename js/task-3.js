const profile = {
    username: "Jacob",
    playTime: 300,
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    },
    changeUsername(newUsername) {
        this.username = newUsername;
    },
    updatePlayTime(playTime) {
        this.playTime += playTime;
    }
};

console.log(profile.getInfo());

profile.changeUsername("Marco");
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());
