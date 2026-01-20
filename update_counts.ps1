$content = Get-Content "g:\My Drive\KHTN\js\questions-hoa.js" -Raw
$lines = Get-Content "g:\My Drive\KHTN\js\questions-hoa.js"
$topicMarkers = @("KIM LOẠI VÀ SỰ KHÁC NHAU CƠ BẢN VỚI PHI KIM", "GIỚI THIỆU VỀ CHẤT HỮU CƠ. HYDROCARBON VÀ NGUỒN NHIÊN LIỆU", "ETHYLIC ALCOHOL VÀ ACETIC ACID", "LIPIT. CARBOHYDRATE. PROTEIN. POLYMER", "TỔNG HỢP")
$topicLines = @()
foreach ($marker in $topicMarkers) {
  $escapedMarker = [regex]::Escape($marker)
  $match = $lines | Select-String -Pattern $escapedMarker | Select-Object -First 1
  if ($match) {
    $topicLines += $match.LineNumber - 1  # 0-based
  }
}
$topicLines += $lines.Count  # end
$counts = @()
for ($i = 0; $i -lt $topicLines.Count - 1; $i++) {
  $start = $topicLines[$i]
  $end = $topicLines[$i+1] - 1
  $section = $lines[$start..$end]
  $count = ($section | Select-String "{q:").Count
  $counts += $count
}
# Update _hoaCounts
$hoaCountsLine = "const _hoaCounts = [" + ($counts -join ',') + "];"
$match = $lines | Select-String "const _hoaCounts" | Select-Object -First 1
if ($match) {
    $hoaCountsIndex = $match.LineNumber - 1
    $lines[$hoaCountsIndex] = $hoaCountsLine
}
# Write back
$lines | Set-Content "`'g:\My Drive\KHTN\js\questions-hoa.js`'"