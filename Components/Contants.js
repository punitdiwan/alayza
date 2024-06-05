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


export const about = `

query{
  About_dr{
    about_dr
    more_info
    more_info_1
    more_info_2
    about_image{
      id
    }
  }
}
` 

export const testimonial =`query{
  Testimonials{
    testimonial_data
    testimonial_name
  }
  }`


export  const homeopathy = `
query{
  Homeopathy{
    h_heading
    h_parograph
  }
}
`