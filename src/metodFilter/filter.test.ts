test("should take old ages", () => {

    const ages = [18, 20, 22, 1, 100, 90, 14];



    const oldAges = ages.filter(age => age > 91);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);

});

test("should take old chip courses 160", () => {

    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150}
    ]


    const chipCourse = courses.filter(course => course.price < 160);

    expect(chipCourse.length).toBe(2);
    expect(chipCourse[0].title).toBe("CSS");
    expect(chipCourse[1].title).toBe("REACT");

})