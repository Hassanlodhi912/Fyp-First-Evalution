import { View } from "react-native"
import { TextInput, Button, Text } from "@react-native-material/core";
import { logoutUser } from '../../config/firebase'
import { blue } from "../../config/colors";

function Logout() {

    const handelPress = () => {
        logoutUser()
    }

    return <View>
        <Button
            variant="outlined"
            title="logout"
            color={blue}
            style={{ margin: 30, textAlign: "center" }}
            onPress={handelPress}
        >
        </Button>
    </View>
}

export default Logout