export default class ApiConsole {
    name = "unknown";
    /**
     * @param {string} name Plugin Name
     */
    constructor(name) {
        this.name = name;
    }
    /**
     * Clear Console
     */
    apiClear() {
        console.clear();
    }
    /**
     * Print Message
     * @param {string} message 
     */
    apiLog(message) {
        console.log(`[${this.name}] ${message}`);
    }
}