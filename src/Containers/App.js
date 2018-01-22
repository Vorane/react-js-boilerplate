import React, { Component } from "react"



import styles from "../app.css"
//import screens here

export default class App extends Component {
	render() {
		return (
			//add screen inside the div
			<div>
				<h1 className={styles.header}>App</h1>				
			</div>
		)
	}
}
