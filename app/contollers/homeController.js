

const home = async (req, res) => {
    try {
        // Send a welcome message as JSON
        res.json({ message: "Welcome to our application! Your Api is Well and fully loaded....." });
    } catch (error) {
        // Handle any errors
        console.error("Error in home controller:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { home };