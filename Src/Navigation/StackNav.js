import { createStackNavigator } from '@react-navigation/stack';
import { Dashboardscreen } from '../Screens/Dashboard/Dashboard';
import { ProdctDetailscreen } from '../Screens/ProductDetails/DetailScreen';

const Stack = createStackNavigator();

const  StackNav=()=>{
  return (
    <Stack.Navigator>
          <Stack.Screen
        name="Home"
        component={Dashboardscreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="DetailProducts"
        component={ProdctDetailscreen}
        options={{
          headerShown: false
        }}
      />
  
    </Stack.Navigator>
  );
}
export default StackNav;