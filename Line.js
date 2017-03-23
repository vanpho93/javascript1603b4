class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(diemA, diemB) {
        this.diemA = diemA;
        this.diemB = diemB;
    }

    getLength() {
        const x1 = this.diemA.x;
        const x2 = this.diemB.x;
        const y1 = this.diemA.y;
        const y2 = this.diemB.y;
        const dx = x1 - x2;
        const dy = y1 - y2;
        return Math.sqrt(dx*dx + dy*dy);
    }
}

class Triangle {
    constructor(diemA, diemB, diemC) {
        this.diemA = diemA;
        this.diemB = diemB;
        this.diemC = diemC;
    }

    getChuVi() {
        const ab = new Line(this.diemA, this.diemB);
        const ac = new Line(this.diemA, this.diemC);
        const bc = new Line(this.diemB, this.diemC);
        return ab.getLength() + ac.getLength() + bc.getLength();
    }
}

const A = new Point(0, 0);
const B = new Point(1, 1);
const AB = new Line(A, B);
console.log(AB.getLength());
