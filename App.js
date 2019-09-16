import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Button } from 'react-native';
import {Entypo}  from '@expo/vector-icons';
const itemContainer = new Array(9).fill("empty");

export default class App extends React.Component{

  constructor(props) {
     super(props) ;
     this.state = {
       isCross :false,
       winMessage :""
     }
  }
  
  drawItem = (itemNumber) => {
    if (itemContainer[itemNumber] === "empty")
    itemContainer[itemNumber] = this.state.isCross;
    this.setState ({
      isCross : !itemContainer[itemNumber]
    },()=> {});

    this.winGame()
  } ;
   chooseItemIcon= (itemNumber) => {
     if(itemContainer[itemNumber] !== "empty")
     {
       return itemContainer[itemNumber] ? "cross" : "circle";
     }
     return "pencil";
  };

  chooseItemColor = (itemNumber) => {
    if (itemContainer[itemNumber] !== "empty")
    {
      return itemContainer[itemNumber] ? "red" : "green";
    }
    return "black";
  };

  resetGame = ()=> {
    itemContainer.fill("empty");
    this.setState({
      winMessage : "",
    })
  this.forceUpdate() ;
};

  winGame = () => {
    if ( (itemContainer[0] !== "empty" ) && (itemContainer[0]== itemContainer[1]) && ( itemContainer[1] == itemContainer[2] ) ){
          this.setState({
              winMessage : (itemContainer[0] ? "cross" : "circle").concat("won")
          })
        }

      else if ( (itemContainer[3] !== "empty" ) && (itemContainer[3]== itemContainer[4]) && ( itemContainer[4] == itemContainer[5] ) ){
        this.setState({
            winMessage : (itemContainer[3] ? "cross" : "circle").concat("won")
        })
      }
      else if ( (itemContainer[6] !== "empty" ) && (itemContainer[6]== itemContainer[7]) && ( itemContainer[7] == itemContainer[8] ) ){
        this.setState({
            winMessage : (itemContainer[6] ? "cross" : "circle").concat("won")
        })
      }
     else if ( (itemContainer[0] !== "empty" ) && (itemContainer[0]== itemContainer[3]) && ( itemContainer[3] == itemContainer[6] ) ){
        this.setState({
            winMessage : (itemContainer[0] ? "cross" : "circle").concat("won")
        })
      }
      else if ( (itemContainer[1] !== "empty" ) && (itemContainer[1]== itemContainer[4]) && ( itemContainer[4] == itemContainer[7] ) ){
        this.setState({
            winMessage : (itemContainer[1] ? "cross" : "circle").concat("won")
        })
      }
      else if ( (itemContainer[2] !== "empty" ) && (itemContainer[2]== itemContainer[5]) && ( itemContainer[5] == itemContainer[8] ) ){
        this.setState({
            winMessage : (itemContainer[2] ? "cross" : "circle").concat("won")
        })
      }
      else if ( (itemContainer[0] !== "empty" ) && (itemContainer[0]== itemContainer[4]) && ( itemContainer[4] == itemContainer[8] ) ){
        this.setState({
            winMessage : (itemContainer[0] ? "cross" : "circle").concat("won")
        })
      }
      else if ( (itemContainer[2] !== "empty" ) && (itemContainer[2]== itemContainer[4]) && ( itemContainer[4] == itemContainer[6] ) ){
        this.setState({
            winMessage : (itemContainer[2] ? "cross" : "circle").concat(" win the game")
        })
      }
      
  }

  render() {
    return (
      <View style={ styles.container }>
          <View style= {styles.grid}>
              <View style={styles.row}>
                  <View style={styles.item}>
                      <TouchableOpacity
                          onPress={()=> this.drawItem(0)}
                      >
                         <Entypo 
                              name= {this.chooseItemIcon(0)}
                              size={50}
                              color={this.chooseItemColor(0)}
                         />
                      </TouchableOpacity>
                  </View>    

                  <View style={styles.item}>
                      <TouchableOpacity
                          onPress={()=> this.drawItem(1)}
                      >
                         <Entypo 
                              name= {this.chooseItemIcon(1)}
                              size={50}
                              color={this.chooseItemColor(1)}
                         />
                      </TouchableOpacity>
                  </View>

                  <View style={styles.item}>
                      <TouchableOpacity
                          onPress={()=> this.drawItem(2)}
                      >
                         <Entypo 
                              name= {this.chooseItemIcon(2)}
                              size={50}
                              color={this.chooseItemColor(2)}
                         />
                      </TouchableOpacity>
                  </View>
              </View>

              <View style={styles.row}>
                  <View style={styles.item}>
                      <TouchableOpacity
                          onPress={()=> this.drawItem(3)}
                      >
                         <Entypo 
                              name= {this.chooseItemIcon(3)}
                              size={50}
                              color={this.chooseItemColor(3)}
                         />
                      </TouchableOpacity>
                  </View>    

                  <View style={styles.item}>
                      <TouchableOpacity
                          onPress={()=> this.drawItem(4)}
                      >
                         <Entypo 
                              name= {this.chooseItemIcon(4)}
                              size={50}
                              color={this.chooseItemColor(4)}
                         />
                      </TouchableOpacity>
                  </View>

                  <View style={styles.item}>
                      <TouchableOpacity
                          onPress={()=> this.drawItem(5)}
                      >
                         <Entypo 
                              name= {this.chooseItemIcon(5)}
                              size={50}
                              color={this.chooseItemColor(5)}
                         />
                      </TouchableOpacity>
                  </View>
              </View>

              <View style={styles.row}>
                  <View style={styles.item}>
                      <TouchableOpacity
                          onPress={()=> this.drawItem(6)}
                      >
                         <Entypo 
                              name= {this.chooseItemIcon(6)}
                              size={50}
                              color={this.chooseItemColor(6)}
                         />
                      </TouchableOpacity>
                  </View>    

                  <View style={styles.item}>
                      <TouchableOpacity
                          onPress={()=> this.drawItem(7)}
                      >
                         <Entypo 
                              name= {this.chooseItemIcon(7)}
                              size={50}
                              color={this.chooseItemColor(7)}
                         />
                      </TouchableOpacity>
                  </View>

                  <View style={styles.item}>
                      <TouchableOpacity
                          onPress={()=> this.drawItem(8)}
                      >
                         <Entypo 
                              name= {this.chooseItemIcon(8)}
                              size={50}
                              color={this.chooseItemColor(8)}
                         />
                      </TouchableOpacity>
                  </View>
              </View>
              
              <Text style={styles.winMessage} >{this.state.winMessage} </Text>
          </View>
          <Button style={styles.button} onPress={this.resetGame} title="reset Game"> </Button>
          <TouchableOpacity  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"                                                                                                                                               ,
  },
  grid: {

  },
  row: {
    flexDirection: 'row',
  },
  item: {
     borderWidth: 2,
     borderColor: "#000",
     borderRadius: 2,
     padding: 30,
  },
  winMessage: {
    padding: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    margin: 20,
    padding: 10,

  },
  btnText: {
    color: "#FFF",
    fontWeight: "bold",

  }
})

