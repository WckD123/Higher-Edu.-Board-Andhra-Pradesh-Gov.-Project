import * as actionTypes from '../actions/action';

const initialState =  { 
    Id : "123",
    FirstName : "Mehul",
    LastName : "Kaushik",
    Email : "mkmehulkaushik@gmail.com",
    Education : "BITS Pilani Goa Campus",
    Experience : "Freelancer for AP Higher Education Board",
    LinkedInLink : "https://Linkedin.com/in/MehulKaushik",
    BoughtDocs : [{
        Type: "SOP",
        Course: "MBA",
        University: "Harvard",
        IsClicked : true,
        Content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        Type: "SOP",
        Course: "M.S.",
        University: "Stanford",
        IsClicked : false,
        Content : " 222222222 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    },
    {
        Type: "Interview",
        Course: "Job",
        University: "MIT",
        IsClicked : false,
        Content : " 333333333 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    }],
    UploadedDocs : [{
        Type: "Inteviews",
        Course: "Job",
        IsClicked : true,
        University: "Google",
        Content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    },
    {
        Type: "Fellowship",
        Course: "Internship",
        IsClicked : false,
        University: "Nandlal Dayaram",
        Content : "2222222 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    },
    {
        Type: "Fellowship",
        Course: "PHD",
        IsClicked : false,
        University: "Florida State",
        Content : "2222222 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    },
    {
        Type: "Interview",
        Course: "MBA",
        IsClicked : false,
        University: "MIT",
        Content : "33333333 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    }],
    TotalEarnings : "$9.8",
    AuthToken : "RandomAuthToken", 
    TokenExpiry : "ExpiredDate"
}

/*const setInitialState= () =>
{
    axios.get( 'https://gettin-4d3a5.firebaseio.com/Users.json' )
            .then( response => {
                const Users = response.data;
                const updatedUsers = {
                        ...Users
                    }
                this.setState({initialState: updatedUsers});
                console.log(this.state.initialState);
            } );
}
*/

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        
        default: return state;
    }
};

export default reducer;