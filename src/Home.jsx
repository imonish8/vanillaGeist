import React from 'react'
import { Button, Page, Text , Display, Image , Grid, Spacer , Card ,Collapse , Divider} from '@geist-ui/core'
import { FileLambda , X, Cpu, ChevronsDown} from '@geist-ui/icons'

const Home = () => {
  return (
    <Page>
    <Grid xs={24} style={{ background: '#444', borderRadius: '15px' }}></Grid>
    <Card shadow>
    <Text h1 my={0}>Landed Perfect here, Wooh! Welcome.</Text>
    <Text> .</Text>
    </Card>
    <Spacer />
    <h4>Scroll Down </h4>
    <ChevronsDown />
    <Spacer />
    <Image.Browser url="https://monishnule.dev/Resume#projects--open-source" invert>
    <Image width="710px" height="430px" src="https://private-user-images.githubusercontent.com/115737071/316581265-533a2ea4-6e4d-4811-a59a-a8e5d6173cee.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTI4MjA5ODcsIm5iZiI6MTcxMjgyMDY4NywicGF0aCI6Ii8xMTU3MzcwNzEvMzE2NTgxMjY1LTUzM2EyZWE0LTZlNGQtNDgxMS1hNTlhLWE4ZTVkNjE3M2NlZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQxMVQwNzMxMjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kYTI4MDAyM2JhNDVhMjBjM2Y2MjUwYzFkNmQ2YTZlNWViYjM5ZWFjYWE1ODY4NjE0NTRjNmIzZWVkODQxNTQ0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.jjd42LM6IYy4_xPlY_IuzqyzTckXKapNgSpMhymo3e8" />
    </Image.Browser>
    <Spacer />
    
    <Grid xs={24}><Card shadow width="100%" height="300px"> 
    <Text>Sonora is a productivity app designed to help Developers manage their tasks, set goals, 
    and track their progress effectively.</Text>
    <Text> Whether you're a student, 
    professional, or anyone looking to stay organized and focused, Sonora has got you covered.
    </Text>
    <Text b>Features</Text>
    <p>Apple Focus 8hr: Organize your tasks with ease and stay on top of your to-do list.
    Sonora Native Player 3hr: Set achievable goals and monitor your progress towards them.
    
    Study with Pomodoro: Boost your productivity with the Pomodoro timer integrated into the app.
    
    </p>
    Statistics and Insights: Gain valuable insights into your productivity habits with detailed statistics.
    <p>
    
    Cross-Platform Compatibility: Access Sonora from anywhere, whether you're on your desktop or mobile device.</p>

    </Card></Grid>
    
    <Spacer />
    <Spacer />
    <Spacer />
    <Image.Browser url="https://raw.githubusercontent.com/imonish8/images-for-use/main/Apple-Vision-Pro-Plaintext-Crop-Business-230605.jpg.webp" invert>
    <Image width="710px" height="530px" src="https://raw.githubusercontent.com/imonish8/images-for-use/main/Apple-Vision-Pro-Plaintext-Crop-Business-230605.jpg.webp" />
    </Image.Browser>
    <Spacer />
    <Spacer />
    <Spacer /><Spacer />
    
    <Collapse initialVisible  shadow title="Open Ai URL" subtitle="More about My Open AI URL">
    <Text>
    <Text> <Text>How It Works</Text>

<p>Enter URL: Simply visit the website and input the URL you want to explore.
Retrieve Content: Our system fetches the webpage and extracts relevant information.
Generate Summary: Using advanced natural language processing (NLP) techniques, we condense the content into a brief summary.
Display Summary: Within seconds, you'll see a five-line overview of the webpage's content.
Explore Further: If you want more details, feel free to delve deeper into the provided summary or visit the original URL.</p>

<Text>Features</Text>
<p>Fast and Efficient: Get insights in seconds with minimal input.
Accurate Summaries: Leveraging cutting-edge NLP models from OpenAI ensures reliable results.
User-Friendly Interface: The application is designed for ease of use, making it accessible to all users.
Flexible Deployment: Whether you prefer using it through a web interface or integrating it into your own projects via API, our tool adapts to your needs.</p>
</Text>
    </Text>
    </Collapse>
    
    <Spacer />
    <Image.Browser url="https://monishnule.dev/Resume#projects--open-source" invert>
    <Image width="710px" height="310px" src="https://private-user-images.githubusercontent.com/115737071/316559399-d34a0e49-86ef-4817-9c97-539b8784295e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTI4MjExNjIsIm5iZiI6MTcxMjgyMDg2MiwicGF0aCI6Ii8xMTU3MzcwNzEvMzE2NTU5Mzk5LWQzNGEwZTQ5LTg2ZWYtNDgxNy05Yzk3LTUzOWI4Nzg0Mjk1ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQxMVQwNzM0MjJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNjNkYzdlMDQ3ZDA0MGMwNjFmZGU0M2U1ZWQ1ODk2NjJmYjE0MGFhNjNlNzcwODMxZGE2OGYxZGVjMzQwODgyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.33OIoA18xWChw4JzyG8QFesR6FDNm1CQlRjVdNorz8w" />
    </Image.Browser>
    <Spacer />
    <Spacer />
    <Spacer />
    <Spacer />
  
    <Image.Browser url="https://monishnule.dev/Resume#projects--open-source" invert>
    <Image width="510px" height="300px" src="https://private-user-images.githubusercontent.com/115737071/316614631-4e9c4758-3ee2-4ad3-acc4-4c1fb2f9ce96.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTI4MjEzMjYsIm5iZiI6MTcxMjgyMTAyNiwicGF0aCI6Ii8xMTU3MzcwNzEvMzE2NjE0NjMxLTRlOWM0NzU4LTNlZTItNGFkMy1hY2M0LTRjMWZiMmY5Y2U5Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQxMVQwNzM3MDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNzNjNDRlNjljMGY3ZDE5YmUxMGVlOTYzM2E0YTY5ODAyMDE4ZDM2MDgxOTUzMDQyMjZhY2NmMjMyNmVjNzFkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.KNYwZq5aFdaCzOe__LNzk0cs2FXV6xuZ5nWI5QuYUzw" />
    </Image.Browser>
    <Spacer />
    <Collapse initialVisible  shadow title="MN8 Draws Designs" subtitle="More about MN8 Draws Designs">
    <Text>
    <Text> <Text>How It Works</Text>

<p>Enter URL: Simply visit the website and input the URL you want to explore.
Retrieve Content: Our system fetches the webpage and extracts relevant information.
Generate Summary: Using advanced natural language processing (NLP) techniques, we condense the content into a brief summary.
Display Summary: Within seconds, you'll see a five-line overview of the webpage's content.
Explore Further: If you want more details, feel free to delve deeper into the provided summary or visit the original URL.</p>

<Text>Features</Text>
<p>Fast and Efficient: Get insights in seconds with minimal input.
Accurate Summaries: Leveraging cutting-edge NLP models from OpenAI ensures reliable results.
User-Friendly Interface: The application is designed for ease of use, making it accessible to all users.
Flexible Deployment: Whether you prefer using it through a web interface or integrating it into your own projects via API, our tool adapts to your needs.</p>
</Text>
    </Text>
    </Collapse>
<Spacer />
    <Divider />
    </Page>

    
    
  )
}

export default Home