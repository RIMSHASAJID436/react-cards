import Card from "./components/card";
function Cards(){
return(
  <>
  <div 
  style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'sans-serif',

  }}
  >
  <Card 
  button='💡'
  h3='Instant Server Start'
  p='On demand file serving over native ESM, no bundling required!'
  />
  <Card
  button='⚡️'
  h3='Lightning Fast HMR'
  p='Hot Module Replacement (HMR) that stays fast regardless of app size.'
  />
  <Card
  button='🛠️'
  h3='Rich Features'
  p='Out-of-the-box support for TypeScript, JSX, CSS and more.'
  />
  </div>
  <div 
  style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'sans-serif',

  }}
  >
  <Card 
  button='📦'
  h3='Optimized Build' 
  p='Pre-configured Rollup build with multi-page and library mode support.'
  />
  <Card
    button='🔩'
    h3='Universal Plugins'
    p='Rollup-superset plugin interface shared between dev and build.' />
  <Card
    button='🔑'
    h3='Fully Typed APIs'
    p='Flexible programmatic APIs with full TypeScript typing.' />
  </div>
  </> 
)
}

export default Cards;
