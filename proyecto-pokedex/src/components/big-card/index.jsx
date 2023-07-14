import './styles.css'
import { useEffect, useState } from 'react'
import arrowBack from '../../assets/arrow_back.svg'
import chevronLeft from '../../assets/chevron_left.svg'
import chevronRight from '../../assets/chevron_right.svg'



const pesa = <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.78333 13.0001H12.55L11.5 5.66675H4.83333L3.78333 13.0001ZM8.16667 4.66675C8.45556 4.66675 8.69444 4.56953 8.88333 4.37508C9.07222 4.18064 9.16667 3.94453 9.16667 3.66675C9.16667 3.37786 9.07222 3.13897 8.88333 2.95008C8.69444 2.76119 8.45556 2.66675 8.16667 2.66675C7.88889 2.66675 7.65278 2.76119 7.45833 2.95008C7.26389 3.13897 7.16667 3.37786 7.16667 3.66675C7.16667 3.94453 7.26389 4.18064 7.45833 4.37508C7.65278 4.56953 7.88889 4.66675 8.16667 4.66675ZM9.9 4.66675H11.5C11.7556 4.66675 11.9778 4.7473 12.1667 4.90841C12.3556 5.06953 12.4667 5.27786 12.5 5.53341L13.5333 12.8667C13.5778 13.1667 13.5028 13.4306 13.3083 13.6584C13.1139 13.8862 12.8611 14.0001 12.55 14.0001H3.78333C3.47222 14.0001 3.21945 13.8862 3.025 13.6584C2.83056 13.4306 2.75556 13.1667 2.8 12.8667L3.83333 5.53341C3.86667 5.27786 3.97778 5.06953 4.16667 4.90841C4.35556 4.7473 4.57778 4.66675 4.83333 4.66675H6.43333C6.34444 4.51119 6.27778 4.35286 6.23333 4.19175C6.18889 4.03064 6.16667 3.85564 6.16667 3.66675C6.16667 3.11119 6.36111 2.63897 6.75 2.25008C7.13889 1.86119 7.61111 1.66675 8.16667 1.66675C8.72222 1.66675 9.19444 1.86119 9.58333 2.25008C9.97222 2.63897 10.1667 3.11119 10.1667 3.66675C10.1667 3.85564 10.1444 4.03064 10.1 4.19175C10.0556 4.35286 9.98889 4.51119 9.9 4.66675ZM3.78333 13.0001H12.55H3.78333Z" fill="#1D1D1D"/>
</svg>
const regla = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2.33325C4 2.06659 4.1 1.83325 4.3 1.63325C4.5 1.43325 4.73333 1.33325 5 1.33325L11 1.33325C11.2556 1.33325 11.4861 1.43325 11.6917 1.63325C11.8972 1.83325 12 2.06659 12 2.33325V13.6666C12 13.9333 11.8972 14.1666 11.6917 14.3666C11.4861 14.5666 11.2556 14.6666 11 14.6666H5C4.73333 14.6666 4.5 14.5666 4.3 14.3666C4.1 14.1666 4 13.9333 4 13.6666L4 2.33325ZM5 2.33325L5 13.6666H11V11.4999H8V10.4999H11V8.49992H8V7.49992H11V5.49992H8V4.49992H11V2.33325L5 2.33325ZM8 4.49992V5.49992V4.49992ZM8 7.49992V8.49992V7.49992ZM8 10.4999V11.4999V10.4999Z" fill="#1D1D1D"/>
</svg>

function BigCard ({id}) {

  const [pokemon, setPokemon] = useState({});
  
  useEffect(() => { 
    const getPokemon = async () => {
      const httpRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); 
      const respuesta = await httpRequest.json();
      setPokemon(respuesta);
    };

    getPokemon();

  }, []);

  
// let range = pokemon.stats[0].base_stat
let weight = pokemon.weight
let height = pokemon.height

    return(
        <figure>
            <header>
                <section className='headerTopContainer'>
                    <button className="headerTopArrowBack"><img src={arrowBack}></img></button>
                    <h1 className='headerTopName'>{pokemon.name}</h1>
                    <span className="headerTopIdNumber">{id}</span>
                </section>
                <section className="headerBottomContainer">
            <button className='headerBottonChevron'><img src={chevronLeft}></img></button>
                <div className='headerBottonImage'><img className="image" 
                src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + id + '.png'} alt="" /></div>
                <button className='headerBottonChevron'><img src={chevronRight}></img></button>
            </section>
            </header>
                
            
            <main>
              <div className='typeContainer'>
                <span className="type">Electric</span>
                <span className="type">Electric</span>
              </div>
                
              <h2 className='h2'>About</h2>

              <section className="aboutOuterContainer">

                    <div className="aboutInnerContainer">
                      <div className='aboutTop'>
                        <span className='aboutIcons'>{pesa} </span>
                        <span className='aboutData'>{weight} kg</span>
                      </div>
                      <div className='botton'>
                        <span className='aboutBottom'>Weight</span>
                      </div>
                    </div>

                    <div className="aboutInnerContainer">
                      <div className='aboutTop'>
                        <span className='aboutIcons'>{regla} </span>
                        <span className='aboutData'>{height} m</span>
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
                        <span className='statsRowValue'>cc</span>
                        <progress className='statsRowProgressBar' max="200" value="cc"></progress>
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
        </figure>
    )
}
export default BigCard;