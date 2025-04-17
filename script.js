document.getElementById("start-install").addEventListener("click", function() {
    // Hide the main interface
    document.getElementById("main-ui").classList.add("hidden");

    // Show the installation interface
    document.getElementById("installation-ui").classList.remove("hidden");

    // Simulate installation progress
    let progress = 0;
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = progress + "%";
        progressText.textContent = progress + "%";

        if (progress >= 100) {
            clearInterval(interval);

            // Trigger file download
            const link = document.createElement("a");
            link.href = "your-file.zip"; // Replace with your actual file path
            link.download = "your-file.zip"; // File name for download
            link.click();

            alert("Installation Completed! File is downloading.");
        }
    }, 500); // Progress speed (0.5 seconds for every 10%)
});
