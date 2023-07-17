import './styles.css'
import { useEffect, useState } from 'react'
import arrowBack from '../../assets/icons/arrow_back.svg'
import chevronLeft from '../../assets/icons/chevron_left.svg'
import chevronRight from '../../assets/icons/chevron_right.svg'
import weightIcon from '../../assets/icons/weight.svg'
import straightenIcon from '../../assets/icons/straighten.svg'
import { useNavigate, useParams } from 'react-router-dom'


function BigCard () {

  const [pokemon, setPokemon] = useState();
  const {name} = useParams()
  useEffect(() => { 
    const getPokemon = async () => {
      const httpRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`); 
      const respuesta = await httpRequest.json();
      setPokemon(respuesta);
    };

    getPokemon();

  }, []);
  const navigate = useNavigate()
  const goToHome = ()=> {
  navigate('/')
 }

// const goNext = () => {
//   setId(id < pokemons.length && id + 1);
// }
// const goPrev = () => {
//   setId(id > 1 && id - 1);
// }

// function backToPokedex ()=> ROUTER TO INDEX 0

    return(
      pokemon?
        <figure>
            <header>
                <section className='headerTopContainer'>
                    <button onClick={goToHome} className="headerTopArrowBack"><img src={arrowBack} alt='back to index'/></button>
                    <h1 className='headerTopName'>{pokemon.name}</h1>
                    <span className="headerTopIdNumber"># {pokemon.id}</span>
                    {/* FALTAN CEROS ANTES DE LA ID?? */}
                </section>
                <section className="headerBottomContainer">
            <button  className='headerBottonChevron'><img src={chevronLeft} alt='go previous'/></button>
                <div className='headerBottonImage'><img className="bigCardImage" 
                src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png'}  alt={`${name} image`}/>
                </div>
                <button className='headerBottonChevron' ><img src={chevronRight} alt='go next'/></button>
            </section>
            </header>
                
            
            <main>
              <div className='typeContainer'>
             {pokemon.types.map(({type}) => <span className={`type pokemon--type-${type.name}`}>{type.name}</span>)}
              </div>
             
              <h2 className='h2'>About</h2>

              <section className="aboutOuterContainer">

                    <div className="aboutInnerContainer">
                      <div className='aboutTop'>
                        <span className='aboutIcons'><img src={weightIcon} alt='weight icon'></img></span>
                        <span className='aboutData'>{pokemon.weight/10} kg</span>
                      </div>
                      <div className='botton'>
                        <span className='aboutBottom'>Weight</span>
                      </div>
                    </div>

                    <div className="aboutInnerContainer">
                      <div className='aboutTop'>
                        <span className='aboutIcons'><img src={straightenIcon} alt='straighten icon'></img></span>
                        <span className='aboutData'>{pokemon.height/10} m</span>
                      </div>
                      <div className='botton'>
                        <span className='aboutBottom'>Height</span>
                      </div>
                    </div>

                    <div className="aboutInnerContainer">
                      <div className='aboutTop'>
                        <span className='aboutData'>3,3 kg</span>
                        <span className='aboutData'>3,3 kg</span>
                      </div>
                      <div className='botton'>
                        <span className='aboutBottom'>Moves</span>
                      </div>
                    </div>
                </section>
                
                <section className="paragraph">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Repellendus molestiae obcaecati, odio dicta qui laborum. 
                        similique eum? Ullam!</p>
                </section>
                
                <h2 className='h2'>Base Stats</h2>
                <section>
                    <div className="statsContainer">
                      <div className='statsRow'>
                      <span className='statsRowTitle'>HP</span>
                        <span className='statsRowDivider'></span>
                        <span className='statsRowValue'>{pokemon.stats[0].base_stat}</span>
                        <progress className='statsRowProgressBar' max="200" value={pokemon.stats[0].base_stat}></progress>
                      </div>
                      <div className='statsRow'>
                      <span className='statsRowTitle'>ATK</span>
                        <span className='statsRowDivider'></span>
                        <span className='statsRowValue'>060</span>
                        <progress className='statsRowProgressBar' max="200" value="60"></progress>
                      </div>
                      <div className='statsRow'>
                      <span className='statsRowTitle'>DEF</span>
                        <span className='statsRowDivider'></span>
                        <span className='statsRowValue'>060</span>
                        <progress className='statsRowProgressBar' max="200" value="60"></progress>
                      </div>
                      <div className='statsRow'>
                      <span className='statsRowTitle'>SATK</span>
                        <span className='statsRowDivider'></span>
                        <span className='statsRowValue'>060</span>
                        <progress className='statsRowProgressBar' max="200" value="60"></progress>
                      </div>
                      <div className='statsRow'>
                      <span className='statsRowTitle'>SDEF</span>
                        <span className='statsRowDivider'></span>
                        <span className='statsRowValue'>060</span>
                        <progress className='statsRowProgressBar' max="200" value="60"></progress>
                      </div>
                      <div className='statsRow'>
                      <span className='statsRowTitle'>SPD</span>
                        <span className='statsRowDivider'></span>
                        <span className='statsRowValue'>060</span>
                        <progress className='statsRowProgressBar' max="200" value="60"></progress>
                      </div>
                        
                    </div>
                </section>


            </main>
        </figure> : <h1>loading</h1>
    )
}
export default BigCard;