import React from "react";

export class OneCard extends React.Component {
	constructor() {
		super();
	}
	render() {
		const cards = [
			{
				id: 1,
				title: "Card title",
				text:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
			},
			{
				id: 2,
				title: "Card title",
				text:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
			},
			{
				id: 3,
				title: "Card title",
				text:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
			},
			{
				id: 4,
				title: "Card title",
				text:
					"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
			}
		];

		return (
			<div className="cardrow card-deck">
				{cards.map(card => {
					return (
						<div className="card" key={card.id}>
							<img
								className="card-img-top"
								src="http://placehold.it/500x325"
								alt="Card image"
							/>
							<div className="card-body text-center">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">{card.text}</p>
							</div>
							<div className="card-footer text-center">
								<a href="#" className="btn btn-primary">
									Find out more!
								</a>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
