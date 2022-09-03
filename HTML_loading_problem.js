// This code solves the problem of HTML not loading before JavaScript

window.addEventListener('load', async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 20);
  });
  //   console.log(game()); <--- YOUR JS FUNCTION HERE
});
