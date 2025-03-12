import {ImageBackground, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import {AppColors} from "../../../theme/AppTheme";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";

function MovieDetailsScreen(){
    const [chosen, setChosen] = useState(true)

    return(
        <View style={stylesMovieDetails.mainContainer}>
            <ImageBackground source={require("../../../../../assets/images/img_pelicula.png")}
                             style={stylesMovieDetails.image}
                             resizeMode={"cover"}/>
            <LinearGradient colors={["transparent", AppColors.tertiary_dark, AppColors.tertiary_dark]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={stylesMovieDetails.mainGradientContainer}/>
            <View style={stylesMovieDetails.infoContainer}>
                <View style={stylesMovieDetails.tabContainer}>
                    <TouchableOpacity style={chosen ? stylesMovieDetails.tabContainerChosen : stylesMovieDetails.eachTab}
                                      onPress={()=> setChosen(!chosen)}>
                        <Text style={chosen ? stylesMovieDetails.tabTextChosen : stylesMovieDetails.tabText}>Ingredients</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={chosen ? stylesMovieDetails.eachTab : stylesMovieDetails.tabContainerChosen}
                                      onPress={()=> setChosen(!chosen)}>
                        <Text style={chosen ? stylesMovieDetails.tabText : stylesMovieDetails.tabTextChosen}>Steps</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ position: "relative", height: 200 }}>
                    <View style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: chosen ? 1 : 0 }}>

                    </View>

                    <View style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: chosen ? 0 : 1 , marginTop: 40}}>

                    </View>
                </View>
            </View>
        </View>
    )
}

const stylesMovieDetails = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        height:'100%',
    },
    image:{
        flex: 1,
        width:"100%",
        height:"50%",
        justifyContent:"flex-end",
    },
    mainGradientContainer:{
        position: "absolute",
        width: "100%",
        height: "100%",
        bottom: 0,
    },
    infoContainer:{
        position: "absolute",
        width: "100%",
        bottom: "6%",
        display: "flex",
        alignSelf: "center",
    },
    tabContainer:{
        backgroundColor: AppColors.bg_input_dark,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 15,
        marginTop: 13
    },
    eachTab:{
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
    },
    tabContainerChosen: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: AppColors.primary,
        borderRadius: 15,
    },
    tabText:{
        fontSize: 18,
        paddingVertical: 15
    },
    tabTextChosen:{
        fontSize: 18,
        paddingVertical: 10,
        color: AppColors.white,
    }
})
export default MovieDetailsScreen;