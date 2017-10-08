import { Injectable } from '@angular/core';

@Injectable()
export class ScalladService {

  constructor() { }
     getAD(){
  	return [
            {
                "id":680,
                "name":"国庆出行好物",
                "url":"http://m.maizuo.com/act/active/1225",
                "imageUrl":"https://pic.maizuo.com/h5PicUpload/7ff4af809108bee5b9f69f5f26b7a687.jpg",
                "weight":5
            },
            {
                "id":682,
                "name":"英伦对决有价格",
                "url":"http://m.maizuo.com/v4/?co=maizuo#!/film/3858",
                "imageUrl":"https://pic.maizuo.com/h5PicUpload/bcb20d9fa5d448cc8fe499b3b9aa45bb.jpg",
                "weight":6
            }
        ]
  	
    }
}
