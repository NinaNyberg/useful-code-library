// a tiny line of code to conditionally add an "s" at the end of the word if it is plural

{
  <>
    {example.age} Year{example.age !== 1 ? 's' : ''}
  </>;
}
