// 1) import Core Component ที่จะใช้
import { Image, StyleSheet, Text, View } from 'react-native';

// 2) ประกาศ Component หลัก (ชื่อขึ้นต้นด้วยตัวพิมพ์ใหญ่ และต้อง export default)
export default function Index() {
  return (
    // [1] View แม่ (Parent) ครอบทั้งหน้า
    <View style={styles.page}>
      {/* [2] Image รูปโปรไฟล์ — ใช้ภาพจากไฟล์ด้วย require() */}
      <Image source={require('@/assets/images/profile.jpg')} style={styles.pic} />

      {/* [3] Text ชื่อ และคำคม */}
      <Text style={styles.name}>ภูริทัต มิกขุนทด</Text>
      <Text style={styles.quote}>ล้มได้ แต่ต้องลุกขึ้นสู้ใหม่เสมอ</Text>

      {/* [4] View การ์ดข้อมูล — Text x 3 */}
      <View style={styles.card}>
        <Text style={styles.info}>ห้อง BTI.1/5 เลขที่ 15</Text>
        <Text style={styles.info}>Email: pooritat.mikkhuntod@e-tech.ac.th</Text>
        <Text style={styles.info}>Phone: 0639657772</Text>
      </View>

      {/* หัวข้อภาพกิจกรรม */}
      <Text style={styles.title}>ภาพกิจกรรม</Text>

      {/* [5] View แถวรูป — Image x 3 (ภาพจากลิงก์ ต้องกำหนด width/height) */}
      <View style={styles.row}>
        <Image source={{ uri: 'https://picsum.photos/id/1015/200' }} style={styles.photo} />
        <Image source={{ uri: 'https://picsum.photos/id/1018/200' }} style={styles.photo} />
        <Image source={{ uri: 'https://picsum.photos/id/1016/200' }} style={styles.photo} />
      </View>
    </View>
  );
}

// 3) StyleSheet แยก style ออกมา ตั้งชื่อแบบ camelCase ใช้ตัวเลขไม่ต้องใส่หน่วย
const styles = StyleSheet.create({
  page: {
    flex: 1, // ยืดเต็มหน้าจอ
    backgroundColor: '#ffffff',
    alignItems: 'center', // จัดลูกกึ่งกลางแนวนอน (cross axis)
    paddingTop: 100,
    paddingHorizontal: 24,
  },
  pic: {
    width: 150,
    height: 150,
    borderRadius: 75, // ครึ่งหนึ่งของความกว้าง = วงกลม
    borderWidth: 4,
    borderColor: '#4a90e2',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 16,
  },
  quote: {
    fontSize: 12,
    color: 'gray',
    fontStyle: 'italic',
    marginTop: 4,
  },
  card: {
    alignSelf: 'stretch', // ขยายเต็มความกว้าง
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
    // เงา iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // เงา Android
    elevation: 3,
  },
  info: {
    fontSize: 14,
    marginBottom: 4,
  },
  title: {
    alignSelf: 'flex-start', // ชิดซ้าย
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 24,
  },
  row: {
    flexDirection: 'row', // เรียงซ้ายไปขวา
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginTop: 12,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
