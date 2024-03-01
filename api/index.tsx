import { Button, Frog, TextInput } from 'frog'
import { handle } from 'frog/vercel'
import { WelcomeImage } from '../images/welcome.js'

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
  basePath: '/',
  dev: {
    appFid: 213144
  },

  // Supply a Hub API URL to enable frame verification.
  hubApiUrl: 'https://api.hub.wevm.dev'
})

app.get('/', (c) => {
  return c.text("Hello World")
})


app.frame('/api', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: (
      <WelcomeImage status={status} fruit={fruit} />
    ),
    intents: [
      <TextInput placeholder="Enter custom fruit..." />,
      <Button value="apples">Apples</Button>,
      <Button value="oranges">Oranges</Button>,
      <Button value="bananas">Bananas</Button>,
      status === "response" && <Button.Reset>Reset</Button.Reset>,
    ],
    browserLocation: "/",
  });
})

export const GET = handle(app)
export const POST = handle(app)
