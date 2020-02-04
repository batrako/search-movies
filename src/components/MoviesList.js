import React, { Component } from 'react'
import { Movie } from './Movie'
import propTypes from 'prop-types'

export class MovieList extends Component {
    static propTypes = {
        movies: propTypes.array
    }
    render(){
        const { movies }  = this.props
        return (
            <div className='MoviesList'>
                {
                    movies.map(movie => {
                        return (
                            <div key={movie.imdbID} className='MoviesList-item'>
                                <Movie 
                                    title={movie.Title}
                                    year={movie.Year}
                                    poster={movie.Poster}
                        />
                            </div>
                        )
                    })                
                }

            </div>
        )
    }
}
