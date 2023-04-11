export const slider = `
query{
  Slider{
    Slider_images{
      directus_files_id{
        id
      }
    }
  }
  }
`
export const Result = `
query{
  Result{
   Name
   Image{
    id
  }
 }
 }`





export const Timage = `
 query{
  Timage{
    THeading
    TInfo
    Timage{
      id
    }
  } 
  }`


export const Notice = `
  query{
    Notice{
      Notice1_date
      Notice1_info
      Notice2_date
      Notice2_info
      Notice3_date
      Notice3_info
      Notice4_date
      Notice4_info
    }
    }
  `
export const Gallery = `
  query{
    Gallery{
      Gallery_image{
        
          id
        }
      }
    
    }
  `