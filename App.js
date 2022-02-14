import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Switch } from "react-native-paper"

export default function App() {
    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 25 }}>
                <Text style={styles.largeText}>Settings</Text>
                <TextInput style={styles.textInput} placeholder="Search" />
                <TouchableOpacity style={styles.rectangle}>
                    <View style={styles.circle}>
                        <Text style={{ marginLeft: 12.5, marginTop: 12.5 }}>JC</Text>
                    </View>
                    <View>
                        <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 24 }}>
                            Jung Choi
                        </Text>
                        <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 14 }}>
                            Apple ID, iCloud, Media & Puchases
                        </Text>
                    </View>
                    <Text style={{ marginLeft: "auto", marginTop: 15 }}></Text>
                </TouchableOpacity>
                <View
                    style={{
                        marginTop: 50,
                        backgroundColor: "white",
                        padding: 12.5,
                        borderRadius: 10,
                        flexDirection: "row",
                    }}
                >
                    <View
                        style={{
                            height: 25,
                            width: 25,
                            borderRadius: 7.5,
                            backgroundColor: "#F79630",
                        }}
                    >
                        <Ionicons
                            name="airplane"
                            color="#FFF"
                            size={20}
                            style={{ marginLeft: 3, marginTop: 2 }}
                        />
                    </View>
                    <Text style={{ marginLeft: 3, fontWeight: "bold" }}>
                        Airplane Mode
                    </Text>
                    <Switch style={{ marginLeft: 200 }}></Switch>
                </View>

                <View
                    style={{
                        marginTop: -12.5,
                        backgroundColor: "white",
                        padding: 12.5,
                        borderRadius: 10,
                        flexDirection: "row",
                    }}
                >
                    <View
                        style={{
                            height: 25,
                            width: 25,
                            borderRadius: 7.5,
                            backgroundColor: "#3478F6",
                        }}
                    >
                        <AntDesign
                            name="wifi"
                            color="#FFF"
                            size={20}
                            style={{ marginLeft: 3, marginTop: 2 }}
                        />
                    </View>
                    <Text style={{ marginLeft: 3, fontWeight: "bold" }}>
                        Wi-Fi
                    </Text>
                    <Text style={{ color: "gray", marginLeft: 200 }}>NotYourWifi</Text>
                    <Entypo
                        name="chevron-right"
                        color="#C0C0C0"
                        size={20}
                        style={{ marginLeft: 3, marginTop: 2 }}
                    />
                </View>


                <View
                    style={{
                        marginTop: -12.5,
                        backgroundColor: "white",
                        padding: 12.5,
                        borderRadius: 10,
                        flexDirection: "row",
                    }}
                >
                    <View
                        style={{
                            height: 25,
                            width: 25,
                            borderRadius: 7.5,
                            backgroundColor: "#3478F6",
                        }}
                    >
                        <Ionicons
                            name="bluetooth"
                            color="#FFF"
                            size={20}
                            style={{ marginLeft: 3, marginTop: 2 }}
                        />
                    </View>
                    <Text style={{ marginLeft: 3, fontWeight: "bold" }}>
                        Bluetooth
                    </Text>
                    <Text style={{ color: "gray", marginLeft: 170 }}>Not Connected</Text>
                    <Entypo
                        name="chevron-right"
                        color="#D0D0D0"
                        size={20}
                        style={{ marginLeft: 3, marginTop: 2 }}
                    />
                </View>


                <View
                    style={{
                        marginTop: -12.5,
                        backgroundColor: "white",
                        padding: 12.5,
                        borderRadius: 10,
                        flexDirection: "row",
                    }}
                >
                    <View
                        style={{
                            height: 25,
                            width: 25,
                            borderRadius: 7.5,
                            backgroundColor: "#65C466",
                        }}
                    >
                        <MaterialCommunityIcons
                            name="radio-tower"
                            color="#FFF"
                            size={20}
                            style={{ marginLeft: 3, marginTop: 2 }}
                        />
                    </View>
                    <Text style={{ marginLeft: 3, fontWeight: "bold" }}>
                        Cellular
                    </Text>
                    <Entypo
                        name="chevron-right"
                        color="#D0D0D0"
                        size={20}
                        style={{ marginLeft: 260, marginTop: 2 }}
                    />
                </View>


                <View
                    style={{
                        marginTop: -12.5,
                        backgroundColor: "white",
                        padding: 12.5,
                        borderRadius: 10,
                        flexDirection: "row",
                    }}
                >
                    <View
                        style={{
                            height: 25,
                            width: 25,
                            borderRadius: 7.5,
                            backgroundColor: "#3478F6",
                        }}
                    >
                        <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 12, color: 'white' }}>
                            VPN
                        </Text>
                    </View>
                    <Text style={{ marginLeft: 3, fontWeight: "bold" }}>
                        VPN
                    </Text>
                    <Switch style={{ marginLeft: 260 }}></Switch>
                </View>

                <View
                    style={{
                        marginTop: 40,
                        backgroundColor: "white",
                        padding: 12.5,
                        borderRadius: 10,
                        flexDirection: "row",
                    }}
                >
                    <View
                        style={{
                            height: 25,
                            width: 25,
                            borderRadius: 7.5,
                            backgroundColor: "#3478F6",
                        }}
                    >
                        <Ionicons
                            name="notifications"
                            color="#FFF"
                            size={20}
                            style={{ marginLeft: 3, marginTop: 2 }}
                        />
                    </View>
                    <Text style={{ marginLeft: 3, fontWeight: "bold" }}>
                        Notifications
                    </Text>
                    <Entypo
                        name="chevron-right"
                        color="#D0D0D0"
                        size={20}
                        style={{ marginLeft: 200, marginTop: 2 }}
                    />
                </View>

                <View
                    style={{
                        marginTop: -12.5,
                        backgroundColor: "white",
                        padding: 12.5,
                        borderRadius: 10,
                        flexDirection: "row",
                    }}
                >
                    <View
                        style={{
                            height: 25,
                            width: 25,
                            borderRadius: 7.5,
                            backgroundColor: "#EA4459",
                        }}
                    >
                        <AntDesign
                            name="sound"
                            color="#FFF"
                            size={20}
                            style={{ marginLeft: 3, marginTop: 2 }}
                        />
                    </View>
                    <Text style={{ marginLeft: 3, fontWeight: "bold" }}>
                        Sound & Haptics
                    </Text>
                    <Entypo
                        name="chevron-right"
                        color="#D0D0D0"
                        size={20}
                        style={{ marginLeft: 200, marginTop: 2 }}
                    />
                </View>

                <View
                    style={{
                        marginTop: -12.5,
                        backgroundColor: "white",
                        padding: 12.5,
                        borderRadius: 10,
                        flexDirection: "row",
                    }}
                >
                    <View
                        style={{
                            height: 25,
                            width: 25,
                            borderRadius: 7.5,
                            backgroundColor: "#5756CE",
                        }}
                    >
                        <Ionicons
                            name="moon"
                            color="#FFF"
                            size={20}
                            style={{ marginLeft: 3, marginTop: 2 }}
                        />
                    </View>
                    <Text style={{ marginLeft: 3, fontWeight: "bold" }}>
                        Focus
                    </Text>
                    <Entypo
                        name="chevron-right"
                        color="#D0D0D0"
                        size={20}
                        style={{ marginLeft: 250, marginTop: 2 }}
                    />
                </View>


                <View
                    style={{
                        marginTop: -12.5,
                        backgroundColor: "white",
                        padding: 12.5,
                        borderRadius: 10,
                        flexDirection: "row",
                    }}
                >
                    <View
                        style={{
                            height: 25,
                            width: 25,
                            borderRadius: 7.5,
                            backgroundColor: "#5756CE",
                        }}
                    >
                        <Ionicons
                            name="hourglass"
                            color="#FFF"
                            size={20}
                            style={{ marginLeft: 3, marginTop: 2 }}
                        />
                    </View>
                    <Text style={{ marginLeft: 3, fontWeight: "bold" }}>
                        Screen Time
                    </Text>
                    <Entypo
                        name="chevron-right"
                        color="#D0D0D0"
                        size={20}
                        style={{ marginLeft: 220, marginTop: 2 }}
                    />
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F0F0",
        paddingTop: Constants.statusBarHeight,
    },

    largeText: {
        fontWeight: "bold",
        fontSize: 36,
    },

    textInput: {
        backgroundColor: "lightgray",
        marginTop: 10,
        padding: 5,
        borderRadius: 10,
    },

    rectangle: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 20,
        marginTop: 15,
        borderRadius: 10,
    },

    circle: {
        backgroundColor: "lightgray",
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        justifyContent: "center",
        alignItems: "center",
    },
});