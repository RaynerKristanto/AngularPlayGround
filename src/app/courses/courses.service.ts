import { CourseComponent } from './../course/course.component';
export class CoursesService {
    courses: CourseComponent[] = [];

    getCourses(inputs: number) {
        for (let i = 0; i < inputs; i++) {
            let course = new CourseComponent();
            this.courses.push(course);
        }
        return this.courses;
    }
}