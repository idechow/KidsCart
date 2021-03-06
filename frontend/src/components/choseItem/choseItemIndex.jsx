import React from "react"
import BoxContainer from './box_container'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { resolve } from "path";
import rice from "../../img/rice.png";
import noodles from "../../img/noodles.png";
import bread from "../../img/bread.png";
import fries from "../../img/french_fries.png";
import egg from "../../img/egg.png";
import potatoes from "../../img/potatoes.png";
import beef from "../../img/beef.png";
import chicken from "../../img/chicken.png";
import pork from "../../img/pork.png";
import shrimp from "../../img/shrimp.png";
import crab from "../../img/crab.png";
import tofu from "../../img/tofu.png";
import broccoli from "../../img/broccoli.png";
import carrot from "../../img/carrot.png";
import corn from "../../img/corn.png";
import tomato from "../../img/tomato.png";
import avocado from "../../img/avocado.png";
import greenBeen from "../../img/green_beans.png"





class ChoseItemIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: "Side",
            ASideBox: [],
            CSideBox: [],
            ISideBox: [],
            JSideBox: [],
            MSideBox: [],
            AEntreeBox: [],
            CEntreeBox: [],
            IEntreeBox: [],
            JEntreeBox: [],
            MEntreeBox: [],
            AVegBox: [],
            CVegBox: [],
            IVegBox: [],
            JVegBox: [],
            MVegBox: [],
        }
        this.switchTopBar = this.switchTopBar.bind(this)
        this.selectClassName = this.selectClassName.bind(this)
        this.addToSideBox = this.addToSideBox.bind(this)
        this.addToEntreeBox = this.addToEntreeBox.bind(this)
        this.addToVegBox = this.addToVegBox.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.submitChild = this.submitChild.bind(this)
    }


    submitChild() {
        if (this.props.type === "AMERICAN") {
            let arr = this.state.ASideBox.concat(this.state.AEntreeBox, this.state.AVegBox).map((item) => item.slice(1, item.length - 4))
            let promise = new Promise((resolve, reject) => {
                try{
                    this.props.receiveChildIngredient(arr)
                    resolve()
                } catch {
                    reject(new Error("bad bad save"))
                }
            })
            promise.then(() => {
                this.props.createAChild(this.props.child, this.props.user.id)
                .then((child) => {
                    // console.log(child.child.data)
                    this.props.history.push(`/generate-meals/${child.child.data._id}`)
                })
            })
        } else if (this.props.type === "CHINESE") {
            let arr = this.state.CSideBox.concat(this.state.CEntreeBox, this.state.CVegBox).map((item) => item.slice(1, item.length - 4))
            let promise = new Promise((resolve, reject) => {
                try {
                    this.props.receiveChildIngredient(arr)
                    resolve()
                } catch {
                    reject(new Error("bad bad save"))
                }
            })
            promise.then(() => {
                this.props.createAChild(this.props.child, this.props.user.id)
                    .then((child) => {
                        this.props.history.push(`/generate-meals/${child.child.data._id}`)
                    })
            })
        } else if (this.props.type === "ITALIAN") {
            let arr = this.state.ISideBox.concat(this.state.IEntreeBox, this.state.IVegBox).map((item) => item.slice(1, item.length - 4))
            let promise = new Promise((resolve, reject) => {
                try {
                    this.props.receiveChildIngredient(arr)
                    resolve()
                } catch {
                    reject(new Error("bad bad save"))
                }
            })
            promise.then(() => {
                this.props.createAChild(this.props.child, this.props.user.id)
                    .then((child) => {
                        this.props.history.push(`/generate-meals/${child.child.data._id}`)
                    })
            })
        } else if (this.props.type === "JAPANESE") {
            let arr = this.state.JSideBox.concat(this.state.JEntreeBox, this.state.JVegBox).map((item) => item.slice(1, item.length - 4))
            let promise = new Promise((resolve, reject) => {
                try {
                    this.props.receiveChildIngredient(arr)
                    resolve()
                } catch {
                    reject(new Error("bad bad save"))
                }
            })
            promise.then(() => {
                this.props.createAChild(this.props.child, this.props.user.id)
                    .then((child) => {
                        this.props.history.push(`/generate-meals/${child.child.data._id}`)
                    })
            })
        } else if (this.props.type === "MEXICAN") {
            let arr = this.state.MSideBox.concat(this.state.MEntreeBox, this.state.MVegBox).map((item) => item.slice(1, item.length - 4))
            let promise = new Promise((resolve, reject) => {
                try {
                    this.props.receiveChildIngredient(arr)
                    resolve()
                } catch {
                    reject(new Error("bad bad save"))
                }
            })
            promise.then(() => {
                this.props.createAChild(this.props.child, this.props.user.id)
                    .then((child) => {
                        console.log(child.data)
                        this.props.history.push(`/generate-meals/${child.child.data._id}`)
                    })
            })
        }
    }

    deleteItem(filed,index) {
       let newBox = this.state[filed].filter((item, idx) => idx !== index)
       this.setState({
           [filed]: newBox
       })
    }



    switchTopBar(e) {
        this.setState({
            current: e.target.innerText
        })
    }

    selectClassName(className) {
        if (className === this.state.current) {
            return "bar-text-select"
        } else {
            return "bar-text"
        }
    }

    addToVegBox(e) {
        // let src = e.target.src.slice(21)
        let src = e.target.src;
        if (this.props.typeFood === "AMERICAN") {
            if(this.state.AVegBox.length < 2) {
                this.setState({
                    AVegBox: this.state.AVegBox.concat(src)
                })
            }
        } else if (this.props.typeFood === "CHINESE") {
            if (this.state.CVegBox.length < 2) {
                this.setState({
                    CVegBox: this.state.CVegBox.concat(src)
                })
            }
        } else if (this.props.typeFood === "ITALIAN") {
            if (this.state.IVegBox.length < 2) {
                this.setState({
                    IVegBox: this.state.IVegBox.concat(src)
                })
            }
        } else if (this.props.typeFood === "JAPANESE") {
            if (this.state.JVegBox.length < 2) {
                this.setState({
                    JVegBox: this.state.JVegBox.concat(src)
                })
            }
        } else if (this.props.typeFood === "MEXICAN") {
            if (this.state.MVegBox.length < 2) {
                this.setState({
                    MVegBox: this.state.MVegBox.concat(src)
                })
            }
        }
    }

    addToEntreeBox(e) {
        // let src = e.target.src.slice(21)
        let src =e.target.src;
        if (this.props.typeFood === "AMERICAN") {
            if (this.state.AEntreeBox.length < 2) {
                this.setState({
                    AEntreeBox: this.state.AEntreeBox.concat(src)
                })
            }
        } else if (this.props.typeFood === "CHINESE") {
            if (this.state.CEntreeBox.length < 2) {
                this.setState({
                    CEntreeBox: this.state.CEntreeBox.concat(src)
                })
            }
        } else if (this.props.typeFood === "ITALIAN") {
            if (this.state.IEntreeBox.length < 2) {
                this.setState({
                    IEntreeBox: this.state.IEntreeBox.concat(src)
                })
            }
        } else if (this.props.typeFood === "JAPANESE") {
            if (this.state.JEntreeBox.length < 2) {
                this.setState({
                    JEntreeBox: this.state.JEntreeBox.concat(src)
                })
            }
        } else if (this.props.typeFood === "MEXICAN") {
            if (this.state.MEntreeBox.length < 2) {
                this.setState({
                    MEntreeBox: this.state.MEntreeBox.concat(src)
                })
            }
        }
    }

    addToSideBox(e) {

        // let src = e.target.src.slice(21)
        let src = e.target.src
        // console.log(src)
        
        if (this.props.typeFood === "AMERICAN") {
            if (this.state.ASideBox.length < 2) {
                this.setState({
                    ASideBox: this.state.ASideBox.concat(src)
                })
            }
        } else if (this.props.typeFood === "CHINESE") {
            if (this.state.CSideBox.length < 2) {
                this.setState({
                    CSideBox: this.state.CSideBox.concat(src)
                })
            }
        } else if (this.props.typeFood === "ITALIAN") {
            if (this.state.ISideBox.length < 2) {
                this.setState({
                    ISideBox: this.state.ISideBox.concat(src)
                })
            }
        } else if (this.props.typeFood === "JAPANESE") {
            if (this.state.JSideBox.length < 2) {
                this.setState({
                    JSideBox: this.state.JSideBox.concat(src)
                })
            }
        } else if (this.props.typeFood === "MEXICAN") {
            if (this.state.MSideBox.length < 2) {
                this.setState({
                    MSideBox: this.state.MSideBox.concat(src)
                })
            }
        }
    }

    showDropDown() {
        if (this.state.current === "Side") {
            return (
                <div>
                    <div className="drop-down-box-item">
                        <div className="food-dropdown-item">
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/rice.png'} className="food-img" onClick={this.addToSideBox} /> */}
                            <img alt='' src={rice} className="food-img" onClick={this.addToSideBox} />
                            <p>Rice</p>
                        </div>
                        <div className="food-dropdown-item">
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/noodles.png'} className="food-img" onClick={this.addToSideBox} /> */}
                            <img alt='' src={noodles} className="food-img" onClick={this.addToSideBox} />
                            <p>Noodles</p>
                        </div>
                        <div className="food-dropdown-item">
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/bread.png'} className="food-img" onClick={this.addToSideBox} /> */}
                            <img alt='' src={bread} className="food-img" onClick={this.addToSideBox} />
                            <p>Bread</p>
                        </div>
                        <div className="food-dropdown-item">
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/french_fries.png'} className="food-img" onClick={this.addToSideBox} /> */}
                            <img alt='' src={fries} className="food-img" onClick={this.addToSideBox} />
                            <p>Fries</p>
                        </div>
                    </div>
                    <div className="drop-down-box-item">
                        <div className="food-dropdown-item" >
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/egg.png'} className="food-img" onClick={this.addToSideBox} /> */}
                            <img alt='' src={egg} className="food-img" onClick={this.addToSideBox} />
                            <p>Egg</p>
                        </div>
                        <div className="food-dropdown-item" >
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/potatoes.png'} className="food-img" onClick={this.addToSideBox} /> */}
                            <img alt='' src={potatoes} className="food-img" onClick={this.addToSideBox} />
                            <p>Potatoes</p>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.current === "Entree") {
            return (
                <div>
                    <div className="drop-down-box-item">
                        <div className="food-dropdown-item" >
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/beef.png'} className="food-img" onClick={this.addToEntreeBox} /> */}
                            <img alt='' src={beef} className="food-img" onClick={this.addToEntreeBox} />
                            <p>Beef</p>
                        </div>
                        <div className="food-dropdown-item" >
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/chicken.png'} className="food-img" onClick={this.addToEntreeBox} /> */}
                            <img alt='' src={chicken} className="food-img" onClick={this.addToEntreeBox} />
                            <p>Chicken</p>
                        </div>
                        <div className="food-dropdown-item" >
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/pork.png'} className="food-img" onClick={this.addToEntreeBox} /> */}
                            <img alt='' src={pork} className="food-img" onClick={this.addToEntreeBox} />
                            <p>Pork</p>
                        </div>
                        <div className="food-dropdown-item" >
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/shrimp.png'} className="food-img" onClick={this.addToEntreeBox} /> */}
                            <img alt='' src={shrimp} className="food-img" onClick={this.addToEntreeBox} />
                            <p>Shrimp</p>
                        </div>
                    </div>
                    <div className="drop-down-box-item">
                        <div className="food-dropdown-item" >
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/crab.png'} className="food-img" onClick={this.addToEntreeBox} /> */}
                            <img alt='' src={crab} className="food-img" onClick={this.addToEntreeBox} />
                            <p>Crab</p>
                        </div>
                        <div className="food-dropdown-item" >
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/tofu.png'} className="food-img" onClick={this.addToEntreeBox} /> */}
                            <img alt='' src={tofu} className="food-img" onClick={this.addToEntreeBox} />
                            <p>Tofu</p>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.current === "Vegetable") {
            return (
                <div>
                    <div className="drop-down-box-item">
                        <div className="food-dropdown-item">
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/broccoli.png'} className="food-img" onClick={this.addToVegBox}/> */}
                            <img alt='' src={broccoli} className="food-img" onClick={this.addToVegBox}/>
                            <p>Broccoli</p>
                        </div>
                        <div className="food-dropdown-item">
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/carrot.png'} className="food-img" onClick={this.addToVegBox} /> */}
                            <img alt='' src={carrot} className="food-img" onClick={this.addToVegBox} />
                            <p>Carrot</p>
                        </div>
                        <div className="food-dropdown-item">
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/green_beans.png'} className="food-img" onClick={this.addToVegBox} /> */}
                            <img alt='' src={greenBeen} className="food-img" onClick={this.addToVegBox} />
                            <p>Green Bean</p>
                        </div>
                        <div className="food-dropdown-item">
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/corn.png'} className="food-img" onClick={this.addToVegBox} /> */}
                            <img alt='' src={corn} className="food-img" onClick={this.addToVegBox} />
                            <p>Corn </p>
                        </div>
                    </div>
                    <div className="drop-down-box-item">
                        <div className="food-dropdown-item">
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" onClick={this.addToVegBox} /> */}
                            <img alt='' src={avocado} className="food-img" onClick={this.addToVegBox} />
                            <p>Avocado</p>
                        </div>
                        <div className="food-dropdown-item">
                            {/* <img alt='' src={process.env.PUBLIC_URL + '/tomato.png'} className="food-img" onClick={this.addToVegBox} /> */}
                            <img alt='' src={tomato} className="food-img" onClick={this.addToVegBox} />
                            <p>Tomato</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="lunch-box-title">What type of food or ingredients are you craving this week?</div>
                <div className="top-container">
                    <div className="top-title">
                        <div onClick={this.switchTopBar} className={this.selectClassName("Side")}>Side</div>
                        <div onClick={this.switchTopBar} className={this.selectClassName("Entree")}>Entree</div>
                        <div onClick={this.switchTopBar} className={this.selectClassName("Vegetable")}>Vegetable</div>
                    </div>
                    <div className="drop-down-box">{this.showDropDown()}</div>
                </div>
                <BoxContainer 
                deleteItem={this.deleteItem}
                ASideBox={this.state.ASideBox}
                CSideBox={this.state.CSideBox}
                ISideBox={this.state.ISideBox}
                JSideBox={this.state.JSideBox}
                MSideBox={this.state.MSideBox}
                AEntreeBox={this.state.AEntreeBox}
                CEntreeBox={this.state.CEntreeBox}
                IEntreeBox={this.state.IEntreeBox}
                JEntreeBox={this.state.JEntreeBox}
                MEntreeBox={this.state.MEntreeBox}
                AVegBox={this.state.AVegBox}
                CVegBox={this.state.CVegBox}
                IVegBox={this.state.IVegBox}
                JVegBox={this.state.JVegBox}
                MVegBox={this.state.MVegBox}
                />
                <div className="next-button">
                 <button className="gender-button" style={{ width: "25%" }} onClick={this.submitChild}>Next</button>
                </div>
            </div>
        )
    }

}


const mapStateToProps = state => ({
    typeFood: state.ui.lunchType
});

export default withRouter(connect(
    mapStateToProps,
    null
)(ChoseItemIndex));