var userDetails;
$(document).ready(function(){
	$("#titleLabel,#title,#bodyLabel,#body").hide();	
	 $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){
	 if(status === 'success'){
           renderFormElements(data);
	 }
	 	
        });
	});
var renderFormElements = function(data){
userDetails = data;
 $("#userId").blur(function(){   
 			$("#titleLabel,#title,#bodyLabel,#body").hide();          	
           	var enteredId = $("#userId").val() ? parseInt($("#userId").val()):'';
             if(enteredId !== undefined && enteredId !== null && typeof(enteredId) === "number"){
             	var title,desc;
             	userDetails.forEach(function(item){
             		if(item && enteredId === item.id){
             			title = item.title;
             			desc = item.body;
             			return;
             		}
             	})
             	if(enteredId %2 === 0){  
             	if(!!title && !!desc)  {  
             		$("#title").val(title);      		
             		$("#body").val(desc);
             		$("#titleLabel,#title,#bodyLabel,#body").show(); 
             		}
            	}else{
            		if(!!title){
            		$("#title").val(title);
            		$("#titleLabel,#title").show();
            		$("#bodyLabel,#body").hide();
            		}
            	}
             }
            })
}
