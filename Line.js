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

// class SanPham {
//     static getAllProduct() {

//     }
// }

class Triangle {
    constructor(diemA, diemB, diemC) {
        this.diemA = diemA;
        this.diemB = diemB;
        this.diemC = diemC;
    }

    static compare(t1, t2) {
        const cv1 = t1.getChuVi();
        const cv2 = t2.getChuVi();
        let msg;
        msg = cv1 > cv2 ? 'Tam giac 1 lon hon' : 'Tam giac 2 lon hon';
        msg = cv1 === cv2 ?  'Hai tam giac co chu vi bang nhau': '';
        return msg;
    }

    getChuVi() {
        const ab = new Line(this.diemA, this.diemB);
        const ac = new Line(this.diemA, this.diemC);
        const bc = new Line(this.diemB, this.diemC);
        return ab.getLength() + ac.getLength() + bc.getLength();
    }

    show() {
        console.log(this.getChuVi());
    }
}

const A = new Point(0, 0);
const B = new Point(1, 0);
const C = new Point(0, 1);
const D = new Point (100, 100)
const ABC = new Triangle(A, B, C);
const BAD = new Triangle(B, A, D);
// console.log(ABC.square);

const msg = Triangle.compare(BAD, ABC);
console.log(msg);
// ABC.show()

// ABC.hi();