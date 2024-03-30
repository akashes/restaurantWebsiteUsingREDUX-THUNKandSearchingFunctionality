import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// https://restaurant-backend-wcrj.onrender.com/restaurants
//asynchronous thunk
export const fetchRestaurants= createAsyncThunk('restaurantList/fetchRestaurants',()=>{
    //api call
    return axios.get('/restaurants.json').then((res)=>{
        console.log(res);
        return res.data.restaurants
    }).catch((err)=>{
        console.log(err);
    })
})




const restaurantSlice = createSlice({
    name:"restaurantList",
    initialState:{
        loading:false,
        allRestaurants:[],
        filteredRestaurants:[],
        allRestaurantsContainer:[],
        error:'',
        singleRest:{}
       
    },
    reducers:{
        search:(state,action)=>{
            console.log('inside search ');
            console.log(action.payload);
              
            // state.filteredRestaurants = state.allRestaurants.filter((item) => {
            //     const regex = new RegExp(action.payload, 'i'); // 'i' flag for case-insensitive matching
            //     return regex.test(item.neighborhood);
            //   });        
        //  state.filteredRestaurants= state.allRestaurants.filter((item)=>item.neighborhood.toLowerCase().includes(action.payload))
        state.allRestaurants = state.allRestaurantsContainer.filter((item)=>item.neighborhood.toLowerCase().includes(action.payload))

    },
    viewRest:(state,action)=>{
        console.log('inside view rest');
        console.log('viewRest',action.payload);
      state.singleRest=  state.allRestaurants.find((item)=>item.id==action.payload) 
        
    }
},
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurants.pending,(state)=>{
            console.log(state);
            state.loading=true
        })
        builder.addCase(fetchRestaurants.fulfilled,(state,action)=>{
            console.log(action);
            state.loading = false
            state.allRestaurants= action.payload
            state.allRestaurantsContainer=action.payload
            state.error = ''

        })
        builder.addCase(fetchRestaurants.rejected,(state,action)=>{
            state.loading = false
            state.allRestaurants=[]
            state.error = action.error.message
        })
    }
  
})
export const {search,viewRest} = restaurantSlice.actions
export default restaurantSlice.reducer