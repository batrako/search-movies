import React, { Component } from 'react'
import Proptypes from 'prop-types'

export class Movie extends Component {
    static propTypes = {
        title: Proptypes.string,
        year: Proptypes.string,
        poster: Proptypes.string
    }
    render () {
        const { title, year , poster} = this.props
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image">
                        <img 
                            src={poster} alt={title}
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}}</p>
                            <p className="subtitle is-6">{year}}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}