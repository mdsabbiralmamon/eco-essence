const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const chalk = await import("chalk");
  const cliCursor = await import("cli-cursor");

  const text = "Welcome to Eco Essence Server";

  const typeEffect = async (text) => {
    cliCursor.default.hide();
    process.stdout.write(chalk.default.green(""));

    for (let i = 0; i < text.length; i++) {
      process.stdout.write(chalk.default.green(text[i]));
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    process.stdout.write("\n");
    cliCursor.default.show();
  };

  await typeEffect(text);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
            body {
              background-color: #1a1a1a;
              color: #00ff00;
              font-family: 'Courier New', Courier, monospace;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
            }

            .writer {
            font-family: Courier, monospace;
            display: inline-block;
            }
            .writer-text {
                display: inline-block;
                overflow: hidden;
                letter-spacing: 2px;
                animation: typing 5s steps(30, end), blink .75s step-end infinite;
                white-space: nowrap;
                font-size: 30px;
                font-weight: 700;
                border-right: 4px solid orange;
                box-sizing: border-box;
            }

            @keyframes typing {
                from { 
                    width: 0% 
                }
                to { 
                    width: 100% 
                }
            }

            @keyframes blink {
                from, to { 
                    border-color: transparent 
                }
                50% { 
                    border-color: orange; 
                }
            }
      </style>
    </head>
    <body>
        <div class="writer">
            <div class="writer-text">
                welcome to Eco Essence Server
            </div>
        </div>
    </body>
</html>
`;

  res.send(htmlContent);
});

module.exports = router;
