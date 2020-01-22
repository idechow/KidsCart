import React from "react"
import BoxContainer from './box_container'
import { connect } from 'react-redux';
import { withRouter } from 'react-router'


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
        let src = e.target.src.slice(21)
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
        let src = e.target.src.slice(21)
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
        let src = e.target.src.slice(21)
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
                            <img src={process.env.PUBLIC_URL + '/rice.png'} className="food-img" onClick={this.addToSideBox} />
                            <p>Rice</p>
                        </div>
                        <div className="food-dropdown-item">
                            <img src={process.env.PUBLIC_URL + '/noodles.png'} className="food-img" onClick={this.addToSideBox} />
                            <p>Noodles</p>
                        </div>
                        <div className="food-dropdown-item">
                            <img src={process.env.PUBLIC_URL + '/bread.png'} className="food-img" onClick={this.addToSideBox} />
                            <p>Bread</p>
                        </div>
                        <div className="food-dropdown-item">
                            <img src={process.env.PUBLIC_URL + '/French_fries.png'} className="food-img" onClick={this.addToSideBox} />
                            <p>Fries</p>
                        </div>
                    </div>
                    <div className="drop-down-box-item">
                        <div className="food-dropdown-item" >
                            <img src={process.env.PUBLIC_URL + '/egg.png'} className="food-img" onClick={this.addToSideBox} />
                            <p>Egg</p>
                        </div>
                        <div className="food-dropdown-item" >
                            <img src={process.env.PUBLIC_URL + '/potatoes.png'} className="food-img" onClick={this.addToSideBox} />
                            <p>Potatoes</p>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.current === "Entree") {
            return (
                <div className="drop-down-box-item">
                    <div className="food-dropdown-item" >
                        <img src={process.env.PUBLIC_URL + '/beef.png'} className="food-img" onClick={this.addToEntreeBox} />
                        <p>Beef</p>
                    </div>
                    <div className="food-dropdown-item" >
                        <img src={process.env.PUBLIC_URL + '/chicken.png'} className="food-img" onClick={this.addToEntreeBox} />
                        <p>Chicken</p>
                    </div>
                    <div className="food-dropdown-item" >
                        <img src={process.env.PUBLIC_URL + '/pork.png'} className="food-img" onClick={this.addToEntreeBox} />
                        <p>Pork</p>
                    </div>
                    <div className="food-dropdown-item" >
                        <img src={process.env.PUBLIC_URL + '/shrimp.png'} className="food-img" onClick={this.addToEntreeBox} />
                        <p>Shrimp</p>
                    </div>
                </div>
            )
        } else if (this.state.current === "Vegetable") {
            return (
                <div>
                    <div className="drop-down-box-item">
                        <div className="food-dropdown-item">
                            <img src={process.env.PUBLIC_URL + '/broccoli.png'} className="food-img" />
                            <p>Broccoli</p>
                        </div>
                        <div className="food-dropdown-item">
                            <img src={process.env.PUBLIC_URL + '/carrot.png'} className="food-img" onClick={this.addToVegBox} />
                            <p>Carrot</p>
                        </div>
                        <div className="food-dropdown-item">
                            <img src={process.env.PUBLIC_URL + '/green_beans.png'} className="food-img" onClick={this.addToVegBox} />
                            <p>Green Bean</p>
                        </div>
                        <div className="food-dropdown-item">
                            <img src={process.env.PUBLIC_URL + '/corn.png'} className="food-img" onClick={this.addToVegBox} />
                            <p>Corn </p>
                        </div>
                    </div>
                    <div className="drop-down-box-item">
                        <div className="food-dropdown-item">
                            <img src={process.env.PUBLIC_URL + '/avocado.png'} className="food-img" onClick={this.addToVegBox} />
                            <p>Avocado</p>
                        </div>
                        <div className="food-dropdown-item">
                            <img src={process.env.PUBLIC_URL + '/tomato.png'} className="food-img" onClick={this.addToVegBox} />
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