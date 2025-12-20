import {courses} from '../courses/data'

export function getCourseDetail(id){
    console.log('hi');
    console.log(courses[id]);
    
    return courses[id]
}